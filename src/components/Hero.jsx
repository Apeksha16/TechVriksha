import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Award, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <section className="relative min-h-screen bg-[#0F172A] overflow-hidden">
            {/* Abstract Graphic Blob */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-vedic-saffron/20 via-vedic-gold/10 to-white/5 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">

                {/* Main Headline Section - Unique Redesign */}
                <div className="mb-24 relative pt-10">
                    <div className="relative z-10">
                        {/* Line 1: CREATIVE */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-6"
                        >
                            <h1 className="text-[12vw] md:text-[9rem] leading-[0.8] font-bold text-[#F8FAFC] tracking-tighter">
                                CREATIVE
                            </h1>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="hidden lg:flex items-center justify-center w-32 h-12 rounded-full border border-[#F8FAFC]/20"
                            >
                                <span className="text-sm font-mono text-[#F8FAFC]/60">EST. 2024</span>
                            </motion.div>
                        </motion.div>

                        {/* Line 2: DIGITAL (Outline) */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <h1 className="text-[12vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-transparent"
                                style={{ WebkitTextStroke: "2px #FD7503" }} // Saffron stroke
                            >
                                DIGITAL
                            </h1>
                            {/* Floating Visual Element on top of text */}
                            <motion.div
                                animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 right-[10%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-vedic-saffron to-vedic-gold rounded-full mix-blend-multiply opacity-80 blur-xl"
                            />
                        </motion.div>

                        {/* Line 3: BRANDING + AGENCY */}
                        <div className="flex flex-col md:flex-row items-end md:items-start gap-4 md:ml-20">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[12vw] md:text-[9rem] leading-[0.8] font-serif italic text-[#F8FAFC] z-10"
                            >
                                BRANDING
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-row md:flex-col items-center gap-4 mt-4 md:mt-0"
                            >
                                <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC]/20">
                                    AGENCY
                                </h1>
                                {/* Rotating Text Badge */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0"
                                    >
                                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                            <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                            <text className="text-[10px] uppercase font-bold tracking-widest fill-[#F8FAFC]">
                                                <textPath href="#curve">
                                                    Scroll Down • Explore • Discover •
                                                </textPath>
                                            </text>
                                        </svg>
                                    </motion.div>
                                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-vedic-saffron -rotate-45" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Main Hero Content - Redesigned */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[60vh]">

                    {/* Left Column - Story (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-[#F8FAFC]/10 text-[#F8FAFC] text-sm font-bold tracking-wider uppercase border border-[#F8FAFC]/20"
                            >
                                Who We Are
                            </motion.span>

                            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] leading-tight">
                                Bridging <span className="text-vedic-saffron">Tradition</span> <br />
                                & Future Tech.
                            </h2>
                        </div>

                        <p className="text-lg text-[#F8FAFC]/70 leading-relaxed font-light">
                            We are a specialized agency that helps businesses establish a commanding online presence. By fusing ancient wisdom with cutting-edge digital solutions, we create legacies, not just websites.
                        </p>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-3 bg-[#F8FAFC] text-[#0F172A] pl-8 pr-6 py-4 rounded-full font-semibold hover:bg-vedic-saffron hover:text-white transition-all duration-300 group shadow-lg shadow-black/20"
                        >
                            <span>Read Our Story</span>
                            <div className="w-8 h-8 rounded-full bg-[#0F172A]/20 flex items-center justify-center group-hover:bg-white/20 transition-colors group-hover:scale-110 transition-transform">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Right Column - Stats & Visual (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-7 relative h-full min-h-[500px] flex items-center"
                    >
                        {/* Abstract Background Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-vedic-saffron/5 via-transparent to-white/5 rounded-[3rem] -rotate-3 transform scale-95" />

                        {/* Main Glass Card */}
                        <div className="relative w-full bg-[#F8FAFC]/5 backdrop-blur-xl border border-[#F8FAFC]/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                            {/* Decorative Shine */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-vedic-saffron/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vedic-gold/10 rounded-full blur-3xl" />

                            {/* Feature Highlight */}
                            <div className="mb-12 relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Innovation at Scale</h3>
                                        <p className="text-[#F8FAFC]/60">Delivering excellence across dimensions</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vedic-saffron to-vedic-gold flex items-center justify-center shadow-lg transform rotate-12">
                                        <Award className="text-white w-6 h-6" />
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-vedic-saffron to-vedic-gold rounded-full"
                                    />
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <span className="text-xs font-bold text-vedic-saffron">98% Satisfaction</span>
                                </div>
                            </div>

                            {/* Stats Grid - Integrated */}
                            <div className="grid grid-cols-3 gap-4 md:gap-8 relative z-10 border-t border-[#F8FAFC]/10 pt-8">
                                {[
                                    { number: '12+', label: 'Years Exp', icon: TrendingUp },
                                    { number: '800+', label: 'Projects', icon: Laptop }, // Changed icon to Laptop for variety
                                    { number: '500+', label: 'Clients', icon: Users }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center group">
                                        <div className="mb-3 mx-auto w-10 h-10 rounded-full bg-vedic-saffron/5 group-hover:bg-vedic-saffron/10 flex items-center justify-center transition-colors">
                                            <stat.icon className="w-5 h-5 text-vedic-saffron group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-1">{stat.number}</div>
                                        <div className="text-xs uppercase tracking-wide text-[#F8FAFC]/50 font-semibold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 lg:right-8 lg:-bottom-8 bg-[#F8FAFC] text-[#0F172A] p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-[#F8FAFC]" />
                                ))}
                            </div>
                            <div className="text-xs font-semibold">
                                <span className="text-vedic-saffron">Join</span> our <br /> community
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
