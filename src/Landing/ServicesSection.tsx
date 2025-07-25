

import { motion } from "framer-motion";
import { Ship, Plane, Truck, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Harness the power of the seas with our reliable and cost-effective ocean freight solutions.",
      image: "https://media.istockphoto.com/id/1474410944/photo/large-container-ship-in-harbour-on-a-clear-summer-day.jpg?s=612x612&w=0&k=20&c=2CuIZpVfci8HD-TQ-UGJ7HQVuqDqsQC8Bl5LMbyi0IE=",
      features: ["Full Container Load (FCL)", "Less-than-Container Load (LCL)", "Refrigerated Cargo", "Project Cargo"]
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "When speed is paramount, our global air freight network delivers with precision and urgency.",
      image: "https://media.istockphoto.com/id/1214790793/photo/race-horse-is-loading-to-the-airplane.jpg?s=612x612&w=0&k=20&c=XrhC7QYQRJvZoElnuOclzwe8Ouh_hePN03eeFAP0qU4=",
      features: ["Next-Flight-Out", "Air Charter Services", "Hazardous Materials", "High-Value Shipments"]
    },
    {
      icon: Truck,
      title: "Land Transport",
      description: "Seamless domestic and cross-border ground logistics connecting every point on the map.",
      image: "https://media.istockphoto.com/id/1221481511/photo/heavy-transport-in-a-city.jpg?s=612x612&w=0&k=20&c=9u5ylr6AJ0ocKLB_zcNV4BZVf4gfsos6F267zN_70Hs=",
      features: ["Full Truckload (FTL)", "Less-than-Truckload (LTL)", "Last-Mile Delivery", "Intermodal Transport"]
    },
  ];
  
  const featureListAnimation = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const featureItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Core
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Logistics Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the high seas to the open skies and the roads that connect them, we provide a triad of services to power your supply chain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                boxShadow: '16px 16px 32px rgba(0, 0, 0, 0.12), -16px -16px 32px rgba(255, 255, 255, 0.95)',
                transition: { type: 'spring', stiffness: 300 } 
              }}
              className="group cursor-pointer rounded-3xl p-8 h-full bg-white flex flex-col"
              style={{
                boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.08), -12px -12px 24px rgba(255, 255, 255, 0.9)'
              }}
            >
              <div 
                className="w-full h-48 rounded-2xl mb-6 overflow-hidden"
                style={{ boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8)' }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <motion.div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                  boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                }}
                whileHover={{
                  rotate: [0, -15, 15, -10, 0],
                  scale: 1.15,
                  boxShadow: '8px 8px 16px rgba(255, 107, 53, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                  transition: { duration: 0.6 }
                }}
                animate={{
                  y: [0, -3, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <motion.div 
                className="mt-auto space-y-3 pt-4 border-t border-gray-200"
                variants={featureListAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                 {service.features.map(feature => (
                   <motion.div 
                     key={feature} 
                     className="flex items-center gap-2" 
                     variants={featureItemAnimation}
                     whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                   >
                     <motion.div
                       whileHover={{ 
                         rotate: 360,
                         scale: 1.2,
                         transition: { duration: 0.5 }
                       }}
                     >
                       <CheckCircle className="w-5 h-5 text-orange-400" />
                     </motion.div>
                     <span className="text-gray-700">{feature}</span>
                   </motion.div>
                 ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
