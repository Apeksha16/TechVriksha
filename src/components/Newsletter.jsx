import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        }, 2000);
    };

    return (
        <section className="relative pt-32 pb-48 bg-vedic-saffron overflow-hidden flex flex-col items-center justify-center min-h-[800px]">
            {/* Spinning Text Decor - Top Right */}
            <div className="absolute top-10 -right-10 md:right-10 animate-spin-slow opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-40 h-40">
                    <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[10px] fill-white font-bold tracking-widest uppercase">
                        <textPath href="#curve">
                            TechVriksha • Join the Club • TechVriksha • Join the Club •
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* Huge Headline */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-56 z-30 relative"
            >
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    Join The Club
                </h2>
                <p className="text-white/80 text-sm md:text-base font-medium tracking-widest uppercase">
                    Subscribe to our mailing list
                </p>
            </motion.div>

            {/* Envelope & Form Container - Refined Scalable SVG */}
            <motion.div
                className="relative w-full max-w-lg px-4 flex justify-center perspective-1000 mb-20 mt-12"
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Main Envelope Wrapper (Fixed Aspect Ratio) */}
                <div className="relative w-full aspect-[1.6/1] max-w-[550px]">

                    {/* 1. Back Body (Inside Color) */}
                    <div className="absolute inset-x-0 bottom-0 top-[20%] bg-[#F2E6D8] rounded-b-lg shadow-inner z-0" />

                    {/* 2. Top Flap (Open) - SVG */}
                    <svg className="absolute w-full h-[55%] -top-[54%] left-0 z-0 origin-bottom" viewBox="0 0 500 200" preserveAspectRatio="none">
                        <path d="M0,200 L250,0 L500,200" fill="#F2E6D8" stroke="#E6DCCF" strokeWidth="1" />
                    </svg>

                    {/* 3. The Interactive Card (Form) */}
                    <motion.div
                        initial={{ y: '20%' }}
                        whileInView={{ y: '-60%' }} // Slides up dramatically
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 40, damping: 12 }}
                        className="absolute left-[5%] right-[5%] z-10 bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-100 flex flex-col justify-end min-h-[120%]"
                        style={{ bottom: '5%' }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-vedic-black mb-2 text-center">
                            Stay Updated!
                        </h3>
                        <p className="text-vedic-black/60 text-xs md:text-sm text-center mb-6">
                            Join our community for exclusive tech insights.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-vedic-black text-sm focus:outline-none focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`rounded-lg px-4 py-3 font-bold text-sm text-white shadow-md transition-all
                                    ${status === 'success' ? 'bg-green-500' : 'bg-gradient-to-r from-vedic-saffron to-vedic-saffron-dark hover:shadow-lg hover:-translate-y-0.5'}
                                `}
                            >
                                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Subscribed!' : 'Subscribe Now'}
                            </button>
                        </form>
                    </motion.div>

                    {/* 4. Front Pocket (Overlay) - SVG */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-2xl" viewBox="0 0 500 312" preserveAspectRatio="none">
                        {/* Main Pocket Shape - Cream Color */}
                        <path d="M0,0 L250,170 L500,0 L500,312 L0,312 Z" fill="#FFF9F3" stroke="#F2E6D8" strokeWidth="1" />
                        {/* Side Shading for 3D effect */}
                        <path d="M0,0 L250,170 L0,312" fill="#6A3914" fillOpacity="0.05" />
                        <path d="M500,0 L250,170 L500,312" fill="#6A3914" fillOpacity="0.08" />
                    </svg>

                </div>
            </motion.div>

            {/* Decorative Tape / Elements */}
            <div className="absolute top-1/4 left-10 -rotate-12 w-24 h-8 bg-white/20 backdrop-blur-sm shadow-sm rotate-[-15deg]" />
            <div className="absolute bottom-1/4 right-10 rotate-12 w-16 h-16 rounded-full border-2 border-white/20 border-dashed" />

        </section>
    );
};

export default Newsletter;
