import { motion } from "framer-motion";
import { Award, Calendar, Users2, TrendingUp, Globe, ShieldCheck, Star } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Calendar,
      number: "25+",
      label: "Years of Excellence",
      description: "A quarter-century of logistics mastery, refined through countless successful deliveries.",
      color: "from-blue-500 to-blue-600",
      startColor: "#3b82f6",
      endColor: "#2563eb"
    },
    {
      icon: Users2,
      number: "2000+",
      label: "Expert Team Members",
      description: "Seasoned professionals across the globe, each bringing specialized knowledge to your shipments.",
      color: "from-green-500 to-green-600",
      startColor: "#10b981",
      endColor: "#059669"
    },
    {
      icon: TrendingUp,
      number: "500K+",
      label: "Successful Shipments",
      description: "Half a million success stories, from small parcels to massive industrial projects.",
      color: "from-purple-500 to-purple-600",
      startColor: "#8b5cf6",
      endColor: "#7c3aed"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries Connected",
      description: "Our network spans across continents, ensuring your cargo reaches every corner of the world.",
      color: "from-orange-500 to-orange-600",
      startColor: "#f97316",
      endColor: "#ea580c"
    }
  ];

  const milestones = [
    {
      year: "1999",
      title: "Founded in Ghana",
      description: "Started as a small freight forwarding company with big dreams.",
      icon: Star
    },
    {
      year: "2005",
      title: "First International Expansion",
      description: "Opened offices in Ghana and outside Ghana, establishing our global footprint.",
      icon: Globe
    },
    {
      year: "2012",
      title: "Technology Innovation",
      description: "Launched our proprietary tracking platform, revolutionizing shipment visibility.",
      icon: TrendingUp
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "Committed to carbon-neutral shipping and green logistics solutions.",
      icon: ShieldCheck
    },
    {
      year: "2024",
      title: "AI-Powered Logistics",
      description: "Integrated artificial intelligence to optimize routes and predict delivery times.",
      icon: Award
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "C-TPAT Certified", description: "Customs-Trade Partnership" },
    { name: "IATA Cargo Agent", description: "International Air Transport" },
    { name: "AEO Certified", description: "Authorized Economic Operator" }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
  Two Decades of
  <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
    Logistics Excellence
  </span>
</h2>

          <p className="text-xl text-left text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to global leadership, our journey is marked by innovation, 
            growth, and an unwavering commitment to connecting the world through logistics.
          </p>
        </motion.div>

        {/* Experience Stats */}
       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="text-center group"
            >
              <div 
                className="rounded-3xl p-8 bg-white h-full transition-all duration-500 shadow-2xl hover:shadow-3xl"
                style={{
                  boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.08), -12px -12px 24px rgba(255, 255, 255, 0.9)'
                }}
              >
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${exp.startColor} 0%, ${exp.endColor} 100%)`,
                    boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                  }}
                  whileHover={{
                    rotate: [0, -10, 10, -5, 0],
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <exp.icon className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  className={`text-4xl text-left lg:text-5xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  {exp.number}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 text-left">
                  {exp.label}
                </h3>

                <p className="text-gray-600 leading-relaxed text-left">
  {exp.description}
</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Journey Through Time
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-300 to-orange-500 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'text-right mr-8' : 'text-left ml-8'}`}>
                  <motion.div
                    className="rounded-2xl p-6 bg-white"
                    style={{
                      boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.08), -8px -8px 16px rgba(255, 255, 255, 0.9)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '12px 12px 24px rgba(255, 107, 53, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                          backgroundColor: '#FF6B35'
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <milestone.icon className="w-5 h-5 text-orange-500" />
                      </motion.div>
                      <span className="text-2xl font-bold text-orange-500">{milestone.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                    boxShadow: '0 0 0 4px white, 0 0 0 8px rgba(255, 107, 53, 0.2)'
                  }}
                  whileHover={{ 
                    scale: 1.5,
                    boxShadow: '0 0 0 6px white, 0 0 0 12px rgba(255, 107, 53, 0.3)'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Industry Certifications & Compliance
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="text-center p-6 rounded-2xl bg-white"
                style={{
                  boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.08), -8px -8px 16px rgba(255, 255, 255, 0.9)'
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <ShieldCheck className="w-8 h-8 text-orange-500" />
                </motion.div>
                <h4 className="font-bold text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}