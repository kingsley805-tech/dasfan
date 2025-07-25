
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Fatima Nadia",
            title: "Supply Chain Director, TechCorp",
            quote: "Dasfan transformed our international supply chain. Their proactive communication and cutting-edge tracking platform are game-changers. Our efficiency is up 30%.",
            image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Carlos Rodriguez",
            title: "Founder, Artisan Goods Co.",
            quote: "As a growing business, we needed a logistics partner we could trust. Dasfan has been with us every step of the way, handling our fragile goods with incredible care.",
            image: "https://images.unsplash.com/photo-1495681796091-d84e65e2ad51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww"
        },
        {
            name: "Mr. John Odoi",
            title: "Operations Manager, Global Fashion",
            quote: "The speed and reliability of Dasfan's air freight service are unmatched. They consistently meet our tight deadlines for seasonal collection launches. Simply outstanding.",
            image: "https://media.istockphoto.com/id/2135643049/photo/waist-up-shot-of-a-handsome-hispanic-latino-carefree-black-male-looking-at-the-camera-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=9UhZSA9t22Mu5gXF9Y3yQlPNA9nXbbKaS78ThhhQXgM="
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Echoes of
                        <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            Excellence
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Hear from the businesses we are proud to partner with. Their success is our greatest metric.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                            className="group"
                        >
                            <div 
                                className="rounded-3xl p-8 h-full bg-white flex flex-col transition-shadow duration-300"
                                style={{
                                    boxShadow: '12px 12px 24px rgba(255, 107, 53, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)'
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-orange-200 transition-transform duration-300 group-hover:scale-110"
                                         style={{ boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.8)' }}>
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover"/>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                </div>
                                <blockquote className="text-gray-600 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}