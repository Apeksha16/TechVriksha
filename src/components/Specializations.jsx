import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Laptop, ArrowRight, CheckCircle2 } from 'lucide-react';
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

    const SpecializationCard = ({ spec, idx }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className={`
                relative p-8 lg:p-10 rounded-[2.5rem] flex flex-col h-full transition-all duration-300 group
                ${spec.isDark
                    ? 'bg-[#1E293B] text-white shadow-2xl shadow-[#1E293B]/30 scale-105 z-10'
                    : 'bg-white text-vedic-black shadow-xl hover:shadow-2xl border border-gray-100'
                }
            `}
        >
            {/* Icon */}
            <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors
                ${spec.isDark
                    ? 'bg-vedic-saffron/20 text-vedic-saffron'
                    : 'bg-vedic-saffron/10 text-vedic-saffron'
                }
            `}>
                <spec.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <h3 className="text-3xl font-serif font-bold mb-4">
                {spec.title}
            </h3>

            <p className={`text-base leading-relaxed mb-8 flex-grow ${spec.isDark ? 'text-white/70' : 'text-vedic-black/60'}`}>
                {spec.description}
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
                {spec.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-medium opacity-80">
                        <div className={`w-1.5 h-1.5 rounded-full ${spec.isDark ? 'bg-vedic-saffron' : 'bg-vedic-saffron'}`} />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Link */}
            <Link
                to="/services"
                className={`
                    inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors
                    ${spec.isDark ? 'text-vedic-saffron hover:text-white' : 'text-vedic-saffron hover:text-vedic-black'}
                `}
            >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );

    return (
        <section className="relative py-32 bg-[#0F172A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="w-3 h-3 bg-vedic-saffron rounded-full mx-auto mb-6" />
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#F8FAFC] mb-6">
                        What We Specialize In
                    </h2>
                    <p className="text-lg text-[#F8FAFC]/60 max-w-2xl mx-auto font-light">
                        Three pillars of digital excellence, each crafted with precision and care
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {specializations.map((spec, idx) => (
                        <SpecializationCard key={idx} spec={spec} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specializations;
