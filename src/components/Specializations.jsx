import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Globe, Smartphone, Laptop, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Specializations = () => {
    const specializations = [
        {
            icon: Globe,
            title: 'Websites',
            description: 'Beautiful, responsive, and high-performance websites tailored to your brand identity.',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
            isDark: false
        },
        {
            icon: Laptop,
            title: 'Web Applications',
            description: 'Powerful, scalable web applications with advanced features and seamless user experiences.',
            features: ['Custom Development', 'Real-time Features', 'API Integration', 'User Dashboards'],
            isDark: true
        },
        {
            icon: Smartphone,
            title: 'Mobile Applications',
            description: 'Native and cross-platform mobile apps for iOS and Android with stunning designs.',
            features: ['iOS & Android', 'React Native', 'Native Performance', 'Push Notifications'],
            isDark: false
        }
    ];

    // 3D Isometric Card Component
    const Isometric3DCard = ({ spec, idx }) => {
        const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
        const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const rotateXValue = ((e.clientY - centerY) / 10) * -1;
            const rotateYValue = ((e.clientX - centerX) / 10);
            
            rotateX.set(rotateXValue);
            rotateY.set(rotateYValue);
        };

        const handleMouseLeave = () => {
            rotateX.set(0);
            rotateY.set(0);
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05, z: 50 }}
                className="relative group cursor-pointer w-full h-full"
                style={{ perspective: '1000px' }}
            >
                {/* Glowing Platform */}
                <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-4 ${
                    spec.isDark ? 'bg-vedic-saffron/40' : 'bg-vedic-saffron/25'
                } rounded-lg blur-xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-300`} />
                
                {/* 3D Isometric Card */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                    }}
                    className={`relative ${
                        spec.isDark 
                            ? 'bg-gradient-to-br from-vedic-brown via-vedic-brown/90 to-vedic-black border-2 border-white/10' 
                            : 'bg-gradient-to-br from-white via-[#FAF9F6] to-white border-2 border-vedic-black/10'
                    } rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(255,153,51,0.3)] group-hover:border-vedic-saffron/50 transition-all duration-300 w-full h-full flex flex-col`}
                >
                    {/* 3D Top Face - Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-vedic-saffron/0 via-vedic-saffron/5 to-vedic-saffron/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* 3D Right Face - Side Shadow */}
                    <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity"
                        style={{
                            background: 'linear-gradient(90deg, transparent 70%, rgba(255,153,51,0.4) 100%)',
                            transform: 'translateZ(-10px) rotateY(45deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    />
                    
                    {/* 3D Front Face - Content */}
                    <div className="relative z-10 flex flex-col flex-grow" style={{ transform: 'translateZ(20px)' }}>
                        {/* Icon Container with 3D Depth */}
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all ${
                                spec.isDark 
                                    ? 'bg-vedic-saffron/25 group-hover:bg-vedic-saffron/35' 
                                    : 'bg-vedic-saffron/15 group-hover:bg-vedic-saffron/25'
                            }`}
                            style={{
                                transform: 'translateZ(30px)',
                                boxShadow: '0 10px 20px rgba(255,153,51,0.2), inset 0 -2px 5px rgba(0,0,0,0.1)'
                            }}
                        >
                            <spec.icon 
                                size={48} 
                                className="text-vedic-saffron"
                                strokeWidth={2.5}
                                style={{ transform: 'translateZ(10px)' }}
                            />
                        </motion.div>

                        {/* Title */}
                        <h3 className={`text-3xl md:text-4xl font-bold mb-4 group-hover:text-vedic-saffron transition-colors ${
                            spec.isDark ? 'text-white' : 'text-vedic-black'
                        }`}>
                            {spec.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-base mb-6 leading-relaxed ${
                            spec.isDark ? 'text-white/80' : 'text-vedic-black/70'
                        }`}>
                            {spec.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-6 flex-grow">
                            {spec.features.map((feature, fIdx) => (
                                <motion.li
                                    key={fIdx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx * 0.2) + (fIdx * 0.1), duration: 0.4 }}
                                    className={`flex items-center text-sm ${
                                        spec.isDark ? 'text-white/70' : 'text-vedic-black/70'
                                    }`}
                                >
                                    <div className={`w-2 h-2 rounded-full bg-vedic-saffron mr-3 flex-shrink-0`} />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* CTA Link */}
                        <Link
                            to="/services"
                            className={`inline-flex items-center font-semibold group/btn transition-colors ${
                                spec.isDark 
                                    ? 'text-vedic-saffron hover:text-vedic-saffron-light' 
                                    : 'text-vedic-saffron hover:text-vedic-saffron-dark'
                            }`}
                        >
                            Learn More
                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    
                    {/* 3D Bottom Shadow */}
                    <div 
                        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-3 bg-black/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            transform: 'translateX(-50%) translateY(100%) rotateX(90deg) translateZ(-10px)',
                            transformStyle: 'preserve-3d',
                        }}
                    />
                </motion.div>
            </motion.div>
        );
    };

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block w-3 h-3 rounded-full bg-vedic-saffron mb-6"
                    />
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-vedic-black leading-[0.95] mb-6 tracking-tight">
                        What We Specialize In
                    </h2>
                    <p className="text-lg md:text-xl text-vedic-black/60 max-w-2xl mx-auto leading-relaxed">
                        Three pillars of digital excellence, each crafted with precision and care
                    </p>
                </motion.div>

                {/* 3D Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 auto-cols-fr">
                    {specializations.map((spec, idx) => (
                        <div key={spec.title} className="flex">
                            <Isometric3DCard spec={spec} idx={idx} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specializations;
