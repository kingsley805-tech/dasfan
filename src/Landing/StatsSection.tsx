
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Users, Package, Globe, Clock } from "lucide-react";

// Helper function to parse the number and its suffix from the stat string
const parseStatNumber = (str: string) => {
  const match = str.match(/^([\d.]+)([A-Za-z%+]*)?$/);
  if (match) {
    const value = parseFloat(match[1]);
    const suffix = match[2] || '';
    return { value, suffix };
  }
  return { value: 0, suffix: '' }; // Fallback
};

// Component to animate a number
function AnimatedNumber({ value, suffix, index }) {
  const nodeRef = useRef(null);
  // useInView to trigger the animation when the component enters the viewport
  const isInView = useInView(nodeRef, { once: true });

  // useMotionValue to create an animatable value that starts from 0
  const count = useMotionValue(0);

  // useTransform to format the number as it animates, adding localization and decimal handling
  const display = useTransform(count, (latest) => {
    // If the original value had decimals, ensure one decimal place is always shown
    if (value % 1 !== 0) {
      return (Math.round(latest * 10) / 10).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    // Otherwise, round to the nearest integer and format
    return Math.round(latest).toLocaleString('en-US');
  });

  // useEffect to trigger the number animation when it comes into view
  useEffect(() => {
    if (isInView) {
      // Animate the 'count' MotionValue from 0 to the target 'value'
      const controls = animate(count, value, {
        duration: 1.5, // Duration of the counting animation
        delay: index * 0.15, // Stagger delay for each stat card
        ease: "easeOut"
      });
      return controls.stop; // Clean up animation on unmount
    }
  }, [isInView, value, index, count]);

  return (
    <motion.div
      ref={nodeRef}
      className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2"
      // Opacity animation for the entire number block, aligning with the count animation
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <motion.span>{display}</motion.span>{suffix}
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Global Partners",
      description: "Trusted logistics partners worldwide"
    },
    {
      icon: Package,
      number: "50K+",
      label: "Shipments Delivered",
      description: "Successfully completed deliveries"
    },
    {
      icon: Globe,
      number: "120+",
      label: "Countries Served",
      description: "Global reach and connectivity"
    },
    {
      icon: Clock,
      number: "99.9%",
      label: "On-time Delivery",
      description: "Reliable and punctual service"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our numbers speak for themselves. See why businesses worldwide choose Dasfan for their logistics needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div 
                className="rounded-3xl p-8 bg-white transition-all duration-500 hover:scale-105"
                style={{
                  boxShadow: '12px 12px 24px rgba(255, 107, 53, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '8px 8px 16px rgba(255, 107, 53, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.95)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '12px 12px 24px rgba(255, 107, 53, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)';
                }}
              >
                {/* Icon */}
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                    boxShadow: '6px 6px 12px rgba(255, 107, 53, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </div>

                {/* Number - Now animated using the new AnimatedNumber component */}
                <AnimatedNumber 
                  value={parseStatNumber(stat.number).value} 
                  suffix={parseStatNumber(stat.number).suffix} 
                  index={index} 
                />

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
