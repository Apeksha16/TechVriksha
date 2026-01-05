import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import finovaImage from '../assets/finova-project2.png';
import miraImage from '../assets/mira-project1.webp';
import rasoiwareImage from '../assets/rasoiware-project3.png';
import svasthaImage from '../assets/Svastha-project4.png';

const Projects = () => {
    const [activeId, setActiveId] = useState(null);

    const projects = [
        {
            id: '01',
            title: "Finova Dashboard",
            category: "Financial Tech",
            description: "Finova is a unified financial dashboard designed specifically for small Indian businesses managing online sales, expenses, and cash flow without requiring accounting expertise.",
            image: finovaImage,
            link: "https://www.behance.net/gallery/239404941/Finova-Financial-Clarity-for-SMBs"
        },
        {
            id: '02',
            title: "Mira Smart Home",
            category: "Mobile App Redesign",
            description: "A complete UI overhaul for a smart home app, resolving critical usability issues and modernizing the outdated dark theme for a cohesive experience.",
            image: miraImage,
            link: "https://manavuix.framer.website/work/mira"
        },
        {
            id: '03',
            title: "Rasoiware",
            category: "E-Commerce",
            description: "Rasoiware is a modern e-commerce platform designed for a home décor and kitchenware brand that promotes Make in India products. The website provides a seamless online shopping experience, allowing users to browse and purchase quality-checked essentials.",
            image: rasoiwareImage,
            link: "https://rasoiwaree.vercel.app/"
        },
        {
            id: '04',
            title: "Svastha Fitness",
            category: "Mobile App",
            description: "Introducing a mobile application designer for fitness and workout routines that aids users on selecting the best training regimen for their requirement and tailored to the user needs.",
            image: svasthaImage,
            link: "https://www.behance.net/gallery/187407025/Svastha-UIUX-case-study?tracking_source=project_owner_other_projects"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFF9F3] pt-20 px-4 md:px-8 pb-8 flex flex-col">
            {/* Page Header */}
            <div className="mb-8 pt-8 flex justify-between items-end">
                <div>
                    <h5 className="text-vedic-saffron font-bold text-sm tracking-widest uppercase mb-2">Our Work</h5>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-brown">Selected Projects</h1>
                </div>
                <div className="hidden md:block text-vedic-brown/60 text-sm max-w-xs text-right">
                    Explore our portfolio of digital solutions crafted with precision and purpose.
                </div>
            </div>

            {/* Accordion Container */}
            <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-0 overflow-hidden rounded-[2rem] bg-white shadow-2xl relative min-h-[1000px] md:min-h-0 h-auto">
                {projects.map((project) => (
                    <motion.a
                        key={project.id}
                        href={project.link || "#"}
                        target={project.link ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        onHoverStart={() => setActiveId(project.id)}
                        onHoverEnd={() => setActiveId(null)}
                        className={`relative flex-1 flex flex-col justify-between border-r last:border-r-0 border-vedic-brown/10 overflow-hidden cursor-pointer group transition-[flex] duration-700 ease-[cubic-bezier(0.32,0,0.67,0)]
                            ${activeId === project.id ? 'md:flex-[3]' : 'md:flex-1'}
                            min-h-[250px] md:min-h-0
                        `}
                    >
                        {/* Background Image */}
                        <div className={`absolute inset-0 bg-vedic-brown transition-opacity duration-500 z-0 
                            ${activeId === project.id ? 'opacity-100' : 'opacity-40 md:opacity-0'}
                        `}>
                            {/* Dark overlay for text readability */}
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>

                        {/* Hover Overlay Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 z-10 
                            ${activeId === project.id ? 'opacity-100' : 'opacity-60 md:opacity-0'}
                         `} />


                        {/* Content Container */}
                        <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-12">

                            {/* Number */}
                            <div className="flex justify-center md:block">
                                <span className={`text-6xl md:text-8xl font-light transition-colors duration-500 ${activeId === project.id ? 'text-white/20' : 'text-vedic-brown md:text-vedic-brown'
                                    } text-white/20 md:text-vedic-brown`}>
                                    {/* Mobile: default white/20 because BG is visible, Desktop: Brown unless active */}
                                    {project.id}
                                </span>
                            </div>

                            {/* Bottom Text */}
                            <div className="mt-auto">
                                <div className="flex justify-between items-end">
                                    <div className={`transition-transform duration-500 ${activeId === project.id ? 'translate-y-0' : 'translate-y-4'}`}>
                                        <h3 className={`text-2xl md:text-4xl font-serif font-bold mb-2 transition-colors duration-300 ${activeId === project.id ? 'text-white' : 'text-white md:text-vedic-brown'
                                            }`}>
                                            {project.title}
                                        </h3>
                                        <p className={`text-sm md:text-base transition-colors duration-300 ${activeId === project.id ? 'text-white/80' : 'text-white/60 md:text-vedic-brown/60'
                                            }`}>
                                            {project.category}
                                        </p>

                                        {/* Description (Only shows on expand/hover) */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === project.id ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                                            <p className="text-white/70 text-sm max-w-md">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${activeId === project.id
                                            ? 'bg-vedic-saffron border-vedic-saffron rotate-45'
                                            : 'border-white/20 md:border-vedic-brown/20 group-hover:border-vedic-brown'
                                        }`}>
                                        <ArrowUpRight className={`w-6 h-6 transition-colors duration-300 ${activeId === project.id ? 'text-white' : 'text-white md:text-vedic-brown'
                                            }`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
