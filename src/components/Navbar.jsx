import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Team', path: '/about' },
        { name: 'Projects', path: '/projects' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-vedic-saffron/10'
            : 'bg-transparent backdrop-blur-[2px]'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 flex items-center cursor-pointer"
                    >
                        <NavLink to="/" className="flex items-center gap-3">
                            <img className="h-14 w-auto drop-shadow-sm" src={logo} alt="Logo" />
                            <span className="text-3xl font-rozha tracking-wide text-vedic-black">
                                TECH वृक्ष
                            </span>
                        </NavLink>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {links.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-all duration-300 relative group py-2 ${isActive
                                            ? 'text-vedic-saffron'
                                            : 'text-vedic-black/80 hover:text-vedic-saffron'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className="relative z-10">{link.name}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navbar-indicator"
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-vedic-saffron rounded-full"
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vedic-saffron/50 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                                        </>
                                    )}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                className="ml-6 relative overflow-hidden bg-vedic-black text-white px-8 py-3 rounded-full font-serif font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <span className="relative z-10 group-hover:text-vedic-saffron transition-colors">Start Project</span>
                                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-vedic-black hover:text-vedic-saffron focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-vedic-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-80 bg-[#FAF9F6] shadow-2xl z-50 md:hidden overflow-y-auto"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-vedic-black/10">
                                <span className="text-2xl font-bold font-rozha text-vedic-black">
                                    TECH वृक्ष
                                </span>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-vedic-saffron/10 text-vedic-black"
                                >
                                    <X size={28} />
                                </motion.button>
                            </div>
                            <div className="px-6 pt-8 pb-6 space-y-4">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 + 0.1 }}
                                    >
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${isActive
                                                    ? 'text-vedic-saffron bg-vedic-saffron/5 border-l-4 border-vedic-saffron'
                                                    : 'text-vedic-black hover:text-vedic-saffron hover:bg-vedic-saffron/5'
                                                }`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: links.length * 0.05 + 0.1 }}
                                    className="pt-8"
                                >
                                    <NavLink
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-6 py-4 bg-vedic-black text-white rounded-xl font-serif text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all"
                                    >
                                        Start Project
                                    </NavLink>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
