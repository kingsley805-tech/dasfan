import React, { useState, useEffect, useRef } from 'react';

// Type definitions
interface Port {
  id: string;
  name: string;
  x: number;
  y: number;
  teu: string;
  country: string;
  status: 'active' | 'congested' | 'delayed';
}

interface Route {
  id: string;
  from: { x: number; y: number };
  to: { x: number; y: number };
  name: string;
  volume: string;
}

interface Metrics {
  dailyTEU: string;
  activeRoutes: number;
  portEfficiency: string;
}

interface Alert {
  id: string;
  location: string;
  status: 'warning' | 'normal' | 'critical';
  message: string;
  icon: string;
  color: string;
}

interface TooltipData {
  content: string;
  x: number;
  y: number;
  visible: boolean;
}

const LogisticsWorldMap: React.FC = () => {
  // State management
  const [tooltip, setTooltip] = useState<TooltipData>({
    content: '',
    x: 0,
    y: 0,
    visible: false
  });

  const [metrics, setMetrics] = useState<Metrics>({
    dailyTEU: '2.4M',
    activeRoutes: 847,
    portEfficiency: '94.2%'
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Static data
  const ports: Port[] = [
    { id: '1', name: "Shanghai", x: 72, y: 35, teu: "47.3M", country: "China", status: 'active' },
    { id: '2', name: "Singapore", x: 68, y: 52, teu: "37.2M", country: "Singapore", status: 'active' },
    { id: '3', name: "Rotterdam", x: 50, y: 28, teu: "15.3M", country: "Netherlands", status: 'active' },
    { id: '4', name: "Los Angeles", x: 18, y: 38, teu: "10.7M", country: "USA", status: 'active' },
    { id: '5', name: "Hamburg", x: 51, y: 26, teu: "8.9M", country: "Germany", status: 'congested' },
    { id: '6', name: "Dubai", x: 58, y: 42, teu: "15.3M", country: "UAE", status: 'active' },
    { id: '7', name: "Hong Kong", x: 71, y: 40, teu: "18.1M", country: "Hong Kong", status: 'active' },
    { id: '8', name: "Busan", x: 74, y: 32, teu: "22.9M", country: "South Korea", status: 'active' },
    { id: '9', name: "Long Beach", x: 18, y: 40, teu: "8.1M", country: "USA", status: 'active' },
    { id: '10', name: "Antwerp", x: 50, y: 27, teu: "12.0M", country: "Belgium", status: 'active' }
  ];

  const routes: Route[] = [
    { id: '1', from: { x: 72, y: 35 }, to: { x: 50, y: 28 }, name: "Asia-Europe", volume: "24.3M TEU/year" },
    { id: '2', from: { x: 72, y: 35 }, to: { x: 18, y: 38 }, name: "Trans-Pacific", volume: "18.7M TEU/year" },
    { id: '3', from: { x: 68, y: 52 }, to: { x: 58, y: 42 }, name: "Southeast-Middle East", volume: "8.4M TEU/year" },
    { id: '4', from: { x: 50, y: 28 }, to: { x: 18, y: 38 }, name: "Europe-Americas", volume: "12.4M TEU/year" },
    { id: '5', from: { x: 74, y: 32 }, to: { x: 18, y: 40 }, name: "Korea-USA", volume: "6.2M TEU/year" }
  ];

  const alerts: Alert[] = [
    { id: '1', location: "Suez Canal", status: 'warning', message: "Delivered before shipping date", icon: "⚠️", color: "black" },
    { id: '2', location: "Panama Canal", status: 'normal', message: "Normal flow", icon: "✅", color: "black" },
    { id: '3', location: "Port of Hamburg", status: 'critical', message: "None", icon: "🔴", color: "black" }
  ];

  // Event handlers
  const handlePortHover = (port: Port, event: React.MouseEvent) => {
    const content = `
      <strong >${port.name}</strong><br>
      Country: ${port.country}<br>
      TEU/Year: ${port.teu}<br>
      Status: ${port.status}
    `;
    setTooltip({
      content,
      x: event.pageX + 10,
      y: event.pageY - 10,
      visible: true
    });
  };

  const handlePortLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip(prev => ({
        ...prev,
        x: event.pageX + 10,
        y: event.pageY - 10
      }));
    }

    // Update mouse position for background effect
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight
    });
  };

  // Calculate route styles
  const getRouteStyle = (route: Route) => {
    const deltaX = route.to.x - route.from.x;
    const deltaY = route.to.y - route.from.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    return {
      left: `${route.from.x}%`,
      top: `${route.from.y}%`,
      width: `${distance}%`,
      transform: `rotate(${angle}deg)`,
      transformOrigin: 'left center'
    };
  };

  // Update metrics periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        dailyTEU: (parseFloat(prev.dailyTEU) + (Math.random() - 0.5) * 0.1).toFixed(1) + 'M',
        activeRoutes: prev.activeRoutes + Math.floor((Math.random() - 0.5) * 10),
        portEfficiency: (parseFloat(prev.portEfficiency) + (Math.random() - 0.5) * 0.1).toFixed(1) + '%'
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle: React.CSSProperties = {
    background: `
      radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
      rgba(245, 166, 35, 0.1) 0%, 
      transparent 50%), 
      linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #ffedd5 100%)

    `
  };

  return (
    <div 
      ref={containerRef}
      className="w-screen bg-white h-screen relative overflow-hidden font-sans text-white "
      style={containerStyle}
      onMouseMove={handleMouseMove}
    >
      {/* Header */}
     <div className="absolute top-5 left-5 z-50 bg-white bg-opacity-70 p-4 rounded-xl backdrop-blur-md">
        <h1 className="text-2xl mb-1  bg-clip-text text-orange-500 font-bold">
          Dasfan <span className='text-black'>Global Logistics Network</span>
        </h1>
        <p className="text-sm opacity-80 text-black">Real-time shipping routes and port data</p>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-full overflow-hidden ">
        <div 
          className="w-full h-full relative"
          style={{
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" fill="%23f5a623"/><g fill="%23ff6b35" stroke="%23ffffff" stroke-width="0.5"><path d="M150 200 L200 180 L250 190 L300 200 L350 180 L400 190 L450 200 Z"/><path d="M500 220 L550 200 L600 210 L650 220 L700 200 L750 210 L800 220 Z"/><path d="M100 300 L150 280 L200 290 L250 300 L300 280 L350 290 L400 300 Z"/><path d="M450 320 L500 300 L550 310 L600 320 L650 300 L700 310 L750 320 Z"/><path d="M200 100 L250 80 L300 90 L350 100 L400 80 L450 90 L500 100 Z"/><path d="M550 120 L600 100 L650 110 L700 120 L750 100 L800 110 L850 120 Z"/></g></svg>') center/cover`
          }}
        >
          {/* Logistics Layer */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Shipping Routes */}
            {routes.map((route, index) => (
              <div
                key={route.id}
                className="absolute h-0.5 opacity-70"
                style={{
                  ...getRouteStyle(route),
                  background: 'linear-gradient(90deg, transparent 0%, #ff6b35 20%, #ff6b35 80%, transparent 100%)',
                  animation: `flow 3s linear infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              />
            ))}

            {/* Ports */}
            {ports.map((port) => (
              <div
                key={port.id}
                className={`absolute w-3 h-3 rounded-full cursor-pointer pointer-events-auto transition-all duration-300 hover:scale-150 ${
                  port.status === 'congested' ? 'bg-orange-500' : 
                  port.status === 'delayed' ? 'bg-orange-700' : 
                  'bg-orange-400'
                }`}
                style={{
                  left: `${port.x}%`,
                  top: `${port.y}%`,
                  background: port.status === 'active' 
                    ? 'radial-gradient(circle, black 0%, #f5a623 100%)'
                    : port.status === 'congested'
                    ? 'radial-gradient(circle, #ff6b35 0%, #f57c00 100%)'
                    : 'radial-gradient(circle, #ff6b35 0%, #d9480f 100%)',
                  boxShadow: `0 0 15px rgba(245, 166, 35, 0.8)`,
                  animation: 'pulse 2s infinite'
                }}
                onMouseEnter={(e) => handlePortHover(port, e)}
                onMouseLeave={handlePortLeave}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Data Panel */}
      <div className="absolute top-5 right-5 w-80 bg-black bg-opacity-80 pb-6 rounded-2xl p-5 backdrop-blur-md border border-white border-opacity-10 max-h-[80vh] overflow-y-auto">
        {/* Global Trade Volume */}
        <div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-orange-400">
          <h3 className="text-lg mb-2 text-orange-400 font-semibold">Global Trade Volume</h3>
          <div className="flex justify-between mb-1">
            <span className='text-black'>Daily TEU:</span>
            <span className="font-bold text-orange-300">{metrics.dailyTEU}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className='text-black'>Active Routes:</span>
            <span className="font-bold text-orange-300">{metrics.activeRoutes}</span>
          </div>
          <div className="flex justify-between">
            <span className='text-black'>Port Efficiency:</span>
            <span className="font-bold text-orange-300">{metrics.portEfficiency}</span>
          </div>
        </div>

        {/* Top Shipping Routes */}
        <div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-orange-400">
          <h3 className="text-lg mb-2 text-orange-400 font-semibold">Top Shipping Routes</h3>
          <p className="text-sm leading-relaxed text-black"><strong className='text-orange-600'>1.</strong> Asia-Europe: 24.3M TEU/year</p>
          <p className="text-sm leading-relaxed text-black"><strong className='text-orange-600'>2.</strong> Trans-Pacific: 18.7M TEU/year</p>
          <p className="text-sm leading-relaxed text-black"><strong className='text-orange-600'>3.</strong> Asia-Americas: 12.4M TEU/year</p>
        </div>

        {/* Busiest Ports */}
        <div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-orange-400">
          <h3 className="text-lg mb-2 text-orange-400 font-semibold">Busiest Ports</h3>
          <p className="text-sm leading-relaxed text-black"><strong className='text-orange-600'>Shanghai:</strong> 47.3M TEU</p>
          <p className="text-sm leading-relaxed text-black"><strong className='text-orange-600'>Singapore:</strong> 37.2M TEU</p>
          <p className="text-sm leading-relaxed text-black"><strong className='text-orange-600'>Rotterdam:</strong> 15.3M TEU</p>
          <p className="text-sm leading-relaxed text-black"><strong className='text-orange-600'>Los Angeles:</strong> 10.7M TEU</p>
        </div>

        {/* Current Alerts */}
        <div className="bg-white bg-opacity-10 p-4 rounded-xl border-l-4 border-orange-400">
          <h3 className="text-lg mb-2 text-orange-400 font-semibold">Current Alerts</h3>
          {alerts.map((alert) => (
            <p key={alert.id} className="text-sm leading-relaxed" style={{ color: alert.color }}>
              {alert.icon} {alert.location}: {alert.message}
            </p>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-5 left-5 bg-black bg-opacity-80 p-4 rounded-xl backdrop-blur-md">
        <div className="flex items-center mb-2">
          <div className="w-5 h-1 mr-3 rounded bg-orange-400"></div>
          <span className="text-sm">Major Ports</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-5 h-1 mr-3 rounded bg-orange-500"></div>
          <span className="text-sm">Shipping Routes</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-1 mr-3 rounded bg-orange-600"></div>
          <span className="text-sm">High Traffic</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute bg-black bg-opacity-90 text-white p-3 rounded-lg text-xs pointer-events-none z-50 border border-orange-400 transition-opacity duration-300"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            opacity: tooltip.visible ? 1 : 0
          }}
          dangerouslySetInnerHTML={{ __html: tooltip.content }}
        />
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes flow {
          0% { background-position: -100px 0; }
          100% { background-position: 100px 0; }
        }
      `}</style>
    </div>
  );
};

export default LogisticsWorldMap;



 