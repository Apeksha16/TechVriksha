import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/Logo.png';

const MagneticLink = ({ children, to, isActive, onClick }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative"
        >
            <NavLink
                to={to}
                onClick={onClick}
                className={`relative px-4 py-2 text-sm font-medium transition-colors z-10 block ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
                {/* Active Indicator Pill */}
                {isActive && (
                    <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                {/* Hover Effect */}
                <span className="relative z-10">{children}</span>
            </NavLink>
        </motion.div>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Transform values for the "Island" effect
    const navWidth = useTransform(scrollY, [0, 100], ['100%', '85%']); // Desktop only
    const navTop = useTransform(scrollY, [0, 100], ['0px', '20px']);
    const navBorderRadius = useTransform(scrollY, [0, 100], ['0px', '50px']); // Rounded capsule on scroll

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    // Close mobile menu when route changes
    useEffect(() => setIsOpen(false), [location]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
    ];

    return (
        <>
            {/* Desktop Navbar - Animated Island */}
            <motion.nav
                style={{
                    width: window.innerWidth > 768 ? navWidth : '100%', // Simple check, rely on CSS media queries ideally but motion needs values
                    top: window.innerWidth > 768 ? navTop : 0,
                    borderRadius: window.innerWidth > 768 ? navBorderRadius : 0,
                    left: '50%',
                    x: '-50%'
                }}
                className={`fixed z-50 bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-300
                    ${isScrolled ? 'max-w-5xl' : 'max-w-7xl'}
                    ${window.innerWidth <= 768 ? '!w-full !top-0 !left-0 !translate-x-0 !rounded-none border-b border-white/10' : ''}
                `}
            >
                <div className="px-6 md:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <NavLink to="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                            >
                                <img src={logo} alt="Logo" className="w-6 h-6 object-contain brightness-0 invert" />
                            </motion.div>
                            <span className="text-xl font-rozha tracking-wide text-white group-hover:text-blue-400 transition-colors">
                                TECH वृक्ष
                            </span>
                        </NavLink>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-2">
                            {links.map((link) => (
                                <MagneticLink key={link.name} to={link.path} isActive={location.pathname === link.path}>
                                    {link.name}
                                </MagneticLink>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <NavLink
                                to="/contact"
                                className="relative group overflow-hidden pl-6 pr-8 py-2.5 rounded-full bg-white text-slate-900 font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Project
                                    <Rocket size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </NavLink>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 md:hidden text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0F172A] pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {links.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block text-3xl font-serif font-bold ${isActive ? 'text-blue-500' : 'text-slate-400'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <div className="h-px bg-white/10 my-4" />
                            <NavLink
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-blue-600 rounded-xl text-center text-white font-bold text-lg"
                            >
                                Let's Talk
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
