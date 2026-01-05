import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
    Lightbulb, Globe, Smartphone, Laptop, 
    Code2, BarChart3, ArrowRight, Mouse, 
    Settings, Clock, TrendingUp, Link as LinkIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
    const projects = [
        {
            id: 1,
            title: "An Enriched Web Development",
            highlight: "Web Development",
            description: "Platform",
            icon: Globe,
            graphic: "lightbulb",
            isDark: false,
            feature: "AI-powered solutions"
        },
        {
            id: 2,
            title: "Easy to Create and Share",
            highlight: "Create and Share",
            description: "Applications",
            icon: Laptop,
            graphic: "laptop",
            isDark: true,
            feature: "Seamless collaboration"
        },
        {
            id: 3,
            title: "Allows to add Your Domain name",
            highlight: "Your Domain",
            description: "Custom domains",
            icon: Code2,
            graphic: "domain",
            isDark: false,
            feature: "Custom branding"
        },
        {
            id: 4,
            title: "Easily Redirects Link to Landing Page",
            highlight: "Redirects Link",
            description: "Smart routing",
            icon: LinkIcon,
            graphic: "redirect",
            isDark: true,
            feature: "Dynamic routing"
        },
        {
            id: 5,
            title: "Track the number of Clicks",
            highlight: "Clicks",
            description: "Analytics",
            icon: Mouse,
            graphic: "analytics",
            isDark: false,
            feature: "Real-time tracking"
        },
        {
            id: 6,
            title: "Projects Never Expire",
            highlight: "Never Expire",
            description: "Lifetime access",
            icon: Clock,
            graphic: "permanent",
            isDark: true,
            feature: "Permanent hosting"
        }
    ];

    // 3D Animated Project Card
    const ProjectCard3D = ({ project, idx }) => {
        const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
        const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
        const zIndex = useSpring(useMotionValue(0), { stiffness: 400, damping: 30 });

        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const rotateXValue = ((e.clientY - centerY) / 15) * -1;
            const rotateYValue = ((e.clientX - centerX) / 15);
            
            rotateX.set(rotateXValue);
            rotateY.set(rotateYValue);
            zIndex.set(50);
        };

        const handleMouseLeave = () => {
            rotateX.set(0);
            rotateY.set(0);
            zIndex.set(0);
        };

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                    delay: idx * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                style={{ 
                    perspective: '1000px'
                }}
            >
                {/* Glowing Platform Effect */}
                <motion.div
                    className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-4 rounded-lg blur-xl transition-all duration-500 ${
                        project.isDark ? 'bg-vedic-saffron/40' : 'bg-vedic-saffron/25'
                    }`}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2
                    }}
                />

                {/* Main Card */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                    }}
                    className={`relative ${
                        project.isDark 
                            ? 'bg-vedic-brown border-2 border-white/10' 
                            : 'bg-white border-2 border-vedic-black/10'
                    } rounded-3xl p-8 h-full min-h-[350px] shadow-2xl group-hover:shadow-[0_25px_60px_rgba(255,153,51,0.3)] transition-all duration-300 overflow-hidden`}
                >
                    {/* Animated Background Pattern */}
                    <motion.div
                        className={`absolute inset-0 opacity-5 ${
                            project.isDark ? 'bg-white' : 'bg-vedic-black'
                        }`}
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}
                        animate={{
                            x: [0, 40, 0],
                            y: [0, 40, 0]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Top Right Logo/Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                        className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-vedic-saffron/20 flex items-center justify-center"
                    >
                        <Lightbulb className="w-6 h-6 text-vedic-saffron" />
                    </motion.div>

                    {/* Main Graphic - Lightbulb with Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                        className="relative mb-8 mt-4"
                        style={{ transform: 'translateZ(20px)' }}
                    >
                        {/* Lightbulb Outline */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.3
                            }}
                            className="relative w-24 h-24 mx-auto"
                        >
                            {/* Bulb Shape */}
                            <div className={`absolute inset-0 rounded-full border-4 ${
                                project.isDark ? 'border-white/30' : 'border-vedic-black/30'
                            }`} />
                            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-transparent via-vedic-saffron/10 to-vedic-saffron/20" />
                            
                            {/* Crumpled Object Inside */}
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: {
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    scale: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: idx * 0.2
                                    }
                                }}
                                className={`absolute inset-4 rounded-lg ${
                                    project.isDark ? 'bg-white/20' : 'bg-vedic-saffron/30'
                                } flex items-center justify-center`}
                                style={{
                                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                }}
                            >
                                <project.icon 
                                    className={`w-8 h-8 ${
                                        project.isDark ? 'text-white' : 'text-vedic-saffron'
                                    }`}
                                />
                            </motion.div>

                            {/* Base Line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.6, duration: 0.5 }}
                                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 ${
                                    project.isDark ? 'bg-white/30' : 'bg-vedic-black/30'
                                }`}
                            />
                        </motion.div>

                        {/* Secondary Graphic (Laptop/Mouse/etc) */}
                        {project.graphic === 'laptop' && (
                            <motion.div
                                initial={{ opacity: 0, x: 50, rotate: -10 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.7, type: "spring" }}
                                className="absolute top-0 right-0"
                                style={{ transform: 'translateZ(30px)' }}
                            >
                                <div className="w-16 h-12 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-2">
                                    <div className="w-full h-full bg-gradient-to-br from-vedic-saffron/20 to-vedic-gold/20 rounded" />
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Text Content */}
                    <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.5 }}
                            className={`text-xl md:text-2xl font-bold mb-6 leading-tight ${
                                project.isDark ? 'text-white' : 'text-vedic-black'
                            }`}
                        >
                            {project.title.includes(project.highlight) ? (
                                <>
                                    {project.title.split(project.highlight)[0]}
                                    <span className="text-vedic-saffron">{project.highlight}</span>
                                    {project.title.split(project.highlight)[1]}
                                </>
                            ) : (
                                project.title
                            )}
                        </motion.h3>

                        {/* Bottom Detail - Dashed Line & Arrows */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.8 }}
                            className="flex items-center gap-2 mt-auto pt-4"
                        >
                            <div className="flex-1 h-0.5 border-t-2 border-dashed border-vedic-saffron/40" />
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="flex gap-1"
                            >
                                {[0, 1, 2].map((i) => (
                                    <ArrowRight 
                                        key={i}
                                        className={`w-3 h-3 ${
                                            project.isDark ? 'text-white/40' : 'text-vedic-black/40'
                                        }`}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* 3D Side Shadow */}
                    <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                        style={{
                            background: 'linear-gradient(90deg, transparent 60%, rgba(255,153,51,0.5) 100%)',
                            transform: 'translateZ(-20px) rotateY(45deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    />
                </motion.div>
            </motion.div>
        );
    };

    return (
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
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
                        Top Projects
                    </h2>
                    <p className="text-lg md:text-xl text-vedic-black/60 max-w-2xl mx-auto leading-relaxed">
                        A showcase of our finest work, combining cutting-edge technology with beautiful design
                    </p>
                </motion.div>

                {/* 2x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard3D key={project.id} project={project} idx={idx} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-vedic-black text-white rounded-full font-bold hover:bg-vedic-saffron transition-all duration-300 group shadow-xl hover:shadow-2xl"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;

