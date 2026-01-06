import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, BarChart3, Megaphone } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        { number: '001', name: 'BRAND STRATEGY', icon: Target },
        { number: '002', name: 'DIGITAL MARKETING', icon: Megaphone },
        { number: '003', name: 'PPC ADVERTISING', icon: TrendingUp },
        { number: '004', name: 'ANALYTICS REPORTING', icon: BarChart3 },
    ];

    const MagneticCard = ({ service, idx }) => {
        const ref = useRef(null);

        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
        const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

        const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
        const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

        const handleMouseMove = (e) => {
            const rect = ref.current.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;
            x.set(xPct);
            y.set(yPct);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return (
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 group cursor-pointer border border-transparent hover:border-vedic-saffron/20 h-full flex flex-col justify-between"
            >
                {/* 3D Depth Effect Layer */}
                <div
                    style={{ transform: "translateZ(75px)" }}
                    className="absolute inset-4 rounded-[1.5rem] bg-vedic-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                />

                <div style={{ transform: "translateZ(50px)" }}>
                    {/* Icon */}
                    <div className="w-20 h-20 bg-vedic-saffron rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-vedic-saffron/20 group-hover:scale-105 transition-transform duration-500 ease-out">
                        <service.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Middle Row: Number & Arrow */}
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100 group-hover:border-vedic-saffron/10 transition-colors">
                        <span className="text-sm font-bold text-gray-400 tracking-widest font-mono group-hover:text-vedic-saffron transition-colors">
                            {service.number}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-vedic-saffron group-hover:border-vedic-saffron transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div style={{ transform: "translateZ(25px)" }}>
                    <h3 className="text-2xl font-serif font-black text-vedic-black uppercase tracking-wide leading-tight group-hover:text-vedic-saffron transition-colors duration-300">
                        {service.name}
                    </h3>
                </div>
            </motion.div>
        );
    };

    return (
        <section className="relative py-32 bg-[#0F172A] overflow-hidden" style={{ perspective: "2000px" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Pills */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center gap-4 mb-24"
                >

                    <div className="px-8 py-4 rounded-full bg-vedic-saffron text-white font-bold shadow-xl shadow-vedic-saffron/30 tracking-wide">
                        Innovative Branding Solutions
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {services.map((service, idx) => (
                        <MagneticCard key={idx} service={service} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

