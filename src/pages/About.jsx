import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, Code, Palette, Award, Users, Briefcase, Target, Heart, Zap, Sparkles, TrendingUp, Rocket, ArrowRight } from 'lucide-react';
import apekshaImage from '../assets/apeksha.jpg';
import pranavImage from '../assets/pranav.jpg';
import { Link } from 'react-router-dom';

const partners = [
    {
        name: "APEKSHA VERMA",
        role: "Co-Founder & Tech Lead",
        bio: "Expert in Full Stack Development with 12+ years of experience in building scalable architectures. Passionate about combining modern technology with timeless principles.",
        fullBio: "Apeksha is a visionary technologist who has led development teams at multiple startups and established companies. With a deep understanding of React, Node.js, and cloud infrastructure, she specializes in creating robust, scalable applications that stand the test of time. Her expertise spans from microservices architecture to real-time systems, and she's passionate about mentoring the next generation of developers.",
        skills: ["React JS", "Node.js", "MongoDB", "AWS", "Microservices", "DevOps"],
        experience: "12+ Years",
        projects: "150+ Projects",
        image: apekshaImage,
        bgColor: "bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400",
        accentColor: "pink",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            email: "apeksha@techvriksha.com"
        }
    },
    {
        name: "PRANAV KATIYAR",
        role: "Co-Founder & Design Head",
        bio: "Award-winning designer with 10+ years of experience blending cultural aesthetics with modern UI/UX. Creates beautiful, intuitive interfaces that users love.",
        fullBio: "Pranav is an acclaimed UI/UX designer who has won multiple awards for his innovative design work. He combines his deep appreciation for Indian aesthetics with modern design principles to create interfaces that are both beautiful and functional. His portfolio includes work for Fortune 500 companies and innovative startups. He's also a published author and speaker at design conferences worldwide.",
        skills: ["UI/UX Design", "Figma", "Adobe XD", "Framer", "Design Systems", "Animation"],
        experience: "10+ Years",
        projects: "200+ Projects",
        image: pranavImage,
        bgColor: "bg-gradient-to-br from-blue-300 via-cyan-400 to-blue-500",
        accentColor: "blue",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            email: "pranav@techvriksha.com"
        }
    }
];

const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-blue-500 to-cyan-500", description: "Satisfied customers worldwide" },
    { icon: Briefcase, label: "Projects Completed", value: "800+", color: "from-purple-500 to-pink-500", description: "Successful launches" },
    { icon: Award, label: "Awards Won", value: "25+", color: "from-orange-500 to-red-500", description: "Industry recognition" },
    { icon: Code, label: "Lines of Code", value: "2M+", color: "from-green-500 to-teal-500", description: "Quality code written" }
];

const values = [
    {
        icon: Heart,
        title: "Passion First",
        description: "We love what we do and it shows in every project. Our enthusiasm drives innovation.",
        color: "from-red-500 to-pink-500"
    },
    {
        icon: Target,
        title: "Excellence",
        description: "We strive for perfection in every detail, ensuring the highest quality deliverables.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: Sparkles,
        title: "Integrity",
        description: "Transparency, honesty, and ethical practices are at the core of everything we do.",
        color: "from-purple-500 to-indigo-500"
    }
];

const timeline = [
    {
        year: "2015",
        title: "Foundation",
        description: "Tech Vriksha was born from a vision to merge ancient wisdom with modern technology.",
        icon: Rocket
    },
    {
        year: "2018",
        title: "Expansion",
        description: "Expanded our team and completed 200+ projects, building a strong reputation in the industry.",
        icon: TrendingUp
    },
    {
        year: "2020",
        title: "Recognition",
        description: "Won multiple industry awards and established partnerships with Fortune 500 companies.",
        icon: Award
    },
    {
        year: "2024",
        title: "Innovation",
        description: "Leading the industry with cutting-edge solutions and a team of exceptional talent.",
        icon: Sparkles
    }
];

