import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, BarChart3, Megaphone } from 'lucide-react';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState('Innovative');

    const services = [
        { number: '001', name: 'BRAND STRATEGY', icon: Target },
        { number: '002', name: 'DIGITAL MARKETING', icon: Megaphone },
        { number: '003', name: 'PPC ADVERTISING', icon: TrendingUp },
        { number: '004', name: 'ANALYTICS REPORTING', icon: BarChart3 },
    ];

    return (
        <section className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <button
                        onClick={() => setActiveTab('Services')}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            activeTab === 'Services'
                                ? 'bg-transparent border-2 border-vedic-saffron text-vedic-saffron'
                                : 'bg-white border-2 border-vedic-black/10 text-vedic-black hover:border-vedic-saffron/30'
                        }`}
                    >
                        Services
                    </button>
                    <button
                        onClick={() => setActiveTab('Innovative')}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            activeTab === 'Innovative'
                                ? 'bg-vedic-saffron text-white border-2 border-vedic-saffron'
                                : 'bg-white border-2 border-vedic-black/10 text-vedic-black hover:border-vedic-saffron/30'
                        }`}
                    >
                        Innovative Branding Solutions
                    </button>
                </motion.div>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white border-2 border-vedic-black/10 rounded-2xl p-6 hover:border-vedic-saffron transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
                        >
                            {/* Icon Square */}
                            <div className="w-14 h-14 bg-vedic-saffron rounded-xl flex items-center justify-center mb-4 group-hover:bg-vedic-saffron-dark transition-colors">
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            
                            {/* Service Info */}
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-bold text-vedic-black/40">{service.number}</span>
                                <ArrowRight className="w-5 h-5 text-vedic-saffron group-hover:translate-x-1 transition-transform" />
                            </div>
                            
                            <h3 className="text-lg font-bold text-vedic-black">{service.name}</h3>
                            
                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vedic-saffron/5 to-vedic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

