import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
    Code2, Database, Server, Smartphone, Globe, 
    Palette, Layers, Zap, Cloud, Settings,
    Box, Cpu, CreditCard, BarChart3, Lock, User, FileText, PieChart
} from 'lucide-react';

const Technologies = () => {
    const techObjects = [
        // Left side (white background) - Top row
        { icon: Box, label: 'React JS', category: 'Frontend', glow: 'vedic-saffron' },
        { icon: Cpu, label: 'Node.js', category: 'Backend', glow: 'vedic-saffron' },
        { icon: Smartphone, label: 'React Native', category: 'Mobile', glow: 'vedic-saffron' },
        
        // Left side - Middle row
        { icon: Globe, label: 'Web Apps', category: 'Frontend', glow: 'vedic-saffron' },
        { icon: Database, label: 'MongoDB', category: 'Database', glow: 'vedic-saffron' },
        { icon: CreditCard, label: 'Payments', category: 'Integration', glow: 'vedic-saffron' },
        
        // Left side - Bottom row
        { icon: BarChart3, label: 'Analytics', category: 'Data', glow: 'vedic-saffron' },
        { icon: Server, label: 'Backend', category: 'Infrastructure', glow: 'vedic-saffron' },
        { icon: PieChart, label: 'Dashboards', category: 'Visualization', glow: 'vedic-saffron' },
        
        // Right side (dark background) - Top row
        { icon: Cloud, label: 'Cloud Services', category: 'Infrastructure', glow: 'vedic-saffron' },
        { icon: Lock, label: 'Security', category: 'Backend', glow: 'vedic-saffron' },
        
        // Right side - Middle row
        { icon: User, label: 'User Management', category: 'Frontend', glow: 'vedic-saffron' },
        { icon: Code2, label: 'Development', category: 'Code', glow: 'vedic-saffron' },
        { icon: FileText, label: 'CMS', category: 'Content', glow: 'vedic-saffron' },
        
        // Right side - Bottom row
        { icon: Globe, label: 'Global Reach', category: 'Network', glow: 'vedic-saffron' },
        { icon: BarChart3, label: 'Data Analysis', category: 'Analytics', glow: 'vedic-saffron' },
        { icon: PieChart, label: 'Reports', category: 'Business', glow: 'vedic-saffron' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    // 3D Isometric Card Component
    const Isometric3DCard = ({ item, isDark = false, idx }) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        
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
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05, z: 50 }}
                className="relative group cursor-pointer"
                style={{ perspective: '1000px' }}
            >
                {/* Glowing Platform - Enhanced */}
                <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-4 ${
                    isDark ? 'bg-vedic-saffron/40' : 'bg-vedic-saffron/25'
                } rounded-lg blur-xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-300`} />
                
                {/* 3D Isometric Card */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                    }}
                    className={`relative ${
                        isDark 
                            ? 'bg-gradient-to-br from-vedic-brown via-vedic-brown/90 to-vedic-black border-2 border-white/10' 
                            : 'bg-gradient-to-br from-white via-[#FAF9F6] to-white border-2 border-vedic-black/10'
                    } rounded-2xl p-6 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(255,153,51,0.3)] group-hover:border-vedic-saffron/50 transition-all duration-300`}
                >
                    {/* 3D Top Face - Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-vedic-saffron/0 via-vedic-saffron/5 to-vedic-saffron/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* 3D Right Face - Side Shadow */}
                    <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                        style={{
                            background: 'linear-gradient(90deg, transparent 70%, rgba(255,153,51,0.4) 100%)',
                            transform: 'translateZ(-10px) rotateY(45deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    />
                    
                    {/* 3D Front Face - Content */}
                    <div className="relative z-10 flex flex-col items-center" style={{ transform: 'translateZ(20px)' }}>
                        {/* Icon Container with 3D Depth */}
                        <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all ${
                            isDark 
                                ? 'bg-vedic-saffron/25 group-hover:bg-vedic-saffron/35' 
                                : 'bg-vedic-saffron/15 group-hover:bg-vedic-saffron/25'
                        }`}
                        style={{
                            transform: 'translateZ(30px)',
                            boxShadow: '0 10px 20px rgba(255,153,51,0.2), inset 0 -2px 5px rgba(0,0,0,0.1)'
                        }}>
                            <item.icon 
                                size={36} 
                                className="text-vedic-saffron group-hover:scale-110 transition-transform"
                                strokeWidth={2.5}
                                style={{ transform: 'translateZ(10px)' }}
                            />
                        </div>
                        
                        <span className={`text-xs font-bold text-center leading-tight ${
                            isDark ? 'text-white/90' : 'text-vedic-black/80'
                        }`}>
                            {item.label}
                        </span>
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
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Split Screen Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
                
                {/* Left Side - White Background */}
                <div className="relative bg-white p-8 md:p-12 lg:p-16">
                    {/* Header Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                            <span className="text-vedic-saffron">Technologies library</span> to build your own solutions
                        </h2>
                    </motion.div>

                    {/* Tech Objects Grid - Left Side (9 items) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-3 gap-6 md:gap-8"
                    >
                        {techObjects.slice(0, 9).map((item, idx) => (
                            <Isometric3DCard key={idx} item={item} isDark={false} idx={idx} />
                        ))}
                    </motion.div>
                </div>

                {/* Right Side - Dark Background */}
                <div className="relative bg-vedic-black p-8 md:p-12 lg:p-16">
                    {/* Tech Objects Grid - Right Side (8 items) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-3 gap-6 md:gap-8 mt-20 lg:mt-0"
                    >
                        {techObjects.slice(9).map((item, idx) => (
                            <Isometric3DCard key={idx} item={item} isDark={true} idx={idx} />
                        ))}
                    </motion.div>

                    {/* Footer Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
                    >
                        <a 
                            href="/services"
                            className="text-white/60 hover:text-vedic-saffron transition-colors text-sm font-medium flex items-center gap-2 group"
                        >
                            Explore All Technologies
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