const About = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-vedic-black via-vedic-brown to-vedic-black overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                <div className="absolute top-20 left-10 w-96 h-96 bg-vedic-saffron/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-vedic-gold/10 rounded-full blur-3xl"></div>
            </motion.div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-4 pt-20">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                            className="text-center mb-20"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-block py-2 px-5 rounded-full bg-vedic-saffron/10 text-vedic-saffron border border-vedic-saffron/20 text-xs md:text-sm font-semibold tracking-widest uppercase mb-8"
                            >
                                <Sparkles className="inline w-4 h-4 mr-2" />
                                Our Journey
                            </motion.span>
                            
                            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold text-white leading-[0.9] mb-8 tracking-tight">
                                <motion.span
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="block"
                                >
                                    We Build
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="block text-gradient-saffron"
                                >
                                    Digital
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="block"
                                >
                                    Excellence
                                </motion.span>
                            </h1>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="text-xl md:text-2xl lg:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
                            >
                                A passionate team of technologists and designers dedicated to creating digital excellence with a touch of timeless wisdom.
                            </motion.p>
                        </motion.div>

                        {/* Stats - Animated Counter Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className="relative group"
                                >
                                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-vedic-saffron/30 transition-all duration-300 cursor-pointer">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-xl`}
                                        >
                                            <stat.icon size={32} />
                                        </motion.div>
                                        <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 text-center">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-semibold text-white/80 mb-2 text-center">
                                            {stat.label}
                                        </div>
                                        <div className="text-xs text-white/50 text-center">
                                            {stat.description}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Team Profiles Section - Completely Redesigned */}
                <section className="py-32 px-4 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-0 w-96 h-96 bg-vedic-saffron/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-vedic-gold/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-24"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block py-2 px-5 rounded-full bg-vedic-saffron/10 text-vedic-saffron border border-vedic-saffron/20 text-xs md:text-sm font-semibold tracking-widest uppercase mb-8"
                            >
                                The Founders
                            </motion.span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
                                Meet The Team
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto">
                                The brilliant minds behind Tech Vriksha
                            </p>
                        </motion.div>

                        {/* Split Screen Design - Modern Layout */}
                        <div className="space-y-32 mb-32">
                            {partners.map((partner, index) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1 }}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                                >
                                    {/* Image Section - Large & Prominent */}
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className="flex-1 w-full lg:w-auto"
                                    >
                                        <div className="relative group">
                                            {/* Glow Effect */}
                                            <div className={`absolute inset-0 ${partner.bgColor} rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                                            
                                            {/* Image Container */}
                                            <motion.div
                                                whileHover={{ scale: 1.05, rotate: 2 }}
                                                transition={{ duration: 0.4 }}
                                                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                                            >
                                                {partner.image ? (
                                                    <img 
                                                        src={partner.image} 
                                                        alt={partner.name}
                                                        className="w-full h-[500px] md:h-[600px] object-cover"
                                                    />
                                                ) : (
                                                    <div className={`w-full h-[500px] md:h-[600px] ${partner.bgColor} flex items-center justify-center text-white text-9xl font-serif`}>
                                                        {partner.name.charAt(0)}
                                                    </div>
                                                )}
                                                
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                
                                                {/* Name Badge on Image */}
                                                <div className="absolute bottom-8 left-8 right-8">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.4 }}
                                                        className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                                                    >
                                                        <h3 className="text-3xl md:text-4xl font-bold text-vedic-black mb-2">
                                                            {partner.name}
                                                        </h3>
                                                        <p className="text-lg text-vedic-saffron font-semibold">
                                                            {partner.role}
                                                        </p>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Content Section */}
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="flex-1 w-full lg:w-auto"
                                    >
                                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
                                            {/* Bio */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 }}
                                                className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 font-light"
                                            >
                                                {partner.bio}
                                            </motion.p>

                                            {/* Stats Grid */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 }}
                                                className="grid grid-cols-2 gap-6 mb-10"
                                            >
                                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-vedic flex items-center justify-center">
                                                            <Briefcase className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="text-3xl font-bold text-white">{partner.experience}</div>
                                                            <div className="text-sm text-white/60">Experience</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-vedic flex items-center justify-center">
                                                            <Award className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="text-3xl font-bold text-white">{partner.projects}</div>
                                                            <div className="text-sm text-white/60">Projects</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Skills */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 }}
                                                className="mb-10"
                                            >
                                                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Expertise</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {partner.skills.map((skill, idx) => (
                                                        <motion.span
                                                            key={idx}
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.7 + idx * 0.05, type: "spring" }}
                                                            whileHover={{ scale: 1.1, y: -3 }}
                                                            className="px-4 py-2 bg-gradient-to-r from-vedic-saffron/20 to-vedic-gold/20 border border-vedic-saffron/30 rounded-full text-white font-medium text-sm cursor-pointer hover:from-vedic-saffron/30 hover:to-vedic-gold/30 transition-all"
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            {/* Social Links */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.8 }}
                                                className="flex items-center gap-4 pt-8 border-t border-white/10"
                                            >
                                                <span className="text-sm font-semibold text-white/60 uppercase tracking-wider mr-2">Connect:</span>
                                                {[
                                                    { icon: Linkedin, href: partner.social.linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                                                    { icon: Twitter, href: partner.social.twitter, label: "Twitter", color: "hover:bg-sky-500" },
                                                    { icon: Github, href: partner.social.github, label: "GitHub", color: "hover:bg-gray-800" },
                                                    { icon: Mail, href: `mailto:${partner.social.email}`, label: "Email", color: "hover:bg-vedic-saffron" }
                                                ].map((social, idx) => (
                                                    <motion.a
                                                        key={idx}
                                                        href={social.href}
                                                        target={social.href.startsWith('mailto') ? undefined : "_blank"}
                                                        rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                                        whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className={`p-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 ${social.color} transition-all duration-300 shadow-lg`}
                                                        aria-label={social.label}
                                                    >
                                                        <social.icon size={20} />
                                                    </motion.a>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
                                Our Values
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.15, duration: 0.6 }}
                                    whileHover={{ y: -15, scale: 1.05 }}
                                    className="group relative"
                                >
                                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-vedic-saffron/50 transition-all duration-300 h-full flex flex-col">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-xl mb-6`}
                                        >
                                            <value.icon size={32} />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-vedic-saffron transition-colors">
                                            {value.title}
                                        </h3>
                                        <p className="text-white/70 leading-relaxed flex-grow">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
                                Our Journey
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto">
                                Milestones that shaped our story
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-vedic-saffron via-vedic-gold to-vedic-saffron hidden md:block"></div>

                            <div className="space-y-24">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: index * 0.2, duration: 0.8 }}
                                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        <div className="md:w-1/2">
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -10 }}
                                                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-vedic-saffron/50 transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-vedic flex items-center justify-center text-white">
                                                        <item.icon size={24} />
                                                    </div>
                                                    <span className="text-vedic-saffron font-bold text-xl">{item.year}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                                <p className="text-white/70 leading-relaxed">{item.description}</p>
                                            </motion.div>
                                        </div>
                                        <div className="md:w-1/2"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Story - Enhanced */}
                <section className="py-32 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-vedic-saffron/20 via-vedic-gold/10 to-vedic-brown/20 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-vedic-saffron/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-96 h-96 bg-vedic-gold/10 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 text-center"
                                    >
                                        Our Story
                                    </motion.h2>
                                    <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-white/90 leading-relaxed">
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            Tech Vriksha was born from a vision to combine the depth of Vedic wisdom with the power of modern technology. 
                                            Founded by Apeksha and Pranav, we set out to create digital solutions that not only solve problems but 
                                            also inspire and elevate.
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            The name "Vriksha", meaning tree, represents our belief in building strong foundations. 
                                            Just as a tree grows from deep roots to reach great heights, we build applications on solid principles that 
                                            scale and thrive over time.
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            Today, we're proud to have worked with clients across the globe, from innovative startups to established 
                                            enterprises. Our commitment to excellence, combined with our unique blend of cultural aesthetics and 
                                            cutting-edge technology, continues to set us apart in the digital landscape.
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="mt-12 text-center"
                                    >
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-vedic-black rounded-full font-semibold hover:bg-vedic-saffron hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                                        >
                                            <span>Get In Touch</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
