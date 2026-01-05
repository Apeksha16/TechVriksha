import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Eye } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                    default: { delay: index * 0.1, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
                    hover: { duration: 0.2 }
                }}
                whileHover={{ y: -12 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => setIsExpanded(true)}
                className="group relative vedic-card-modern overflow-hidden cursor-pointer h-full"
            >
                {/* Image Container */}
                <div className="aspect-video bg-gradient-to-br from-vedic-brown/20 to-vedic-black/20 relative overflow-hidden">
                    {project.image ? (
                        <motion.img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-vedic-saffron/15 via-vedic-gold/15 to-vedic-brown/15 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.span 
                                    className="text-7xl font-sanskrit text-vedic-saffron/20"
                                    animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 5 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {(index + 1)}
                                </motion.span>
                            </div>
                            <div className="absolute inset-0 bg-vedic-pattern opacity-20" />
                        </div>
                    )}
                    
                    {/* Overlay Gradient */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-vedic-black/90 via-vedic-black/40 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0.3 }}
                        transition={{ duration: 0.2 }}
                    />
                    
                    {/* Hover Actions */}
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 bg-vedic-saffron text-white rounded-full premium-glow shadow-xl"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (project.link) window.open(project.link, '_blank');
                            }}
                        >
                            <Eye size={22} />
                        </motion.button>
                        {project.github && (
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 bg-white/90 backdrop-blur-sm text-vedic-black rounded-full shadow-xl"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.github, '_blank');
                                }}
                            >
                                <Github size={22} />
                            </motion.button>
                        )}
                    </motion.div>

                    {/* Category Badge */}
                    {project.category && (
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-vedic-black text-xs font-semibold rounded-full">
                                {project.category}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-vedic-black group-hover:text-vedic-saffron transition-colors leading-tight">
                            {project.title}
                        </h3>
                        <motion.span 
                            className="text-xs px-2.5 py-1 bg-vedic-saffron/10 text-vedic-saffron rounded-full font-bold flex-shrink-0 ml-3"
                            whileHover={{ scale: 1.1 }}
                        >
                            #{index + 1}
                        </motion.span>
                    </div>
                    
                    <p className="text-sm md:text-base text-vedic-brown/70 mb-5 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                            <motion.span 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                className="text-xs px-3 py-1.5 bg-vedic-white border border-vedic-black/10 rounded-full text-vedic-black/70 font-medium"
                            >
                                {tag}
                            </motion.span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="text-xs px-3 py-1.5 bg-vedic-saffron/10 text-vedic-saffron rounded-full font-medium">
                                +{project.tags.length - 3}
                            </span>
                        )}
                    </div>
                    
                    {/* View Details */}
                    <div className="flex items-center text-vedic-saffron font-semibold text-sm group/arrow pt-2 border-t border-vedic-black/5">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/arrow:translate-x-1 transition-transform duration-200" />
                    </div>
                </div>

                {/* Hover Border Effect */}
                            <motion.div 
                                className="absolute inset-0 border-2 border-vedic-saffron/0 rounded-3xl pointer-events-none"
                                animate={{ borderColor: isHovered ? 'rgba(255, 153, 51, 0.3)' : 'rgba(255, 153, 51, 0)' }}
                                transition={{ duration: 0.2 }}
                            />
            </motion.div>

            {/* Expanded Modal - Enhanced */}
            <AnimatePresence>
                {isExpanded && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsExpanded(false)}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vedic-black/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="bg-vedic-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto vedic-card-modern relative shadow-2xl">
                                {/* Close button */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsExpanded(false)}
                                    className="absolute top-6 right-6 z-10 p-3 bg-vedic-black text-white rounded-full hover:bg-vedic-saffron transition-colors shadow-xl"
                                >
                                    <X size={24} />
                                </motion.button>

                                {/* Image */}
                                <div className="h-72 md:h-96 bg-gradient-to-br from-vedic-saffron/20 to-vedic-brown/20 relative overflow-hidden">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-9xl font-sanskrit text-vedic-saffron/30">{(index + 1)}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex-1">
                                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-vedic-black mb-3 leading-tight">
                                                {project.title}
                                            </h2>
                                            {project.category && (
                                                <span className="inline-block px-4 py-2 bg-vedic-saffron/10 text-vedic-saffron rounded-full text-sm font-semibold">
                                                    {project.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-lg md:text-xl text-vedic-brown/80 mb-8 leading-relaxed">
                                        {project.fullDescription || project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-serif font-bold text-vedic-black mb-4">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map((tag, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="text-sm px-4 py-2 bg-vedic-white border border-vedic-black/10 rounded-full text-vedic-black font-medium"
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    {project.features && (
                                        <div className="mb-8">
                                            <h3 className="text-xl font-serif font-bold text-vedic-black mb-4">Key Features</h3>
                                            <ul className="space-y-3">
                                                {project.features.map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="flex items-start text-vedic-brown/80 text-lg"
                                                    >
                                                        <span className="text-vedic-saffron mr-3 text-xl">•</span>
                                                        <span>{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex flex-wrap gap-4 pt-8 border-t border-vedic-black/10">
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-8 py-4 bg-vedic-black text-white rounded-full font-semibold flex items-center hover:bg-vedic-saffron transition-colors shadow-lg"
                                            >
                                                <ExternalLink className="mr-2 w-5 h-5" />
                                                Live Demo
                                            </motion.a>
                                        )}
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-8 py-4 bg-vedic-white border-2 border-vedic-black text-vedic-black rounded-full font-semibold flex items-center hover:bg-vedic-black hover:text-white transition-colors"
                                            >
                                                <Github className="mr-2 w-5 h-5" />
                                                View Code
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
