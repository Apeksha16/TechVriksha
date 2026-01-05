import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Specializations from '../components/Specializations';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import OurPromise from '../components/OurPromise';

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

            {/* Our Promise Section */}
            <OurPromise />

            {/* Testimonials Section */}
            <Testimonials />

        </>
    );
};

export default Home;
