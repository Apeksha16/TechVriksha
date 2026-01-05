import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
    // Reference designs have 3 distinct gradients
    // Small Plan: Deep Brown/Clay
    // Medium Plan: Saffron/Gold
    // Large Plan: Green/Olive (Project colors)

    const plans = [
        {
            id: 'starter',
            name: 'Small Plan',
            price: 399, // INR in hundreds (e.g. 39k or similar, using ref values but in appropriate currency or keeping simple $)
            // Using dollar from ref for now, or just generic numbers.
            // Reference says $39, $69, $99. I will use these for visual matching.
            displayPrice: "$39",
            period: "per month",
            features: [
                'Free domain',
                'Monthly Bandwidth 1GB',
                'SSD Storage 1TB',
                'SSL Certificate',
                'Website SEO',
                'Google Analytics',
                'Messenger Live Chat',
                'Full Support'
            ],
            // Gradient: Blue/Purple in ref -> Clay/Brown in theme
            gradient: "from-[#4A3B32] to-[#8D6E63]", // Deep earthy brown to lighter clay
            buttonColor: "text-[#4A3B32]",
            shadowColor: "shadow-[#4A3B32]/30"
        },
        {
            id: 'professional',
            name: 'Medium Plan',
            price: 69,
            displayPrice: "$69",
            period: "per month",
            features: [
                'Free domain',
                'Monthly Bandwidth 1GB',
                'SSD Storage 1TB',
                'SSL Certificate',
                'Website SEO',
                'Google Analytics',
                'Messenger Live Chat',
                'Full Support'
            ],
            // Reference: Orange -> Saffron/Gold
            gradient: "from-[#FD7503] to-[#FFAB40]",
            buttonColor: "text-[#FD7503]",
            shadowColor: "shadow-[#FD7503]/30"
        },
        {
            id: 'enterprise',
            name: 'Large Plan',
            price: 99,
            displayPrice: "$99",
            period: "per month",
            features: [
                'Free domain',
                'Monthly Bandwidth 1GB',
                'SSD Storage 1TB',
                'SSL Certificate',
                'Website SEO',
                'Google Analytics',
                'Messenger Live Chat',
                'Full Support'
            ],
            // Reference: Green/Teal -> Olive/Green to match ecosystem
            // Or maybe a Dark Brown/Black for "Premium".
            // Let's go with a rich Green/Teal to match the "Tree" vibe if suitable, or stick to Brown.
            // Reference uses Green for Large. Let's use a Vedinc Green/Teal.
            gradient: "from-[#2E7D32] to-[#66BB6A]",
            buttonColor: "text-[#2E7D32]",
            shadowColor: "shadow-[#2E7D32]/30"
        }
    ];

    return (
        <div className="min-h-screen bg-[#1A1A1A] text-white py-20 px-4 flex flex-col items-center justify-center font-sans">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="flex items-center justify-center mb-6">
                    {/* Logo placeholder or similar icon from Ref */}
                    <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                        <div className="w-4 h-4 bg-white/50 rotate-45"></div>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Choose your best plan
                </h1>
                {/* Hamburger menu icon from ref (decorative) */}
            </motion.div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className={`relative rounded-[2.5rem] overflow-hidden ${plan.shadowColor} hover:shadow-2xl transition-all duration-300 isolate`}
                    >
                        {/* Card Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} z-0`} />

                        {/* Content */}
                        <div className="relative z-10 p-8 pt-12 pb-32 h-full flex flex-col">
                            <h3 className="text-2xl font-bold mb-8">{plan.name}</h3>

                            <ul className="space-y-4 mb-8 text-sm font-medium text-white/90">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-white/70" strokeWidth={3} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom Cutout Area - Constructing visually with absolute positioning */}
                        {/* The reference has a dark area at bottom right that curves IN to the card. */}
                        {/* We can simulate this by placing a full-width bottom bar that is mostly transparent but has the price, and a dark button shape. */}

                        {/* Actually, it looks like the main card shape HAS a cutout, and the dark background peeks through? 
                           Or the dark button container sits ON TOP.
                           Let's look closely at ref:
                           The card color stops. There is a dark shape at the bottom right. The card color curves AROUND it.
                           This is effectively a border-radius manipulation or a mask.
                        */}

                        <div className="absolute bottom-0 left-0 w-full z-20">
                            <div className="flex items-end justify-between">
                                {/* Price Area (On Gradient) */}
                                <div className="pl-8 pb-10">
                                    <div className="text-5xl font-bold">{plan.displayPrice}</div>
                                    <div className="text-white/70 text-sm font-medium">per month</div>
                                </div>

                                {/* Custom Button Container utilizing SVG for the 'scoop' effect */}
                                <div className="relative w-[180px] h-[100px]">
                                    {/* Dark Button Container Background acting as the 'hole' filler visually since page bg is dark? 
                                        No, the reference implies the card sits ON a dark bg. 
                                        So if I make this shape dark like the page bg, it looks like a cutout.
                                     */}

                                    {/* SVG Shape for the inverse corner */}
                                    {/* This SVG sits at the top left of the button container to create the curve from the card body down to the button area */}
                                    <svg className="absolute -top-[40px] right-0 w-[40px] h-[40px] z-10" width="40" height="40" viewBox="0 0 40 40">
                                        {/* This path fits in the corner. It should be the color of the CARD gradient. 
                                            Since gradient is CSS, we might need a solid filler or complex mask. 
                                            Easier approach: Just use a standard rounded dark container for the button that sits on top. 
                                            Reference: The button area is dark. The card color curves inward above it. 
                                        */}
                                        <path d="M40 40 L0 40 L0 0 C0 22 18 40 40 40 Z" fill="#1A1A1A" transform="rotate(270 20 20) translate(0 15)" />
                                        {/* Actually simpler: A dark box with a rounded top-left corner */}
                                    </svg>

                                    {/* The Button Container itself */}
                                    <div className="absolute bottom-0 right-0 w-full h-full bg-[#1A1A1A] rounded-tl-[2.5rem] flex items-center justify-center p-2">
                                        <button className="flex items-center gap-2 text-sm font-bold text-white group cursor-pointer hover:opacity-80 transition-opacity">
                                            Sign up
                                            <div className={`w-6 h-6 rounded-full bg-white ${plan.buttonColor} flex items-center justify-center`}>
                                                <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="fixed bottom-4 text-xs text-center text-white/20 w-full">
                Designed by Harry Boo
            </div>
        </div>
    );
};

export default Pricing;
