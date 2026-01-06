import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            id: 1,
            title: "Discovery & Strategy",
            desc: "We dive deep into your business goals, user needs, and market landscape to build a solid roadmap.",
            icon: Search,
            color: "bg-blue-500",
            lightColor: "bg-blue-50"
        },
        {
            id: 2,
            title: "Design & Prototype",
            desc: "Crafters of digital experiences. We create intuitive wireframes and stunning high-fidelity UI designs.",
            icon: Lightbulb,
            color: "bg-purple-500",
            lightColor: "bg-purple-50"
        },
        {
            id: 3,
            title: "Development",
            desc: "Writing clean, scalable code. We bring designs to life using cutting-edge technologies.",
            icon: Code2,
            color: "bg-cyan-500",
            lightColor: "bg-cyan-50"
        },
        {
            id: 4,
            title: "Launch & Scale",
            desc: "Rigorous testing followed by a smooth deployment. We support your growth as you scale.",
            icon: Rocket,
            color: "bg-green-500",
            lightColor: "bg-green-50"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 tracking-widest uppercase font-semibold text-sm"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900"
                    >
                        Our Process
                    </motion.h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full h-1 bg-slate-200 hidden lg:block -z-10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Icon Circle */}
                            <div className={`w-24 h-24 rounded-full ${step.lightColor} border-8 border-[#F8FAFC] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <step.icon className={`w-10 h-10 ${step.color.replace('bg-', 'text-')}`} strokeWidth={1.5} />
                                <div className={`absolute -right-2 -bottom-2 w-8 h-8 rounded-full ${step.color} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                                    {step.id}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full w-full hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
