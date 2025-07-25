import  { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import { 
  
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

import HeroSection from "../Landing/HeroSection";
import ServicesSection from "../Landing/ServicesSection";
import ExperienceSection from "../Landing/ExperienceSection";
import SpecializedLogisticsSection from "../Landing/SpecializedLogisticsSection";
import GlobalNetworkSection from "../Landing/GlobalNetworkSection";
import WhyChooseUsSection from "../Landing/WhyChooseUsSection";
import TestimonialsSection from "../Landing/TestimonialsSection";
import ContactSection from "../Landing/ContactSection";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'Experience', 'Network', 'Why Us', 'Testimonials', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-100/90"
        style={{
          boxShadow: scrollY > 50 
            ? 'inset 0 2px 4px rgba(255, 107, 53, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.05)'
            : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                style={{
                  background: 'linear-gradient(135deg, 0%,  100%)',
                  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)'
                }}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                  boxShadow: '6px 6px 12px rgba(255, 107, 53, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.9)'
                }}
                transition={{ duration: 0.6 }}
              >
                 <img
    src={logo}
    alt="Dasfan Logo"
    className="h-24 sm:h-32 md:h-48 lg:h-56 w-auto object-contain filter brightness-110 contrast-110 mx-auto"
    style={{
      imageRendering: 'crisp-edges', // For pixel-perfect rendering
      maxWidth: '100%',
      height: 'auto'
    }}
  />
              </motion.div>
              <span className="text-2xl font-bold text-gray-800">Dasfan</span>
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
                  whileHover={{ 
                    y: -2,
                    scale: 1.05,
                    color: '#FF6B35'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="hidden md:block rounded-xl px-6 py-3 font-semibold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                  border: 'none'
                }}
              >
                Get Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <SpecializedLogisticsSection />
        <GlobalNetworkSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
               <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                style={{
                  background: 'linear-gradient(135deg, 0%,  100%)',
                  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)'
                }}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                  boxShadow: '6px 6px 12px rgba(255, 107, 53, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.9)'
                }}
                transition={{ duration: 0.6 }}
              >
                 <img
    src={logo}
    alt="Dasfan Logo"
    className="h-24 sm:h-32 md:h-48 lg:h-56 w-auto object-contain filter brightness-110 contrast-110 mx-auto"
    style={{
      imageRendering: 'crisp-edges', // For pixel-perfect rendering
      maxWidth: '100%',
      height: 'auto'
    }}
  />
              </motion.div>
              <span className="text-2xl font-bold text-gray-800">Dasfan</span>
            </motion.div>
              <p className="text-gray-600">
                Orchestrating the future of global trade with precision, passion, and unparalleled expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Core Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Ocean Freight</li>
                <li>Air Freight</li>
                <li>Land Transport</li>
                <li>Customs & Compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Our Network</li>
                <li>Careers</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div>
  <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
  <div className="space-y-4 text-gray-600">
    {/* Phone Numbers */}
    <motion.div 
      className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center space-x-2">
        <Phone className="w-4 h-4" />
        <span className="font-medium">Phone:</span>
      </div>
      <div className="flex flex-col  sm:space-x-4 text-orange-600">
        <a href="tel:+233243759230" className="hover:underline">+233243759230</a>
        <a href="tel:+233504657606" className="hover:underline">+233504657606</a>
      </div>
    </motion.div>

    {/* Emails */}
    <motion.div 
      className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4" />
        <span className="font-medium">Email:</span>
      </div>
      <div className="flex flex-col  sm:space-x-4  text-orange-600">
        <a href="mailto:dasfanfreight19@gmail.com" className="hover:underline">dasfanfreight19@gmail.com</a>
        <a href="mailto:stevenannordarko@gmail.com" className="hover:underline">stevenannordarko@gmail.com</a>
      </div>
    </motion.div>

    {/* Address */}
    <motion.div 
      className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-1 sm:space-y-0"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4" />
        <span className="font-medium">Address:</span>
      </div>
      <span>Shop No. CA 12 Mankoadze shopping center | Comm. 1</span>
    </motion.div>
  </div>
</div>

          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Dasfan Global Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}