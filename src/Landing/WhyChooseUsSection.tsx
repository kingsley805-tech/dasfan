
import { motion } from "framer-motion";
import { Cpu, Users, Globe2} from "lucide-react";

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      description: "Our proprietary platform provides real-time tracking, predictive analytics, and complete supply chain visibility.",
    },
    {
      icon: Users,
      title: "Unmatched Expertise",
      description: "Our team of seasoned logistics professionals offers bespoke solutions and navigates complex customs regulations with ease.",
    },
    {
      icon: Globe2,
      title: "Global Reach, Local Touch",
      description: "Leverage our extensive worldwide network, supported by local experts who understand the nuances of your market.",
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            The Dasfan
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Advantage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're more than a service provider; we're an extension of your team, committed to your success. Discover the pillars of our promise to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div 
                    className="rounded-3xl overflow-hidden"
                    style={{
                        boxShadow: '16px 16px 32px rgba(0, 0, 0, 0.1), -16px -16px 32px rgba(255, 255, 255, 0.8)'
                    }}
                >
                <img
                    src="https://media.istockphoto.com/id/543444238/photo/warehouses.jpg?s=612x612&w=0&k=20&c=x18iwnGCrnB61sU7NWk8pKInngNej3Keiygzy_DNRyU="
                    alt="A diverse team of professionals collaborating around a laptop in a modern office"
                    className="w-full h-full object-cover"
                />
                </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-6 group"
                whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                      boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)'
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -10, 10, -5, 0],
                      boxShadow: '6px 6px 12px rgba(255, 107, 53, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.9)',
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
                    <pillar.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
