
import { motion } from "framer-motion";

import LogisticsDigital from "../Landing/LogisticDigitalMap"

export default function GlobalNetworkSection() {
    return (
        <section id="network" className="py-20 bg-gray-100 ">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-100/95 to-gray-100"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Our Unrivaled
                        <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            Global Network
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Connecting continents, businesses, and possibilities. Our strategic presence across the globe ensures your cargo is always in trusted hands.
                    </p>
                </motion.div>
            </div>
            <LogisticsDigital/>
        </section>
    );
}
