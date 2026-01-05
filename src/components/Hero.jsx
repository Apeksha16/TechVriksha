import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Award, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Abstract Graphic Blob */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-vedic-saffron/20 via-vedic-gold/20 to-vedic-brown/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">

                {/* Main Headline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 relative"
                >
                    <div className="flex items-center gap-4 flex-wrap">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-vedic-black leading-[0.95] tracking-tight">
                            CREATIVE
                        </h1>
                        {/* Abstract Circular Element */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-vedic-saffron via-vedic-gold to-vedic-brown flex items-center justify-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent" />
                            <div className="absolute inset-4 bg-gradient-to-br from-vedic-saffron/50 to-vedic-gold/50 rounded-full blur-xl" />
                            <div className="w-1/2 h-1/2 bg-white/30 rounded-full blur-md" />
                        </motion.div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-vedic-black leading-[0.95] tracking-tight">
                            DIGITAL BRANDING
                            <br />
                            AGENCY
                        </h1>
                    </div>
                </motion.div>

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
                                className="inline-block px-4 py-1.5 rounded-full bg-vedic-saffron/10 text-vedic-saffron text-sm font-bold tracking-wider uppercase border border-vedic-saffron/20"
                            >
                                Who We Are
                            </motion.span>

                            <h2 className="text-4xl md:text-5xl font-bold text-vedic-black leading-tight">
                                Bridging <span className="text-vedic-saffron">Tradition</span> <br />
                                & Future Tech.
                            </h2>
                        </div>

                        <p className="text-lg text-vedic-black/70 leading-relaxed font-light">
                            We are a specialized agency that helps businesses establish a commanding online presence. By fusing ancient wisdom with cutting-edge digital solutions, we create legacies, not just websites.
                        </p>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-3 bg-vedic-black text-white pl-8 pr-6 py-4 rounded-full font-semibold hover:bg-vedic-saffron transition-all duration-300 group shadow-lg shadow-vedic-black/20 hover:shadow-vedic-saffron/30"
                        >
                            <span>Read Our Story</span>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-vedic-saffron/5 via-transparent to-vedic-brown/5 rounded-[3rem] -rotate-3 transform scale-95" />

                        {/* Main Glass Card */}
                        <div className="relative w-full bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                            {/* Decorative Shine */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-vedic-saffron/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vedic-gold/10 rounded-full blur-3xl" />

                            {/* Feature Highlight */}
                            <div className="mb-12 relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-vedic-black mb-2">Innovation at Scale</h3>
                                        <p className="text-vedic-black/60">Delivering excellence across dimensions</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vedic-saffron to-vedic-gold flex items-center justify-center shadow-lg transform rotate-12">
                                        <Award className="text-white w-6 h-6" />
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
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
                            <div className="grid grid-cols-3 gap-4 md:gap-8 relative z-10 border-t border-vedic-black/5 pt-8">
                                {[
                                    { number: '12+', label: 'Years Exp', icon: TrendingUp },
                                    { number: '800+', label: 'Projects', icon: Laptop }, // Changed icon to Laptop for variety
                                    { number: '500+', label: 'Clients', icon: Users }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center group">
                                        <div className="mb-3 mx-auto w-10 h-10 rounded-full bg-vedic-saffron/5 group-hover:bg-vedic-saffron/10 flex items-center justify-center transition-colors">
                                            <stat.icon className="w-5 h-5 text-vedic-saffron group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-vedic-black mb-1">{stat.number}</div>
                                        <div className="text-xs uppercase tracking-wide text-vedic-black/50 font-semibold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 lg:right-8 lg:-bottom-8 bg-vedic-black text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-vedic-black" />
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
