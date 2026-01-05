import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Specializations from '../components/Specializations';
import Newsletter from '../components/Newsletter';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';

const featuredProjects = [
    {
        id: 1,
        title: "VedicAI Platform",
        category: "Web Application",
        description: "An AI-powered platform synthesizing ancient Vedic texts with modern search algorithms.",
        tags: ["React JS", "Node.js", "MongoDB", "TensorFlow", "Tailwind CSS"],
        features: ["AI-powered text analysis", "Real-time collaboration", "Multilingual support"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Saffron eCommerce",
        category: "E-commerce",
        description: "Premium lifestyle eCommerce store with advanced features and seamless UX.",
        tags: ["React JS", "Next.js", "MongoDB", "Stripe", "Firebase"],
        features: ["Advanced filtering", "Payment integration", "Real-time inventory"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Yoga & Wellness App",
        category: "Mobile App",
        description: "Cross-platform mobile app with video streaming and progress tracking.",
        tags: ["React Native", "Firebase", "Redux", "Node.js"],
        features: ["HD video streaming", "Progress tracking", "Community features"],
        link: "#",
        github: "#"
    }
];

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* About/Video Section */}
            <AboutSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Technologies Section */}
            <Technologies />

            {/* Specializations Section */}
            <Specializations />

            {/* Featured Projects Section - 3D Grid Design */}
            <FeaturedProjects />

            {/* Our Promise Section - Completely Redesigned */}
            <section className="relative py-32 bg-gradient-to-b from-white via-[#FAF9F6] to-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-1/4 w-96 h-96 bg-vedic-saffron/5 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [360, 180, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 right-1/4 w-96 h-96 bg-vedic-brown/5 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block w-4 h-4 rounded-full bg-vedic-saffron mb-8"
                        />
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-vedic-black leading-[0.95] mb-8 tracking-tight">
                            Our Promise
                        </h2>
                        <p className="text-xl md:text-2xl text-vedic-black/60 max-w-3xl mx-auto leading-relaxed">
                            What sets us apart in the digital landscape
                        </p>
                    </motion.div>

                    {/* Promise Cards - Modern Design */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                title: 'Rooted in Tradition',
                                description: 'We blend ancient wisdom with modern technology, creating solutions that are both timeless and cutting-edge.',
                                icon: '🌿',
                                number: '01',
                                color: 'from-vedic-saffron/20 to-vedic-gold/20'
                            },
                            {
                                title: 'Premium Quality',
                                description: 'Every project is crafted with meticulous attention to detail and a commitment to excellence.',
                                icon: '✨',
                                number: '02',
                                color: 'from-vedic-brown/20 to-vedic-black/20'
                            },
                            {
                                title: 'Transparent Process',
                                description: 'Clear communication, transparent pricing, and regular updates throughout your project journey.',
                                icon: '🔮',
                                number: '03',
                                color: 'from-vedic-saffron/20 to-vedic-gold/20'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -20, rotateY: 5, z: 50 }}
                                className="relative group perspective-1000"
                            >
                                {/* Card */}
                                <div className="relative bg-white border-2 border-vedic-black/10 rounded-3xl p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                    {/* Number Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.3 }}
                                        className="absolute top-6 right-6 w-16 h-16 rounded-full bg-vedic-saffron/10 border-2 border-vedic-saffron/30 flex items-center justify-center"
                                    >
                                        <span className="text-2xl font-bold text-vedic-saffron">{item.number}</span>
                                    </motion.div>

                                    {/* Gradient Background */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    {/* Icon Container */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.4, type: "spring", stiffness: 200 }}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        className="relative z-10 w-24 h-24 rounded-3xl bg-vedic-saffron/10 flex items-center justify-center mb-8 group-hover:bg-vedic-saffron/20 transition-colors"
                                    >
                                        <span className="text-6xl">{item.icon}</span>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <motion.h3
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.5 }}
                                            className="text-3xl md:text-4xl font-bold text-vedic-black mb-6 group-hover:text-vedic-saffron transition-colors"
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.6 }}
                                            className="text-vedic-black/70 leading-relaxed text-lg"
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>

                                    {/* Decorative Corner */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.7 }}
                                        className="absolute bottom-0 right-0 w-32 h-32 bg-vedic-saffron/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    />

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-vedic-saffron/0 group-hover:bg-vedic-saffron/5 transition-colors duration-500 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* Newsletter Section */}
            <Newsletter />
        </>
    );
};

export default Home;
