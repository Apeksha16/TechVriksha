import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Founder, Vedic Roots",
        content: "TechVriksha transformed our digital presence. Their understanding of traditional values combined with modern tech was exactly what we needed.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "CTO, FinTech Solutions",
        content: "The technical expertise is outstanding. Delivered a complex React Native app ahead of schedule with impeccable code quality.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Marketing Director",
        content: "We needed a website that felt premium. The team delivered stunning animations and a seamless user experience.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    }
];

const Testimonials = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Decorative Star Icon (Floating) */}
                <motion.div
                    animate={{ rotate: 360, y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 md:left-[45%] lg:left-[40%] text-vedic-saffron hidden md:block"
                >
                    <Sparkles className="w-12 h-12 fill-vedic-saffron/20" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif font-bold text-vedic-black leading-tight"
                        >
                            Trusted by <br />
                            <span className="text-vedic-saffron">Visionaries</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-vedic-black/60 max-w-md mx-auto lg:mx-0 leading-relaxed"
                        >
                            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/testimonials" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-vedic-saffron to-[#FF9933] text-white font-bold shadow-lg shadow-vedic-saffron/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                View More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Content - Staggered Cards */}
                    <div className="relative space-y-6 md:space-y-8 perspective-1000">
                        {testimonials.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ scale: 1.02, x: -10 }}
                                className={`relative bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${idx === 1 ? 'lg:-translate-x-12 z-20 border-vedic-saffron/20 shadow-lg' : 'z-10 opacity-90 hover:opacity-100'
                                    }`}
                            >
                                {/* Left Accent Line (The "Purple Line" in reference) */}
                                <div className={`absolute left-0 top-8 bottom-8 w-1 rounded-r-full group-hover:h-full group-hover:top-0 group-hover:bottom-0 transition-all duration-300 ${idx === 1 ? 'bg-vedic-saffron' : 'bg-gray-200 group-hover:bg-vedic-saffron/50'
                                    }`} />

                                <div className="flex gap-6 items-start pl-4">
                                    <div className="shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full object-cover border-4 border-[#F8FAFC]"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-bold text-lg text-vedic-black">{item.name}</h4>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-vedic-saffron/80">{item.role}</p>
                                            </div>
                                            <Quote className="w-8 h-8 text-gray-100 fill-gray-50 -mt-2" />
                                        </div>
                                        <p className="text-sm text-vedic-black/60 leading-relaxed font-medium">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
