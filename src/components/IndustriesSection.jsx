import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Stethoscope, Landmark, GraduationCap, Truck, Building2 } from 'lucide-react';

const IndustriesSection = () => {
    const industries = [
        { name: "FinTech", icon: Landmark, color: "text-emerald-500", bg: "bg-emerald-50" },
        { name: "Healthcare", icon: Stethoscope, color: "text-rose-500", bg: "bg-rose-50" },
        { name: "E-Commerce", icon: ShoppingBag, color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Education", icon: GraduationCap, color: "text-amber-500", bg: "bg-amber-50" },
        { name: "Logistics", icon: Truck, color: "text-indigo-500", bg: "bg-indigo-50" },
        { name: "Real Estate", icon: Building2, color: "text-slate-500", bg: "bg-slate-50" },
    ];

    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight"
                        >
                            Innovating Across <br />
                            <span className="text-blue-600">Every Industry</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed"
                        >
                            We tailor our digital solutions to meet the unique challenges and regulatory requirements of specialized sectors.
                        </motion.p>
                        <div className="flex gap-4">
                            <div className="flex -space-x-4">
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200" />
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-300" />
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-white text-xs font-bold">+20</div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-slate-900 font-bold text-lg">50+ Projects</span>
                                <span className="text-slate-500 text-sm">Successfully Delivered</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {industries.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white hover:bg-slate-50 border border-slate-100 hover:border-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 cursor-default group shadow-sm hover:shadow-md"
                            >
                                <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
