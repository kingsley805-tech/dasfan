
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setTimeout(() => setIsSubmitting(false), 2000); // Simulate API call
  };

  const contactInfo = [
    { icon: Phone, label: "24/7 Support Line", value: "+233243759230", description: "For immediate, expert assistance" },
    { icon: Mail, label: "Global Inquiries", value: "dasfanfreight19@gmail.com", description: "For quotes and service questions" },
    { icon: MapPin, label: "Headquarters", value: "Shop No. CA 12 Mankoadze", description: "Our strategic command center" },
    { icon: Users, label: "Partnerships", value: "francis@dasfan.com", description: "Explore synergy with us" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Let's Build<span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Together</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Your next logistical success story starts with a simple conversation. Reach out to our team of experts and let's set your business in motion.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Your Direct Line to Global Trade</h3>
              <p className="text-lg text-gray-600 leading-relaxed">We are always available to discuss your needs. Contact us via your preferred method below, or use the form to send a detailed inquiry.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
                  <div className="rounded-2xl p-6 bg-white transition-all duration-300 hover:scale-105" style={{ boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.08), -8px -8px 16px rgba(255, 255, 255, 0.9)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)' }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{item.label}</h4>
                    <p className="font-semibold text-orange-500 mb-2">{item.value}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="rounded-3xl p-8 bg-white" style={{ boxShadow: '16px 16px 32px rgba(0, 0, 0, 0.1), -16px -16px 32px rgba(255, 255, 255, 0.8)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }}><Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="rounded-xl py-3 px-4 border-none bg-gray-100 text-gray-800 placeholder-gray-500" style={{ boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8)' }} /></motion.div>
                <motion.div whileHover={{ scale: 1.02 }}><Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="rounded-xl py-3 px-4 border-none bg-gray-100 text-gray-800 placeholder-gray-500" style={{ boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8)' }} /></motion.div>
                <motion.div whileHover={{ scale: 1.02 }}><Input placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="rounded-xl py-3 px-4 border-none bg-gray-100 text-gray-800 placeholder-gray-500" style={{ boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8)' }} /></motion.div>
                <motion.div whileHover={{ scale: 1.02 }}><Textarea placeholder="Tell us about your logistics needs..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="rounded-xl py-3 px-4 border-none bg-gray-100 text-gray-800 placeholder-gray-500 resize-none" style={{ boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8)' }} /></motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" disabled={isSubmitting} className="w-full rounded-2xl py-4 text-lg font-semibold transition-all duration-300 group" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)', boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)', border: 'none' }}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}