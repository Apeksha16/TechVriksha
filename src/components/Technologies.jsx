import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Database, Server, Smartphone, Globe,
    Palette, Layers, Zap, Cloud, Settings,
    Box, Cpu, CreditCard, BarChart3, Lock, User, FileText, PieChart
} from 'lucide-react';

const Technologies = () => {
    const techObjects = [
        // Left side (white background)
        { icon: Box, label: 'React JS', category: 'Frontend' },
        { icon: Cpu, label: 'Node.js', category: 'Backend' },
        { icon: Smartphone, label: 'React Native', category: 'Mobile' },
        { icon: Globe, label: 'Web Apps', category: 'Frontend' },
        { icon: Database, label: 'MongoDB', category: 'Database' },
        { icon: CreditCard, label: 'Payments', category: 'Integration' },
        { icon: BarChart3, label: 'Analytics', category: 'Data' },
        { icon: Server, label: 'Backend', category: 'Infrastructure' },
        { icon: PieChart, label: 'Dashboards', category: 'Visualization' },

        // Right side (dark background)
        { icon: Cloud, label: 'Cloud Services', category: 'Infrastructure' },
        { icon: Lock, label: 'Security', category: 'Backend' },
        { icon: User, label: 'User Management', category: 'Frontend' },
        { icon: Code2, label: 'Development', category: 'Code' },
        { icon: FileText, label: 'CMS', category: 'Content' },
        { icon: Globe, label: 'Global Reach', category: 'Network' },
        { icon: BarChart3, label: 'Data Analysis', category: 'Analytics' },
        { icon: PieChart, label: 'Reports', category: 'Business' },
        { icon: Settings, label: 'Custom Config', category: 'System' }, // Added to balance grid
    ];

    const TechnologyCard = ({ item, isDark, idx }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            whileHover={{ y: -5 }}
            className={`
                relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 cursor-pointer group
                ${isDark
                    ? 'bg-[#0F172A] border border-white/10 hover:border-blue-500/30 hover:bg-[#1E293B] shadow-xl'
                    : 'bg-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 border border-[#0F172A]/10'
                }
            `}
        >
            {/* Icon Container */}
            < div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300
                ${isDark
                    ? 'bg-gradient-to-br from-blue-500/20 to-blue-500/5 group-hover:from-blue-500/30 group-hover:to-blue-500/10'
                    : 'bg-blue-500/10 group-hover:bg-blue-500/20'
                }
            `}>
                <item.icon
                    className={`w-8 h-8 transition-transform duration-300 group-hover:scale-110 ${isDark ? 'text-white' : 'text-blue-600'}`}
                    strokeWidth={1.5}
                />
            </div>

            {/* Label */}
            <span className={`text-sm font-semibold tracking-wide ${isDark ? 'text-white/90' : 'text-slate-900'}`}>
                {item.label}
            </span>

            {/* Category (Optional subtext) */}
            <span className={`text-[10px] mt-1 font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-white/40' : 'text-slate-500/40'}`}>
                {item.category}
            </span>
        </motion.div >
    );

    return (
        <section className="relative overflow-hidden w-full bg-[#F8FAFC]">
            <div className="flex flex-col lg:flex-row w-full">

                {/* Left Side - Light (50% Width) */}
                <div className="w-full lg:w-1/2 bg-[#F8FAFC] p-12 lg:p-24 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
                            <span className="text-blue-500">Technologies library</span> <br />
                            to build your own solutions
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {techObjects.slice(0, 9).map((item, idx) => (
                            <TechnologyCard key={idx} item={item} isDark={false} idx={idx} />
                        ))}
                    </div>
                </div>

                {/* Right Side - Dark (50% Width) */}
                <div className="w-full lg:w-1/2 bg-[#F8FAFC] p-12 lg:p-24 flex flex-col justify-center relative">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {techObjects.slice(9).map((item, idx) => (
                            <TechnologyCard key={idx} item={item} isDark={true} idx={idx} />
                        ))}
                    </div>

                    {/* Explore Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-10 right-10"
                    >
                        <a href="/services" className="text-[#0F172A]/60 hover:text-blue-500 text-sm font-medium flex items-center gap-2 group transition-colors">
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
