import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Globe, Layout, Zap, Shield, BarChart, Settings, Cloud, Palette, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Globe,
            title: "Web Development",
            desc: "Responsive, SEO-friendly websites using React, Angular, and Next.js. From simple landing pages to complex web applications.",
            stack: "HTML, CSS, SCSS, Tailwind, Bootstrap, React JS, Angular, Next.js",
            features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Modern UI/UX", "CMS Integration"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Smartphone,
            title: "Mobile Applications",
            desc: "Native and Cross-platform apps for iOS and Android. Build once, deploy everywhere with React Native.",
            stack: "React Native, Flutter, iOS, Android, Firebase, Push Notifications",
            features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Optimization", "Real-time Sync"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Server,
            title: "Backend Systems",
            desc: "Robust and scalable server-side solutions. APIs, databases, and cloud infrastructure tailored to your needs.",
            stack: "Node.js, Express.js, Python, Django, REST APIs, GraphQL",
            features: ["Scalable Architecture", "API Development", "Database Design", "Cloud Deployment", "Security"],
            gradient: "from-green-600 to-emerald-600"
        },
        {
            icon: Database,
            title: "Database Management",
            desc: "Secure and efficient data storage solutions. From MongoDB to PostgreSQL, we handle all your data needs.",
            stack: "MongoDB, Firebase, PostgreSQL, MySQL, Redis, Data Modeling",
            features: ["Database Design", "Data Migration", "Query Optimization", "Backup & Recovery", "Security"],
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: Layout,
            title: "UI/UX Design",
            desc: "User-centric design with premium aesthetics. Beautiful interfaces that users love to interact with.",
            stack: "Figma, Adobe XD, Framer, Design Systems, Prototyping, Animation",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Animation"],
            gradient: "from-pink-500 to-rose-500"
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            desc: "Deploy and scale your applications on AWS, Azure, or GCP. Full cloud infrastructure management.",
            stack: "AWS, Azure, GCP, Docker, Kubernetes, CI/CD, DevOps",
            features: ["Cloud Migration", "DevOps Setup", "Auto-scaling", "Monitoring", "Security"],
            gradient: "from-indigo-500 to-blue-500"
        }
    ];

    const pricingPlans = [
        {
            id: 'starter',
            name: 'Small Plan',
            displayPrice: "$39",
            period: "per month",
            features: ['Free domain', 'Monthly Bandwidth 1GB', 'SSD Storage 1TB', 'SSL Certificate', 'Website SEO', 'Google Analytics', 'Messenger Live Chat', 'Full Support'],
            // Reference: Smooth matte Brown/Taupe
            gradient: "from-[#1E293B] to-[#0F172A]",
            buttonColor: "text-[#1E293B]",
            shadowColor: "shadow-[#1E293B]/30"
        },
        {
            id: 'professional',
            name: 'Medium Plan',
            displayPrice: "$69",
            period: "per month",
            features: ['Free domain', 'Monthly Bandwidth 1GB', 'SSD Storage 1TB', 'SSL Certificate', 'Website SEO', 'Google Analytics', 'Messenger Live Chat', 'Full Support'],
            // Reference: Vibrant Orange/Saffron
            // Reference: Blue/Cyan
            gradient: "from-[#3B82F6] to-[#0EA5E9]",
            buttonColor: "text-[#3B82F6]",
            shadowColor: "shadow-[#3B82F6]/30"
        },
        {
            id: 'enterprise',
            name: 'Large Plan',
            displayPrice: "$99",
            period: "per month",
            features: ['Free domain', 'Monthly Bandwidth 1GB', 'SSD Storage 1TB', 'SSL Certificate', 'Website SEO', 'Google Analytics', 'Messenger Live Chat', 'Full Support'],
            // Reference: Fresh, slightly muted Green
            // Reference: Purple/Pink
            gradient: "from-[#8B5CF6] to-[#D946EF]",
            buttonColor: "text-[#8B5CF6]",
            shadowColor: "shadow-[#8B5CF6]/30"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Section 1: Header and Grid - Cream Background */}
            <div className="bg-[#F8FAFC] py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-500 tracking-widest uppercase font-semibold text-sm sanskrit-text">
                            Our Capabilities
                        </span>
                        <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-slate-900 sanskrit-accent">
                            Services We Offer
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive digital solutions from design to deployment, covering all aspects of your digital journey
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-tr-3xl rounded-br-3xl border-l-[6px] border-[#3B82F6] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-start h-full"
                            >
                                {/* Icon */}
                                <div className="mb-6 p-4 bg-[#3B82F6]/10 rounded-2xl group-hover:bg-[#3B82F6] transition-colors duration-300">
                                    <service.icon size={32} className="text-[#3B82F6] group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold font-serif text-slate-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {service.desc}
                                </p>

                                {/* Learn More Link */}
                                <div className="mt-auto flex items-center text-[#3B82F6] font-semibold text-sm cursor-pointer group-hover:gap-2 transition-all">
                                    <span>Learn more</span>
                                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 2: CTA Section - Brown Background */}
            <div className="bg-[#0F172A] relative pt-20 overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-4 pb-20">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#F8FAFC] mb-12 relative z-10">
                        Let's Create an <span className="text-[#3B82F6]">Amazing</span><br />
                        Project Together!
                    </h2>

                    {/* Scattered Tags Container */}
                    <div className="relative h-[300px] w-full max-w-5xl mx-auto mb-12">
                        {/* Central Button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#3B82F6] text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all shadow-lg shadow-[#3B82F6]/20"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Scattered Tags - Animated */}
                        {/* Highlighting Saffron Tags */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] left-[15%] bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium -rotate-6 text-[#0F172A]"
                        >
                            Prototype
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[25%] left-[5%] bg-white border border-[#0F172A]/10 px-4 py-2 rounded-full text-xs text-[#0F172A]/60 rotate-3"
                        >
                            Design System
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[40%] left-[20%] bg-white px-5 py-2 rounded-full shadow-md text-sm font-medium rotate-6 z-10 text-[#0F172A]"
                        >
                            Wireframe Design
                        </motion.div>

                        {/* Top Right */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            className="absolute top-[15%] right-[20%] bg-[#3B82F6] text-white px-4 py-2 rounded-full shadow-md text-sm font-medium rotate-6"
                        >
                            Dashboard
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                            className="absolute top-[30%] right-[10%] bg-white border border-[#0F172A]/10 px-4 py-2 rounded-full text-xs text-[#0F172A]/60 -rotate-3"
                        >
                            UI Design
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -18, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            className="absolute top-[45%] right-[25%] bg-white px-5 py-2 rounded-full shadow-md text-sm font-medium -rotate-6 text-[#0F172A]"
                        >
                            Brand Identity
                        </motion.div>

                        {/* Bottom Left */}
                        <motion.div
                            animate={{ y: [0, -14, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            className="absolute bottom-[20%] left-[10%] bg-[#3B82F6] text-white px-5 py-2 rounded-full shadow-md text-sm font-medium -rotate-12"
                        >
                            Mobile App Design
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -9, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                            className="absolute bottom-[35%] left-[25%] bg-white border border-[#0F172A]/10 px-4 py-2 rounded-full text-xs text-[#0F172A]/60 rotate-6"
                        >
                            Website Design
                        </motion.div>

                        {/* Bottom Right */}
                        <motion.div
                            animate={{ y: [0, -16, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                            className="absolute bottom-[20%] right-[15%] bg-[#3B82F6] text-white px-5 py-2 rounded-full shadow-md text-sm font-medium rotate-12"
                        >
                            Product Design
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -11, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                            className="absolute bottom-[35%] right-[30%] bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium -rotate-3 text-[#0F172A]"
                        >
                            Landing Page
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -7, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-[10%] right-[40%] bg-white border border-[#0F172A]/10 px-4 py-2 rounded-full text-xs text-[#0F172A]/60 rotate-3"
                        >
                            UX/UI Design
                        </motion.div>

                        {/* Center Surrounding */}
                        <motion.div
                            animate={{ y: [0, -13, 0] }} transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="absolute top-[20%] left-[40%] bg-[#3B82F6] text-white px-4 py-2 rounded-full shadow-md text-sm font-medium -rotate-6"
                        >
                            Illustration
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }} transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                            className="absolute top-[60%] left-[45%] bg-[#3B82F6] text-white px-4 py-2 rounded-full shadow-md text-sm font-medium rotate-3"
                        >
                            Brand Identity
                        </motion.div>

                    </div>
                </div>

                {/* Scrolling Bottom Banner */}
                <div className="w-full bg-[#3B82F6] py-4 overflow-hidden relative border-y-4 border-[#3B82F6]">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-12 px-6">
                                {['Web Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research', 'Prototyping', 'Development', 'Strategy'].map((item) => (
                                    <div key={item} className="flex items-center gap-12 font-bold text-2xl text-white">
                                        <span>{item}</span>
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <line x1="7" y1="7" x2="17" y2="17"></line>
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Section 3: Pricing Section - Cream Background */}
            <div className="bg-[#F8FAFC] py-20 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-100 rounded-xl flex items-center justify-center">
                                <div className="w-4 h-4 bg-slate-400 rotate-45"></div>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2">
                            Choose your best plan
                        </h2>
                    </div>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className={`relative rounded-[2.5rem] overflow-hidden ${plan.shadowColor} hover:shadow-2xl transition-all duration-300 isolate min-h-[500px]`}
                            >
                                {/* Card Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} z-0`} />

                                {/* Content */}
                                <div className="relative z-10 p-8 pt-12 pb-32 h-full flex flex-col text-white">
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

                                {/* Bottom Cutout Area */}
                                <div className="absolute bottom-0 left-0 w-full z-20 text-white">
                                    <div className="flex items-end justify-between">
                                        {/* Price Area */}
                                        <div className="pl-8 pb-10">
                                            <div className="text-5xl font-bold">{plan.displayPrice}</div>
                                            <div className="text-white/70 text-sm font-medium">per month</div>
                                        </div>

                                        {/* Custom Button Container */}
                                        <div className="relative w-[180px] h-[100px]">
                                            {/* SVG Shape for the inverse corner - matching Page BG color for cutout effect */}
                                            {/* Since page bg is Cream (#FFF9F3), use that fill */}
                                            <svg className="absolute -top-[40px] right-0 w-[40px] h-[40px] z-10" width="40" height="40" viewBox="0 0 40 40">
                                                <path d="M40 40 L0 40 L0 0 C0 22 18 40 40 40 Z" fill="#F8FAFC" transform="rotate(270 20 20) translate(0 15)" />
                                            </svg>

                                            {/* The Button Container itself */}
                                            <div className="absolute bottom-0 right-0 w-full h-full bg-[#F8FAFC] rounded-tl-[2.5rem] flex items-center justify-center p-2">
                                                <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group cursor-pointer hover:opacity-80 transition-opacity">
                                                    Sign up
                                                    <div className={`w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center`}>
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
                </div>
            </div>
        </div>
    );
};

export default Services;
