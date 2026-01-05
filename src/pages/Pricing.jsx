import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Circle, Triangle, Hexagon, Sparkles, ChevronUp } from 'lucide-react';

const Pricing = () => {
    const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'annual'

    const plans = [
        {
            id: 'starter',
            name: 'STARTER',
            icon: Circle,
            iconColor: 'from-blue-500 to-cyan-500',
            tagline: 'Best for small businesses',
            monthlyPrice: 499,
            annualPrice: 4990, // 2 months free (approx 17% discount)
            features: [
                'Up to 5 Pages Website',
                'Mobile Responsive Design',
                'Contact Form Integration',
                'Basic SEO Setup',
                '1 Month Free Support',
                'SSL Certificate',
                'Social Media Integration',
                'Basic Analytics',
                'Email Support'
            ],
            popular: false,
            buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            id: 'professional',
            name: 'PROFESSIONAL',
            icon: Triangle,
            iconColor: 'from-vedic-saffron to-vedic-gold',
            tagline: 'Most popular plan',
            monthlyPrice: 999,
            annualPrice: 9990, // 2 months free (approx 17% discount)
            features: [
                'All Starter Features',
                'Up to 15 Pages',
                'CMS Integration',
                'Advanced SEO Optimization',
                'E-commerce Ready',
                'Payment Gateway Integration',
                '3 Months Free Support',
                'Performance Optimization',
                'Custom Animations',
                'Priority Support',
                'Analytics Dashboard'
            ],
            popular: true,
            buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            id: 'enterprise',
            name: 'ENTERPRISE',
            icon: Hexagon,
            iconColor: 'from-purple-500 to-indigo-500',
            tagline: 'Exclusively for enterprises',
            monthlyPrice: 2499,
            annualPrice: 24990, // 2 months free (approx 17% discount)
            features: [
                'All Professional Features',
                'Unlimited Pages',
                'Custom Web Application',
                'Advanced E-commerce',
                'Multi-language Support',
                'API Integration',
                'Dedicated Account Manager',
                '6 Months Free Support',
                'Custom Development',
                '24/7 Priority Support',
                'White-label Solution',
                'Training & Documentation'
            ],
            popular: false,
            buttonColor: 'bg-purple-600 hover:bg-purple-700'
        }
    ];

    const getPrice = (plan) => {
        return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
    };

    const getPeriod = () => {
        return billingPeriod === 'monthly' ? '/ MO' : '/ YR';
    };

    const getSavings = (plan) => {
        if (billingPeriod === 'annual') {
            const savings = (plan.monthlyPrice * 12) - plan.annualPrice;
            return `Save $${savings}/year`;
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-vedic-black via-vedic-brown to-vedic-black py-20 px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-96 h-96 bg-vedic-saffron rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-vedic-gold rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-2 px-5 rounded-full bg-vedic-saffron/10 text-vedic-saffron border border-vedic-saffron/20 text-xs md:text-sm font-semibold tracking-widest uppercase mb-8"
                    >
                        <Sparkles className="inline w-4 h-4 mr-2" />
                        Flexible Pricing
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
                        Choose Your Plan
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                        Flexible pricing for teams of all sizes
                    </p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center bg-vedic-brown/50 backdrop-blur-sm rounded-full p-1.5 border border-white/10"
                    >
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                billingPeriod === 'monthly'
                                    ? 'bg-gradient-to-r from-vedic-saffron to-vedic-gold text-white shadow-lg'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            MONTHLY
                        </button>
                        <button
                            onClick={() => setBillingPeriod('annual')}
                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                                billingPeriod === 'annual'
                                    ? 'bg-gradient-to-r from-vedic-saffron to-vedic-gold text-white shadow-lg'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            ANNUAL
                            {billingPeriod === 'annual' && (
                                <span className="absolute -top-2 -right-2 text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full">
                                    Save 17%
                                </span>
                            )}
                        </button>
                    </motion.div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {plans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        const price = getPrice(plan);
                        const period = getPeriod();
                        const savings = getSavings(plan);

                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    default: { delay: 0.3 + index * 0.1, duration: 0.6 },
                                    hover: { duration: 0.15, ease: "easeOut" }
                                }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative"
                            >
                                {/* Card */}
                                <div className="relative bg-vedic-brown/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/10 hover:border-vedic-saffron/30 transition-all duration-150 h-full flex flex-col">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                                        style={{ transformOrigin: "center center" }}
                                    >
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${plan.iconColor} flex items-center justify-center shadow-xl border-4 border-vedic-brown`}>
                                            <IconComponent className="w-8 h-8 text-white" fill="white" />
                                        </div>
                                    </motion.div>

                                    {/* Plan Name */}
                                    <div className="mt-10 mb-6">
                                        <div className="inline-block px-5 py-2 rounded-lg text-xs font-bold mb-3 bg-white/10 text-white/80 border border-white/20">
                                            {plan.name}
                                        </div>
                                        <p className="text-white/60 text-sm">{plan.tagline}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline">
                                            <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-vedic-saffron via-vedic-gold to-vedic-saffron bg-clip-text text-transparent">
                                                ${price.toLocaleString()}
                                            </span>
                                            <span className="text-white/60 ml-2 text-xl">{period}</span>
                                        </div>
                                        {savings && (
                                            <p className="text-green-400 text-sm font-semibold mt-2">
                                                {savings}
                                            </p>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + index * 0.1 + idx * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-vedic-saffron/20">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className={`w-full ${plan.buttonColor} text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all duration-150 group border-2 border-white/20`}
                                    >
                                        <span className="text-base">GET STARTED</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Need Something Custom?
                        </h3>
                        <p className="text-white/60 mb-6 max-w-2xl mx-auto">
                            We understand every project is unique. Contact us for a custom quote tailored to your specific needs.
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vedic-saffron to-vedic-gold text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-vedic-saffron/30 transition-all"
                        >
                            <span>Contact Us</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
