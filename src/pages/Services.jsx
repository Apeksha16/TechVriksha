import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Globe, Layout, Zap, Shield, BarChart, Settings, Cloud, Palette } from 'lucide-react';
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

    return (
        <div className="bg-[#FAF9F6] min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-vedic-saffron tracking-widest uppercase font-semibold text-sm sanskrit-text">
                        Our Capabilities
                    </span>
                    <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-vedic-black sanskrit-accent">
                        Services We Offer
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-vedic-brown/70 max-w-3xl mx-auto leading-relaxed">
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
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="vedic-card p-8 relative overflow-hidden group cursor-pointer"
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            
                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg mb-6`}
                                >
                                    <service.icon size={32} />
                                </motion.div>
                                
                                <h3 className="text-2xl font-serif font-bold text-vedic-black mb-4 group-hover:text-vedic-saffron transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-vedic-brown/70 mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                
                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center text-sm text-vedic-brown/80">
                                            <Zap className="w-4 h-4 text-vedic-saffron mr-2 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* Tech Stack */}
                                <div className="pt-6 border-t border-vedic-black/10">
                                    <span className="text-xs font-semibold text-vedic-black/40 uppercase tracking-wide block mb-2">
                                        Tech Stack
                                    </span>
                                    <p className="text-sm font-medium text-vedic-black leading-relaxed">
                                        {service.stack}
                                    </p>
                                </div>
                            </div>

                            {/* Hover effect */}
                            <div className="absolute inset-0 border-2 border-vedic-saffron/0 group-hover:border-vedic-saffron/30 rounded-2xl transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-gradient-to-br from-vedic-saffron/10 to-vedic-gold/5 rounded-3xl p-8 md:p-12 vedic-card text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-black mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-vedic-brown/70 mb-8 max-w-2xl mx-auto text-lg">
                        Let's discuss how we can bring your vision to life with our premium services and expertise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-vedic text-white rounded-full font-semibold hover:shadow-xl hover:shadow-vedic-saffron/30 transition-all vedic-button premium-glow-hover group"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/pricing"
                            className="inline-flex items-center justify-center px-8 py-4 bg-vedic-white border-2 border-vedic-black text-vedic-black rounded-full font-semibold hover:bg-vedic-black hover:text-white transition-all vedic-button"
                        >
                            View Pricing
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
