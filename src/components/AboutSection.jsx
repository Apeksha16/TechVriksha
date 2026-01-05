import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="relative py-32 bg-vedic-brown overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-vedic-saffron/10 via-vedic-gold/10 to-vedic-brown/20" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Designing For Tomorrow's Success Today
                        </h2>
                        
                        <div className="space-y-4 text-lg text-white/80">
                            <p>Design that speaks volumes</p>
                            <p>Creating brands that stand out</p>
                            <p>Design with purpose</p>
                        </div>
                    </motion.div>

                    {/* Right Column - Video Player */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                            {/* Video Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-vedic-saffron/30 via-vedic-gold/30 to-vedic-brown/30 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group"
                                >
                                    <Play className="w-8 h-8 text-vedic-brown ml-1" fill="currentColor" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Circular Explore Button */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                        >
                            <Link
                                to="/about"
                                className="relative w-32 h-32 bg-vedic-brown border-2 border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:border-vedic-saffron transition-all group"
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vedic-saffron/20 to-vedic-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 text-center">
                                    <ArrowRight className="w-6 h-6 text-white mx-auto mb-2 group-hover:translate-x-1 transition-transform" />
                                    <span className="text-xs font-bold text-white block">EXPLORE</span>
                                    <span className="text-xs font-bold text-white block">MORE</span>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

