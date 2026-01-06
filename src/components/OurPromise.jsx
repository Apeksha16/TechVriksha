import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Search, Target } from 'lucide-react';

const OurPromise = () => {
    const [activeStep, setActiveStep] = useState(0);

    const promises = [
        {
            id: 0,
            title: 'Rooted in Tradition',
            description: 'Timeless wisdom guiding modern innovation.',
            icon: Leaf,
            color: 'bg-blue-500',
            textColor: 'text-white'
        },
        {
            id: 1,
            title: 'Premium Quality',
            description: 'Meticulous attention to every pixel and line of code.',
            icon: Award,
            color: 'bg-slate-700',
            textColor: 'text-white'
        },
        {
            id: 2,
            title: 'Transparent Process',
            description: 'Clear communication throughout the journey.',
            icon: Search,
            color: 'bg-slate-800',
            textColor: 'text-white'
        }
    ];

    const PyramidStep = ({ item, width, zIndex, isTop }) => (
        <motion.div
            className={`relative mx-auto flex items-center justify-center ${item.color} shadow-2xl transition-all duration-300 ${activeStep === item.id ? 'brightness-110 scale-[1.02]' : 'brightness-100'
                }`}
            style={{
                width: width,
                height: '80px',
                zIndex: zIndex,
                borderRadius: '8px',
                transform: 'perspective(500px) rotateX(5deg)',
                marginBottom: '-10px'
            }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: item.id * 0.2 }}
            onMouseEnter={() => setActiveStep(item.id)}
        >
            {isTop && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: -50, opacity: 1 }}
                    animate={{ y: [-50, -60, -50] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 w-20 h-20 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center shadow-xl z-50"
                >
                    <Target className="w-10 h-10 text-blue-500" />
                </motion.div>
            )
            }

            <h3 className={`font-bold uppercase tracking-widest ${item.textColor}`}>
                {item.title}
            </h3>
        </motion.div >
    );

    return (
        <section className="relative py-32 bg-[#0F172A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#F8FAFC] mb-4">
                        Our Promise
                    </h2>
                    <p className="text-lg text-[#F8FAFC]/60">
                        Built on a foundation of trust and excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Interactive List */}
                    <div className="space-y-8 order-2 lg:order-1">
                        {promises.map((item) => (
                            <motion.div
                                key={item.id}
                                className={`flex items-start gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeStep === item.id
                                    ? 'bg-white shadow-xl scale-105 border-l-4 border-blue-500'
                                    : 'hover:bg-[#F8FAFC]/10 border-l-4 border-transparent'
                                    }`}
                                onMouseEnter={() => setActiveStep(item.id)}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: item.id * 0.1 }}
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeStep === item.id ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                                    }`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`text-xl font-bold mb-2 ${activeStep === item.id ? 'text-slate-900' : 'text-slate-300'
                                        }`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${activeStep === item.id ? 'text-slate-900/70' : 'text-slate-400'
                                        }`}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Pyramid Graphic */}
                    <div className="relative pt-20 px-8 flex flex-col items-center order-1 lg:order-2">
                        {/* Connecting Line (Visual Aid) */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] border-t-2 border-dashed border-[#F8FAFC]/20 -z-10 hidden lg:block" />

                        <PyramidStep
                            item={promises[0]}
                            width="50%"
                            zIndex={30}
                            isTop={true}
                        />
                        <PyramidStep
                            item={promises[1]}
                            width="70%"
                            zIndex={20}
                        />
                        <PyramidStep
                            item={promises[2]}
                            width="90%"
                            zIndex={10}
                        />

                        {/* Shadow Reflection */}
                        <div className="w-[85%] h-8 bg-black/30 blur-xl rounded-[50%] mt-[-5px] z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurPromise;
