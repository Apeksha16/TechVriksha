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
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-vedic-black/10'
                : 'bg-white/80 backdrop-blur-sm border-b border-vedic-black/5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 flex items-center cursor-pointer"
                    >
                        <NavLink to="/" className="flex items-center">
                            <img className="h-12 w-auto" src={logo} alt="Logo" />
                            <span className="ml-3 text-xl font-bold font-serif tracking-wider text-vedic-black">
                                TECH VRIKSHA
                            </span>
                        </NavLink>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {links.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${isActive
                                            ? 'text-vedic-saffron font-bold'
                                            : 'text-vedic-black hover:text-vedic-saffron'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navbar-indicator"
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-vedic-saffron rounded-full"
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                className="ml-4 bg-vedic-saffron text-white px-6 py-2.5 rounded-lg hover:bg-vedic-saffron-dark transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                            >
                                Contact Us
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
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                            className="fixed inset-0 bg-vedic-black/50 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-80 bg-[#FAF9F6] shadow-2xl z-50 md:hidden overflow-y-auto"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-vedic-black/10">
                                <span className="text-xl font-bold font-serif text-vedic-black">
                                    Menu
                                </span>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-vedic-saffron/10 text-vedic-black"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>
                            <div className="px-4 pt-4 pb-6 space-y-2">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive
                                                    ? 'text-vedic-saffron bg-vedic-saffron/10 border-l-4 border-vedic-saffron'
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
                                    transition={{ delay: links.length * 0.05 }}
                                    className="pt-4"
                                >
                                    <NavLink
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-6 py-3 bg-gradient-vedic text-white rounded-xl font-semibold shadow-lg"
                                    >
                                        Get Started
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
