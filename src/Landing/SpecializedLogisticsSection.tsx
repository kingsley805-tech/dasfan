

import { motion } from "framer-motion";
import { Thermometer, Box, HardHat, Warehouse } from "lucide-react";

export default function SpecializedLogisticsSection() {
    const services = [
        { icon: Thermometer, title: "Cold Chain Logistics", description: "Temperature-controlled transport for sensitive goods like pharmaceuticals and perishables." },
        { icon: Box, title: "E-Commerce Fulfillment", description: "End-to-end solutions from warehousing and inventory to final delivery for online retailers." },
        { icon: HardHat, title: "Project Cargo", description: "Specialized handling for oversized, heavy-lift, or high-value industrial equipment." },
        { icon: Warehouse, title: "Warehousing & Distribution", description: "State-of-the-art facilities for secure storage, inventory management, and distribution." }
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
                        Beyond the Standard:
                        <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            Specialized Solutions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We go the extra mile with specialized services designed for your unique industry challenges and complex logistical needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                              y: -8,
                              scale: 1.05,
                              boxShadow: '16px 16px 32px rgba(255, 107, 53, 0.15), -16px -16px 32px rgba(255, 255, 255, 0.95)',
                              transition: { type: 'spring', stiffness: 300 }
                            }}
                            className="text-center group"
                        >
                            <div
                                className="rounded-3xl p-8 bg-white h-full transition-shadow duration-300"
                                style={{
                                    boxShadow: '12px 12px 24px rgba(255, 107, 53, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)'
                                }}
                            >
                                <motion.div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                        boxShadow: '6px 6px 12px rgba(255, 107, 53, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                                    }}
                                    whileHover={{
                                      scale: 1.15,
                                      rotate: [-10, 10, -5, 0],
                                      boxShadow: '8px 8px 16px rgba(255, 107, 53, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                                      transition: { duration: 0.6 }
                                    }}
                                    animate={{
                                      y: [0, -5, 0],
                                      rotate: [0, 2, -2, 0],
                                      transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                      }
                                    }}
                                >
                                    <service.icon className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
