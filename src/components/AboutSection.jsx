import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center bg-[#FFF9F3] overflow-hidden py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-vedic-black leading-[0.9]">
                                Designing For <br />
                                <span className="italic relative">
                                    Tomorrow's
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="absolute bottom-2 left-0 h-[2px] bg-vedic-saffron"
                                    />
                                </span> <br />
                                Success Today
                            </h2>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                "Design that speaks volumes",
                                "Creating brands that stand out",
                                "Design with purpose"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                                    className="flex items-center gap-4 text-vedic-black/60 hover:text-[#FF9933] transition-colors cursor-default group"
                                >
                                    <span className="w-12 h-[1px] bg-vedic-black/20 group-hover:bg-[#FF9933] transition-colors" />
                                    <span className="text-lg font-light tracking-wide">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Video Card */}
                    <div className="relative pt-10 pl-10">
                        {/* Decorative background element */}
                        <motion.div
                            style={{ y }}
                            className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#6A3914]/10 to-transparent rounded-[3rem] opacity-50 -z-10 transform translate-x-10 -translate-y-10"
                        />

                        <motion.div
                            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#6A3914] to-[#8D6E63] shadow-2xl group"
                        >
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.1)] z-20 group/play"
                                >
                                    <Play className="w-8 h-8 text-[#6A3914] fill-[#6A3914] translate-x-1 group-hover/play:scale-110 transition-transform" />
                                </motion.button>

                                {/* Pulse Effect */}
                                <div className="absolute w-24 h-24 bg-vedic-saffron/20 rounded-full animate-ping pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Floating Explore Button - Overlapping */}
                        <motion.div
                            initial={{ scale: 0, rotate: 180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                            className="absolute -bottom-10 -left-10 md:bottom-12 md:-left-12 z-30"
                        >
                            <Link to="/projects" className="block relative w-32 h-32 md:w-40 md:h-40 group cursor-pointer">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-white/20 bg-[#6A3914] backdrop-blur-xl"
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                        <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-white">
                                            <textPath href="#circlePath">
                                                Explore More • View Projects •
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-[#FF9933] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRight className="w-6 h-6 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
