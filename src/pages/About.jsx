import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, Code, Palette, Award, Users, Briefcase, Target, Heart, Zap, Sparkles, TrendingUp, Rocket, ArrowRight } from 'lucide-react';
import apekshaImage from '../assets/apeksha.jpg';
import pranavImage from '../assets/pranav.jpg';
import manavImage from '../assets/manav.png';
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
    },
    {
        name: "MANAV SHARMA",
        role: "UI/UX Designer",
        bio: "Creative designer specializing in crafting user-centric digital experiences. Blends artistic vision with technical precision to deliver stunning interfaces.",
        fullBio: "Manav is a talented UI/UX designer with a sharp eye for detail and a passion for creating immersive digital experiences. His work focuses on accessibility and user engagement, ensuring that every interface is not only visually striking but also intuitive and easy to use. He excels in translating complex requirements into elegant, simple design solutions.",
        skills: ["User Research", "Prototyping", "Interaction Design", "Visual Design", "Wireframing"],
        experience: "5+ Years",
        projects: "80+ Projects",
        image: manavImage,
        bgColor: "bg-gradient-to-br from-purple-300 via-violet-400 to-purple-500",
        accentColor: "purple",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            email: "manav@techvriksha.com"
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
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="relative min-h-screen bg-[#6A3914] overflow-hidden">
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



                {/* Team Profiles Section - Cream Background */}
                <section className="py-32 px-4 relative overflow-hidden bg-[#FFF9F3]">
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
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-vedic-black leading-tight mb-6">
                                Meet The Team
                            </h2>
                            <p className="text-xl text-vedic-black/60 max-w-2xl mx-auto">
                                The brilliant minds behind Tech Vriksha
                            </p>
                        </motion.div>

                        {/* Split Screen Design - Modern Layout */}
                        <div className="space-y-32 mb-32">
                            {partners.map((partner, index) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-12 lg:gap-20`}
                                >
                                    {/* Image Section */}
                                    <div className="flex-1 w-full lg:w-1/2">
                                        <div className="relative group">
                                            {/* Glow */}
                                            <div className="absolute inset-0 bg-vedic-saffron/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] border border-vedic-black/10 shadow-2xl">
                                                {partner.image ? (
                                                    <img
                                                        src={partner.image}
                                                        alt={partner.name}
                                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                    />
                                                ) : (
                                                    <div className={`w-full h-full ${partner.bgColor} flex items-center justify-center text-white text-9xl font-rozha`}>
                                                        {partner.name.charAt(0)}
                                                    </div>
                                                )}

                                                {/* Name Overlay */}
                                                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                                    <h3 className="text-3xl font-rozha text-white mb-2">{partner.name}</h3>
                                                    <p className="text-vedic-saffron font-medium tracking-wide border-l-2 border-vedic-saffron pl-3">{partner.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Card - Matching the Reference Image */}
                                    <div className="flex-1 w-full lg:w-1/2">
                                        <div className="bg-[#6A3914]/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-xl">

                                            {/* Bio */}
                                            <p className="text-xl md:text-2xl text-[#E8DCC4] font-light leading-relaxed mb-10">
                                                {partner.bio}
                                            </p>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-2 gap-5 mb-10">
                                                {/* Experience Stat */}
                                                <div className="bg-[#3E2723]/50 rounded-3xl p-6 flex flex-col items-start gap-4 border border-white/5 hover:bg-[#3E2723] transition-colors">
                                                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 text-white shadow-lg">
                                                        <Briefcase size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-3xl font-bold text-white mb-1">{partner.experience}</div>
                                                        <div className="text-sm text-white/50 uppercase tracking-wider font-medium">Experience</div>
                                                    </div>
                                                </div>

                                                {/* Projects Stat */}
                                                <div className="bg-[#3E2723]/50 rounded-3xl p-6 flex flex-col items-start gap-4 border border-white/5 hover:bg-[#3E2723] transition-colors">
                                                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 text-white shadow-lg">
                                                        <Award size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-3xl font-bold text-white mb-1">{partner.projects}</div>
                                                        <div className="text-sm text-white/50 uppercase tracking-wider font-medium">Projects</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Expertise */}
                                            <div className="mb-10">
                                                <h4 className="text-xs font-bold text-[#D7CCC8] uppercase tracking-[0.2em] mb-4">Expertise</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {partner.skills.map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-5 py-2.5 rounded-full bg-[#3E2723] text-[#E8DCC4] text-sm font-medium border border-[#5D4037] hover:border-vedic-saffron transition-colors cursor-default"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Connect Divider */}
                                            <div className="h-px w-full bg-white/10 mb-8" />

                                            {/* Social Connect */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-[#D7CCC8] uppercase tracking-[0.2em]">Connect:</span>
                                                <div className="flex gap-4">
                                                    {[
                                                        { icon: Linkedin, href: partner.social.linkedin },
                                                        { icon: Twitter, href: partner.social.twitter },
                                                        { icon: Github, href: partner.social.github },
                                                        { icon: Mail, href: `mailto:${partner.social.email}` }
                                                    ].map((social, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={social.href}
                                                            className="w-10 h-10 rounded-full border border-[#8D6E63] flex items-center justify-center text-[#E8DCC4] hover:bg-vedic-saffron hover:border-vedic-saffron hover:text-white transition-all duration-300"
                                                        >
                                                            <social.icon size={18} />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values & Vision Section - Brown Background */}
                <section className="py-32 px-4 bg-[#6A3914]">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-sm font-bold text-vedic-saffron tracking-widest uppercase mb-4">About Us</h2>
                            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                                Unveiling Our Identity,<br /> Vision and Values
                            </h2>
                            <p className="text-xl text-white/60 max-w-3xl mx-auto">
                                We're passionate about digital innovation. With years of experience in the industry, we've established ourselves as leaders in providing high-quality technical solutions.
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Floating Stats Bar - The "Green" pill from reference, now Brown */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative z-20 max-w-4xl mx-auto -mb-16"
                            >
                                <div className="bg-gradient-to-r from-[#6A3914] to-[#3E2723] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 flex flex-wrap justify-between items-center gap-8 md:gap-4 text-center">
                                    {values.map((value, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-3 min-w-[120px] flex-1">
                                            <div className="p-3 bg-white/10 rounded-full text-vedic-saffron">
                                                <value.icon size={28} />
                                            </div>
                                            <span className="text-white font-medium tracking-wide">{value.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* White/Cream Content Card */}
                            <div className="bg-[#FFF9F3] rounded-[3rem] pt-32 pb-20 px-8 md:px-20 relative z-10 text-vedic-black">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 relative">
                                    {/* Vertical Divider */}
                                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-vedic-brown/10 -translate-x-1/2"></div>

                                    {/* Vision */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="text-center md:text-left"
                                    >
                                        <div className="flex flex-col items-center md:items-start gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-vedic-saffron/10 flex items-center justify-center text-vedic-saffron">
                                                <Target size={24} />
                                            </div>
                                            <h3 className="text-3xl font-serif font-bold text-[#6A3914]">Our Vision</h3>
                                        </div>
                                        <p className="text-vedic-black/70 text-lg leading-relaxed">
                                            To lead the way in digital transformation by delivering innovative, sustainable, and scalable solutions that bridge the gap between ancient wisdom and modern technology.
                                        </p>
                                    </motion.div>

                                    {/* Mission */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="text-center md:text-left"
                                    >
                                        <div className="flex flex-col items-center md:items-start gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-vedic-saffron/10 flex items-center justify-center text-vedic-saffron">
                                                <Rocket size={24} />
                                            </div>
                                            <h3 className="text-3xl font-serif font-bold text-[#6A3914]">Our Mission</h3>
                                        </div>
                                        <p className="text-vedic-black/70 text-lg leading-relaxed">
                                            To leverage our expertise, resources, and passion to manufacture digital products that exceed industry standards and empower businesses to reach their full potential.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Bottom Button */}
                                <div className="text-center mt-20">
                                    <button className="bg-[#0F5A48] hover:bg-[#0A4033] text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg">
                                        Know More About Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Journey Section - Winding Road Redesign - Cream Background */}
                <section className="py-32 px-4 overflow-hidden text-center bg-[#FFF9F3]">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-24"
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-vedic-black leading-tight mb-6">
                                Company Journey
                            </h2>
                            <p className="text-xl text-vedic-black/60 max-w-2xl mx-auto">
                                From 2015 to Today: A path of constant innovation
                            </p>
                        </motion.div>

                        {/* Desktop Winding Road Visualization */}
                        <div className="hidden lg:block relative h-[700px] w-full max-w-6xl mx-auto select-none">
                            {/* SVG Road Path */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1100 600" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4E2C11" />
                                        <stop offset="50%" stopColor="#6A3914" />
                                        <stop offset="100%" stopColor="#4E2C11" />
                                    </linearGradient>
                                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="black" floodOpacity="0.2" />
                                    </filter>
                                </defs>

                                {/* The Road Shadows/Border */}
                                <path
                                    d="M -50 550 C 300 550, 400 300, 600 350 S 900 450, 1150 100"
                                    fill="none"
                                    stroke="#E8DCC4"
                                    strokeWidth="140"
                                    opacity="0.5"
                                    filter="url(#shadow)"
                                />

                                {/* The Road Surface */}
                                <path
                                    d="M -50 550 C 300 550, 400 300, 600 350 S 900 450, 1150 100"
                                    fill="none"
                                    stroke="url(#roadGradient)"
                                    strokeWidth="120"
                                    strokeLinecap="round"
                                />

                                {/* Center Dashed Line */}
                                <path
                                    d="M -50 550 C 300 550, 400 300, 600 350 S 900 450, 1150 100"
                                    fill="none"
                                    stroke="#FDFBF7"
                                    strokeWidth="4"
                                    strokeDasharray="20 20"
                                    strokeOpacity="0.6"
                                    className="animate-dash"
                                />
                            </svg>


                            {/* Milestones positioned absolutely along the path */}
                            {/* 2015: Start/Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="absolute left-[5%] bottom-[15%] w-72 text-left"
                            >
                                <div className="absolute left-1/2 bottom-[-40px] h-[100px] w-1 bg-[#6A3914]/20">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-vedic-saffron"></div>
                                </div>
                                <div className="bg-[#FFF9F3]/80 backdrop-blur-md p-6 rounded-2xl border border-[#6A3914]/10 hover:border-vedic-saffron transition-colors cursor-pointer group shadow-lg">
                                    <h3 className="text-4xl font-bold text-vedic-saffron mb-2">2015</h3>
                                    <h4 className="text-lg font-semibold text-[#6A3914] mb-2">{timeline[0].title}</h4>
                                    <p className="text-sm text-[#6A3914]/70">{timeline[0].description}</p>
                                </div>
                            </motion.div>

                            {/* 2018: First Curve */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute left-[35%] top-[55%] w-72 text-left"
                            >
                                <div className="absolute left-1/2 top-full h-[60px] w-1 bg-[#6A3914]/20">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-vedic-saffron"></div>
                                </div>
                                <div className="bg-[#FFF9F3]/80 backdrop-blur-md p-6 rounded-2xl border border-[#6A3914]/10 hover:border-vedic-saffron transition-colors cursor-pointer group shadow-lg">
                                    <h3 className="text-4xl font-bold text-vedic-saffron mb-2">2018</h3>
                                    <h4 className="text-lg font-semibold text-[#6A3914] mb-2">{timeline[1].title}</h4>
                                    <p className="text-sm text-[#6A3914]/70">{timeline[1].description}</p>
                                </div>
                            </motion.div>

                            {/* 2020: Second Curve - Higher up */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="absolute left-[60%] top-[25%] w-72 text-left"
                            >
                                <div className="absolute left-1/2 top-full h-[100px] w-1 bg-[#6A3914]/20">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-vedic-saffron"></div>
                                </div>
                                <div className="bg-[#FFF9F3]/80 backdrop-blur-md p-6 rounded-2xl border border-[#6A3914]/10 hover:border-vedic-saffron transition-colors cursor-pointer group shadow-lg">
                                    <h3 className="text-4xl font-bold text-vedic-saffron mb-2">2020</h3>
                                    <h4 className="text-lg font-semibold text-[#6A3914] mb-2">{timeline[2].title}</h4>
                                    <p className="text-sm text-[#6A3914]/70">{timeline[2].description}</p>
                                </div>
                            </motion.div>

                            {/* 2024: End/Top Right */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="absolute right-[5%] top-[5%] w-72 text-left"
                            >
                                <div className="absolute left-1/2 top-full h-[80px] w-1 bg-[#6A3914]/20">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-vedic-saffron"></div>
                                </div>
                                <div className="bg-[#FFF9F3]/80 backdrop-blur-md p-6 rounded-2xl border border-[#6A3914]/10 hover:border-vedic-saffron transition-colors cursor-pointer group shadow-lg">
                                    <h3 className="text-4xl font-bold text-vedic-saffron mb-2">2024</h3>
                                    <h4 className="text-lg font-semibold text-[#6A3914] mb-2">{timeline[3].title}</h4>
                                    <p className="text-sm text-[#6A3914]/70">{timeline[3].description}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Mobile Vertical Timeline (Fallback) */}
                        <div className="lg:hidden relative border-l-2 border-dashed border-vedic-saffron/30 ml-8 space-y-12">
                            {timeline.map((item, index) => (
                                <div key={item.year} className="relative pl-12 text-left">
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-vedic-saffron"></div>
                                    <div className="bg-[#6A3914] backdrop-blur-md p-6 rounded-2xl border border-vedic-black/5 shadow-xl">
                                        <span className="text-3xl font-bold text-vedic-saffron block mb-2">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-white/80">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Story - Redesigned Stacked Cards - Brown Background */}
                <section className="py-32 px-4 relative bg-[#6A3914]">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Our Story</h2>
                            <p className="text-xl text-white/60">The chapters that define who we are</p>
                        </motion.div>

                        <div className="relative isolate px-4 md:px-0 space-y-[-120px] pb-32">
                            {/* Card 1: The Vision (Dark Brown) */}
                            <motion.div
                                onMouseEnter={() => setHoveredCard('vision')}
                                onMouseLeave={() => setHoveredCard(null)}
                                initial={{ opacity: 0, y: 50, rotate: -2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                                animate={{
                                    y: hoveredCard === 'vision' ? -60 : (hoveredCard ? 20 : 0),
                                    rotate: hoveredCard === 'vision' ? 0 : (hoveredCard ? -1 : -2),
                                    scale: hoveredCard === 'vision' ? 1.05 : (hoveredCard ? 0.95 : 1),
                                    opacity: hoveredCard && hoveredCard !== 'vision' ? 0.6 : 1,
                                    filter: hoveredCard && hoveredCard !== 'vision' ? 'blur(2px)' : 'blur(0px)'
                                }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{ zIndex: hoveredCard === 'vision' ? 50 : 10 }}
                                className="relative bg-[#3E2723] rounded-[2.5rem] p-10 md:p-14 border border-white/5 shadow-2xl transform origin-bottom-left transition-all"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-vedic-saffron rounded-full opacity-20 blur-2xl"></div>
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="bg-white/10 p-4 rounded-2xl text-vedic-saffron">
                                        <Sparkles size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-serif font-bold text-white mb-4">The Vision</h3>
                                        <p className="text-lg text-[#E8DCC4] leading-relaxed">
                                            Tech Vriksha was born from a vision to combine the depth of Vedic wisdom with the power of modern technology.
                                            Founded by Apeksha and Pranav, we set out to create digital solutions that not only solve problems but
                                            also inspire and elevate.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: The Meaning (Saffron) */}
                            <motion.div
                                onMouseEnter={() => setHoveredCard('meaning')}
                                onMouseLeave={() => setHoveredCard(null)}
                                initial={{ opacity: 0, y: 50, rotate: 2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                                animate={{
                                    y: hoveredCard === 'meaning' ? -60 : (hoveredCard ? 20 : 0),
                                    rotate: hoveredCard === 'meaning' ? 0 : (hoveredCard ? 1 : 2),
                                    scale: hoveredCard === 'meaning' ? 1.05 : (hoveredCard ? 0.95 : 1),
                                    opacity: hoveredCard && hoveredCard !== 'meaning' ? 0.6 : 1,
                                    filter: hoveredCard && hoveredCard !== 'meaning' ? 'blur(2px)' : 'blur(0px)'
                                }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{ zIndex: hoveredCard === 'meaning' ? 50 : 20 }}
                                className="relative bg-[#FD7503] rounded-[2.5rem] p-10 md:p-14 shadow-2xl transform origin-bottom-right transition-all"
                            >
                                <div className="absolute -left-4 -top-4 w-24 h-24 bg-white rounded-full opacity-20 blur-2xl"></div>
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="bg-white/20 p-4 rounded-2xl text-white">
                                        <Heart size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-serif font-bold text-white mb-4">The Meaning</h3>
                                        <p className="text-lg text-white/90 leading-relaxed font-medium">
                                            The name "Vriksha", meaning tree, represents our belief in building strong foundations.
                                            Just as a tree grows from deep roots to reach great heights, we build applications on solid principles that
                                            scale and thrive over time.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: The Impact (Cream) */}
                            <motion.div
                                onMouseEnter={() => setHoveredCard('impact')}
                                onMouseLeave={() => setHoveredCard(null)}
                                initial={{ opacity: 0, y: 50, rotate: -1 }}
                                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                                animate={{
                                    y: hoveredCard === 'impact' ? -60 : (hoveredCard ? 20 : 0),
                                    rotate: hoveredCard === 'impact' ? 0 : (hoveredCard ? -0.5 : -1),
                                    scale: hoveredCard === 'impact' ? 1.05 : (hoveredCard ? 0.95 : 1),
                                    opacity: hoveredCard && hoveredCard !== 'impact' ? 0.6 : 1,
                                    filter: hoveredCard && hoveredCard !== 'impact' ? 'blur(2px)' : 'blur(0px)'
                                }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{ zIndex: hoveredCard === 'impact' ? 50 : 30 }}
                                className="relative bg-[#FFF9F3] rounded-[2.5rem] p-10 md:p-14 shadow-2xl transform origin-center transition-all"
                            >
                                <div className="absolute right-10 bottom-10 w-32 h-32 bg-vedic-saffron rounded-full opacity-10 blur-3xl"></div>
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="bg-[#6A3914]/10 p-4 rounded-2xl text-[#6A3914]">
                                        <Target size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-serif font-bold text-[#6A3914] mb-4">The Impact</h3>
                                        <p className="text-lg text-[#3E2723]/80 leading-relaxed">
                                            Today, we're proud to have worked with clients across the globe, from innovative startups to established
                                            enterprises. Our commitment to excellence continues to set us apart in the digital landscape.
                                        </p>
                                        <div className="mt-8">
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center gap-2 text-[#FD7503] font-bold hover:gap-4 transition-all uppercase tracking-wider text-sm"
                                            >
                                                <span>Join Our Journey</span>
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
};

export default About;
