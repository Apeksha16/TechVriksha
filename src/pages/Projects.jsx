import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        id: 1,
        title: "VedicAI Platform",
        category: "Web Application",
        description: "An AI-powered platform synthesizing ancient Vedic texts with modern search algorithms and natural language processing.",
        fullDescription: "VedicAI is a revolutionary platform that bridges the gap between ancient wisdom and modern technology. Using advanced NLP and machine learning, it provides intelligent search through thousands of Vedic texts, translations, and interpretations. The platform features real-time collaboration, multilingual support, and an intuitive interface that makes ancient knowledge accessible to everyone.",
        tags: ["React JS", "Node.js", "MongoDB", "TensorFlow", "Tailwind CSS", "Express.js"],
        features: [
            "AI-powered text analysis and translation",
            "Advanced search with semantic understanding",
            "Real-time collaboration features",
            "Multilingual support",
            "User authentication and personalized libraries",
            "API for third-party integrations"
        ],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Saffron eCommerce",
        category: "E-commerce Website",
        description: "A premium lifestyle eCommerce store focused on organic Indian products with advanced features and seamless user experience.",
        fullDescription: "Saffron eCommerce is a full-featured online marketplace specializing in premium Indian products. The platform offers a seamless shopping experience with custom cart functionality, multiple payment gateways, real-time inventory management, and a comprehensive admin dashboard. Built with performance and scalability in mind, it handles thousands of products and concurrent users effortlessly.",
        tags: ["React JS", "Next.js", "MongoDB", "Stripe", "Firebase", "SCSS"],
        features: [
            "Advanced product filtering and search",
            "Multiple payment gateway integration",
            "Real-time inventory management",
            "Wishlist and comparison features",
            "Order tracking and notifications",
            "Admin dashboard with analytics"
        ],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Yoga & Wellness Mobile App",
        category: "Mobile Application",
        description: "Cross-platform mobile application for yoga practitioners featuring video streaming, progress tracking, and community challenges.",
        fullDescription: "A comprehensive wellness mobile app that combines yoga practice, meditation, and community features. The app offers HD video streaming, personalized workout plans, progress tracking with detailed analytics, and a vibrant community where users can participate in challenges and share achievements. Built with React Native for seamless iOS and Android experience.",
        tags: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB", "Video Streaming"],
        features: [
            "HD video streaming and offline downloads",
            "Personalized workout and meditation plans",
            "Progress tracking with detailed analytics",
            "Social community and challenges",
            "Push notifications and reminders",
            "In-app purchases and subscriptions"
        ],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "FinTech Analytics Dashboard",
        category: "Web Application",
        description: "Real-time financial analytics dashboard for corporate clients with high-performance data visualization and advanced reporting.",
        fullDescription: "A powerful financial analytics platform designed for enterprise clients. The dashboard provides real-time market data, advanced charting capabilities using D3.js, customizable reports, and predictive analytics. With robust security features and role-based access control, it's trusted by financial institutions for critical decision-making.",
        tags: ["React JS", "D3.js", "Express.js", "MongoDB", "WebSocket", "Bootstrap"],
        features: [
            "Real-time data visualization and charts",
            "Customizable dashboards and widgets",
            "Advanced filtering and date range selection",
            "Export reports in multiple formats",
            "Role-based access control",
            "API for data integration"
        ],
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "Heritage Travel Guide",
        category: "Mobile Application",
        description: "Interactive travel guide for historical sites in India, featuring AR experiences, guided audio tours, and immersive cultural content.",
        fullDescription: "An innovative travel companion app that brings India's rich heritage to life through augmented reality and immersive storytelling. Users can explore historical monuments with AR overlays, listen to guided audio tours in multiple languages, discover local culture, and plan their heritage tours with detailed itineraries. The app uses location-based services and ARCore technology for an unparalleled experience.",
        tags: ["React Native", "ARCore", "Google Maps API", "Node.js", "MongoDB", "Firebase"],
        features: [
            "Augmented Reality monument exploration",
            "Multi-language audio guides",
            "Interactive maps with location tracking",
            "Cultural content and historical facts",
            "Tour planning and itinerary builder",
            "Social sharing and reviews"
        ],
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <div className="bg-[#FAF9F6] min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-vedic-saffron tracking-widest uppercase font-semibold text-sm sanskrit-text">
                        Our Masterpieces
                    </span>
                    <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-vedic-black sanskrit-accent">
                        Featured Projects
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-vedic-brown/70 max-w-3xl mx-auto leading-relaxed">
                        A curated selection of our top 5 projects where technology meets artisan precision and innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-br from-vedic-saffron/10 to-vedic-gold/5 rounded-3xl p-8 md:p-12 vedic-card">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-vedic-black mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-vedic-brown/70 mb-6 max-w-2xl mx-auto">
                            Let's create something extraordinary together. Our team is ready to bring your vision to life with cutting-edge technology and timeless design.
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-vedic-black text-white rounded-full font-semibold hover:bg-vedic-saffron transition-colors vedic-button premium-glow-hover"
                        >
                            Get Started Today
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
