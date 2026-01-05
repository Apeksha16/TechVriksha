import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Lightbulb, Globe, Laptop, Code2,
    Mouse, Clock, Link as LinkIcon, ArrowRight,
    Share2, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import finovaImage from '../assets/finova-project2.png';
import miraImage from '../assets/mira-project1.webp';
import rasoiwareImage from '../assets/rasoiware-project3.png';
import svasthaImage from '../assets/Svastha-project4.png';

const FeaturedProjects = () => {
    // Split projects into two arrays for the two rows
    const allProjects = [
        {
            id: 1,
            title: "Finova Financial Clarity",
            highlight: "Financial",
            icon: Globe,
            isDark: false, // Light Card
            description: "Finova is a unified financial dashboard designed specifically for small Indian businesses managing online sales, expenses, and cash flow without requiring accounting expertise.",
            image: finovaImage,
            link: "https://www.behance.net/gallery/239404941/Finova-Financial-Clarity-for-SMBs"
        },
        {
            id: 2,
            title: "Mira Smart Home App",
            highlight: "Smart Home",
            icon: Share2,
            isDark: true, // Dark Card
            description: "A complete UI overhaul for a smart home app, resolving critical usability issues and modernizing the outdated dark theme for a cohesive experience.",
            image: miraImage,
            link: "https://manavuix.framer.website/work/mira"
        },
        {
            id: 3,
            title: "Rasoiware E-Commerce",
            highlight: "E-Commerce",
            icon: Code2,
            isDark: false, // Light Card
            description: "Rasoiware is a modern e-commerce platform designed for a home décor and kitchenware brand that promotes Make in India products, providing a seamless online shopping experience.",
            image: rasoiwareImage,
            link: "https://rasoiwaree.vercel.app/"
        },
        {
            id: 4,
            title: "Svastha Fitness App",
            highlight: "Fitness",
            icon: ShieldCheck,
            isDark: true, // Dark Card
            description: "Introducing a mobile application designed for fitness and workout routines that aids users on selecting the best training regimen for their requirement and tailored to their needs.",
            image: svasthaImage,
            link: "https://www.behance.net/gallery/187407025/Svastha-UIUX-case-study?tracking_source=project_owner_other_projects"
        },
        {
            id: 5,
            title: "Track the number of Clicks",
            highlight: "Clicks",
            icon: Mouse,
            isDark: false, // Light Card
            description: "Comprehensive analytics dashboard providing real-time insights into user engagement and click-through rates."
        },
        {
            id: 6,
            title: "Projects Never Expire",
            highlight: "Never Expire",
            icon: ShieldCheck,
            isDark: true, // Dark Card
            description: "Lifetime hosting and support ensuring your digital assets remain accessible and functional indefinitely."
        }
    ];

    const row1 = allProjects.slice(0, 3);
    const row2 = allProjects.slice(3, 6);

    const ExpandableRow = ({ projects, rowIndex }) => {
        const [hoveredId, setHoveredId] = useState(null);
        // We can just rely on CSS for layout shifts (column -> row)
        // For the accordion effect:
        // On Mobile: It will just be a stack of cards. We can disable the "flex" animation or just let it be.
        // If parent height is auto, flex-grow doesn't drive height in column mode nicely without simple stacking.

        return (
            <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[500px]">
                {projects.map((project, idx) => {
                    const isHovered = hoveredId === project.id;
                    const isSomeoneHovered = hoveredId !== null;

                    // Colors
                    const bgColor = project.isDark ? 'bg-[#6D5446]' : 'bg-white';
                    const textColor = project.isDark ? 'text-white' : 'text-vedic-black';
                    const iconColor = project.isDark ? 'text-white' : 'text-[#FB9D36]';
                    const iconBg = project.isDark ? 'bg-[#564138]' : 'bg-[#FBE9D8]';

                    return (
                        <motion.div
                            key={project.id}
                            onHoverStart={() => setHoveredId(project.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            layout
                            className={`relative rounded-[2.5rem] overflow-hidden ${bgColor} ${textColor} shadow-xl cursor-pointer
                                min-h-[400px] md:min-h-0
                            `}
                            animate={{
                                flex: isHovered ? 3 : 1,
                                opacity: isSomeoneHovered && !isHovered ? 0.7 : 1
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        // On mobile this "flex" animation might be weird if height is auto.
                        // But since we set min-h-[400px], they will just stack. 
                        // Flex-grow on column with auto-height parent doesn't collapse them.
                        // So effectively this animation only works visibly on MD where parent is fixed h-500 & row.
                        >
                            <div className="relative h-full w-full p-8 flex flex-col">
                                {/* Top Content (Always Visible) */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl ${iconBg}`}>
                                        <project.icon className={`w-8 h-8 ${iconColor}`} />
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${project.isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                                        <ArrowRight className={`w-5 h-5 ${textColor}`} />
                                    </div>
                                </div>

                                <motion.div layout="position" className="mt-auto relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold font-serif leading-none mb-2 break-words">
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm font-medium uppercase tracking-wider mb-4 ${project.isDark ? 'text-[#FB9D36]' : 'text-vedic-brown/60'}`}>
                                        {project.highlight}
                                    </p>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {(isHovered || window.innerWidth < 768) && ( // Optional: Always show description on mobile? Or keep expand interaction?
                                            // Let's keep hover/click interaction even on mobile for consistency, or users can tap.
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-sm md:text-base opacity-80 mb-6 max-w-lg">
                                                    {project.description}
                                                </p>
                                                <div className="w-full h-40 bg-gradient-to-br from-vedic-saffron/10 to-vedic-brown/10 rounded-xl mb-4 overflow-hidden relative group-hover:shadow-inner">
                                                    {project.image ? (
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full">
                                                            <div className="text-center opacity-50">
                                                                <project.icon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                                                <span className="text-xs uppercase tracking-widest">Project Preview</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* View Button */}
                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-bold uppercase tracking-wider hover:underline">
                                                        View Case Study &rarr;
                                                    </a>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        );
    };

    return (
        <section className="py-20 md:py-32 bg-[#FFF9F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-vedic-black mb-4">
                        Top Projects
                    </h2>
                    <p className="text-lg text-vedic-black/60 max-w-2xl mx-auto">
                        Hover over cards to explore our finest work and case studies
                    </p>
                </div>

                {/* Rows */}
                <div className="space-y-6">
                    <ExpandableRow projects={row1} rowIndex={0} />
                    <ExpandableRow projects={row2} rowIndex={1} />
                </div>

                {/* View All Button */}
                <div className="text-center mt-16">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-vedic-black text-white rounded-full font-bold hover:bg-[#FB9D36] transition-all duration-300 group shadow-xl hover:shadow-2xl"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
