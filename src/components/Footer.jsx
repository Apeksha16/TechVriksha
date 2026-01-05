import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-b from-vedic-black via-vedic-brown to-vedic-black text-vedic-white pt-16 pb-8 border-t border-vedic-saffron/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 vedic-pattern opacity-5" />
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 text-6xl text-vedic-saffron/10 font-sanskrit pointer-events-none select-none"
            >
                ॐ
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="Logo" className="h-10 w-auto brightness-0 invert" />
                            <span className="text-2xl font-serif font-bold tracking-wider text-vedic-saffron">
                                TECH VRIKSHA
                            </span>
                        </div>
                        <p className="text-vedic-white/70 text-sm leading-relaxed">
                            Weaving digital excellence with ancient wisdom. Specialize in Websites, Web Apps, and Mobile Applications crafted with precision and soul.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-vedic-saffron font-serif text-lg font-semibold mb-6">Explore</h3>
                        <ul className="space-y-3">
                            {['Home', 'Projects', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-vedic-white/70 hover:text-vedic-saffron transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform inline-block">
                                            {item}
                                        </span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-vedic-saffron font-serif text-lg font-semibold mb-6">Expertise</h3>
                        <ul className="space-y-3 text-sm text-vedic-white/70">
                            <li className="hover:text-vedic-saffron transition-colors cursor-pointer">Web Development</li>
                            <li className="hover:text-vedic-saffron transition-colors cursor-pointer">Mobile Applications</li>
                            <li className="hover:text-vedic-saffron transition-colors cursor-pointer">UI/UX Design</li>
                            <li className="hover:text-vedic-saffron transition-colors cursor-pointer">E-Commerce Solutions</li>
                            <li className="hover:text-vedic-saffron transition-colors cursor-pointer">Custom Software</li>
                            <li className="hover:text-vedic-saffron transition-colors cursor-pointer">Cloud Solutions</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-vedic-saffron font-serif text-lg font-semibold mb-6">Connect</h3>
                        <ul className="space-y-4 text-sm text-vedic-white/70">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-vedic-saffron mt-1 flex-shrink-0" />
                                <span>123 Innovation Drive,<br />Tech Park, Mumbai,<br />Maharashtra, India - 400001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-vedic-saffron flex-shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-vedic-saffron transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-vedic-saffron flex-shrink-0" />
                                <a href="mailto:hello@techvriksha.com" className="hover:text-vedic-saffron transition-colors">
                                    hello@techvriksha.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-vedic-white/50 hover:text-vedic-saffron transition-colors p-2 hover:bg-vedic-saffron/10 rounded-full"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-vedic-white/40 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Tech Vriksha. All rights reserved. |{' '}
                        <span className="hover:text-vedic-saffron cursor-pointer transition-colors">Privacy Policy</span> |{' '}
                        <span className="hover:text-vedic-saffron cursor-pointer transition-colors">Terms of Service</span>
                    </p>
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-4 md:mt-0 p-3 bg-vedic-saffron/20 hover:bg-vedic-saffron text-white rounded-full transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
