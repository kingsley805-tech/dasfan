import { useState, useEffect } from "react";
import logo from "../assets/logo1.svg";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { 
  Phone,
  Mail,
  MapPin,

  X
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
    const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 8000); // 8 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  const navLinks = ['Services', 'Experience', 'Network', 'Why Us', 'Testimonials', 'Contact'];

  return (
   
    <>
     {!showContent ?( <div className="flex items-center justify-center min-h-screen w-full px-4">
  <DotLottieReact
    src="https://lottie.host/2a944fe6-0e86-49cf-b887-71a048925d00/r8x6onGu09.lottie"
    loop
    autoplay
    style={{ maxWidth: "100%", height: "auto" }}
  />
</div>
):( <div className="min-h-screen bg-gray-100 overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                style={{
                 
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
                  className="h-8 sm:h-12 w-auto object-contain filter brightness-110 contrast-110"
                  style={{
                    imageRendering: 'crisp-edges',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </motion.div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">Dasfan</span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300"
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

            {/* Desktop CTA Button */}
            <motion.div 
              className="hidden lg:block"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="rounded-xl px-6 py-3 text-center font-semibold transition-all duration-300 bg-orange-600"
                style={{
               
                  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                  border: 'none'
                }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Quote
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-gray-200 transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 relative"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-6 h-0.5 bg-current transform origin-center"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-2 left-0 w-6 h-0.5 bg-current"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 left-0 w-6 h-0.5 bg-current transform origin-center"
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl lg:hidden z-50"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)'
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/20">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-orange-600 font-bold text-sm bg-white"
                      >
                        <img
                          src={logo}
                          alt="Dasfan Logo"
                          className="h-6 w-auto object-contain filter brightness-110 contrast-110"
                        />
                      </div>
                      <span className="text-lg font-bold text-white">Dasfan</span>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close mobile menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile Menu Links */}
                  <div className="flex-1 px-6 py-6 bg-orange-600">
                    <nav className="space-y-4">
                      {navLinks.map((item, index) => (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase().replace(' ', '-')}`}
                          onClick={handleLinkClick}
                          className="block py-3 px-4 text-white hover:text-orange-100 hover:bg-white/10 rounded-lg font-medium transition-colors duration-200"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </nav>
                     {/* Mobile CTA Button */}
                  <div className="p-6 border-t border-white/20">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full rounded-xl px-6 py-3 text-center font-semibold transition-all duration-300 bg-white text-orange-600 hover:bg-orange-50 border-none"
                        onClick={() => {
                          handleLinkClick();
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Get Quote
                      </Button>
                    </motion.div>
                  </div>
                  </div>

                 
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
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
      <footer className="bg-gray-100 py-8 sm:py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div 
                className="flex items-center space-x-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                  style={{
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
                    className="h-8 sm:h-12 w-auto object-contain filter brightness-110 contrast-110"
                    style={{
                      imageRendering: 'crisp-edges',
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </motion.div>
                <span className="text-xl sm:text-2xl font-bold text-gray-800">Dasfan</span>
              </motion.div>
              <p className="text-gray-600 text-sm sm:text-base">
                Orchestrating the future of global trade with precision, passion, and unparalleled expertise.
              </p>
            </div>

            {/* Core Services */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg">Core Services</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>Ocean Freight</li>
                <li>Air Freight</li>
                <li>Land Transport</li>
                <li>Customs & Compliance</li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg">Explore</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>About Us</li>
                <li>Our Network</li>
                <li>Careers</li>
                <li>Sustainability</li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg">Connect</h4>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                {/* Phone Numbers */}
                <motion.div 
                  className="flex flex-col space-y-1"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">Phone:</span>
                  </div>
                  <div className="flex flex-col ml-6 space-y-1 text-orange-600">
                    <a href="tel:+233243759230" className="hover:underline break-all">+233243759230</a>
                    <a href="tel:+233504657606" className="hover:underline break-all">+233504657606</a>
                  </div>
                </motion.div>

                {/* Emails */}
                <motion.div 
                  className="flex flex-col space-y-1"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">Email:</span>
                  </div>
                  <div className="flex flex-col ml-6 space-y-1 text-orange-600">
                    <a href="mailto:dasfanfreight19@gmail.com" className="hover:underline break-all">dasfanfreight19@gmail.com</a>
                    <a href="mailto:stevenannordarko@gmail.com" className="hover:underline break-all">stevenannordarko@gmail.com</a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div 
                  className="flex flex-col space-y-1"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Address:</span>
                  </div>
                  <span className="ml-6 text-sm">Shop No. CA 12 Mankoadze shopping center | Comm. 1</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-6 sm:pt-8 text-center text-gray-600 text-sm sm:text-base">
            <p>&copy; 2025 Dasfan Global Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    
    </div>)}
    </>
  );
}