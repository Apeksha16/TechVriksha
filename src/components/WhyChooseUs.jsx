import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            id: "01",
            title: "Expert Team",
            description: "A collective of senior engineers and designers passionate about digital excellence.",
            highlight: "Top Talent"
        },
        {
            id: "02",
            title: "Agile Approach",
            description: "Iterative development that adapts to your needs, ensuring faster speed to market.",
            highlight: "Fast Delivery"
        },
        {
            id: "03",
            title: "Client-Centric",
            description: "Your success is our metric. We build partnerships, not just software.",
            highlight: "Support 24/7"
        }
    ];

    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        Why Partner With <span className="text-blue-500">TechVriksha?</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-blue-500 rounded-full" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reasons.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="bg-[#1E293B] rounded-[2rem] p-8 md:p-10 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group border border-slate-700/50 relative overflow-hidden flex flex-col justify-between min-h-[400px]"
                        >
                            {/* Background Texture/Gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-900/20 transition-colors duration-500 pointer-events-none" />

                            {/* Top Section */}
                            <div>
                                <div className="text-7xl font-sans font-thin text-slate-700 group-hover:text-blue-500/20 transition-colors duration-500 mb-8 select-none">
                                    {item.id}
                                </div>

                                <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom Section */}
                            <div className="mt-8 flex items-center justify-between">
                                <span className="text-sm font-semibold tracking-wider uppercase text-slate-500 group-hover:text-blue-400 transition-colors">
                                    {item.highlight}
                                </span>

                                <div className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                                    <ArrowUpRight size={20} strokeWidth={2} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
