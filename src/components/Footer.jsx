import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';

const Footer = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    // Theme Colors
    const theme = {
        bg: isAboutPage ? 'bg-[#FFF9F3]' : 'bg-[#6A3914]',
        text: isAboutPage ? 'text-[#6A3914]' : 'text-[#FFF9F3]',
        textMuted: isAboutPage ? 'text-[#6A3914]/80' : 'text-[#FFF9F3]/80',
        textFaint: isAboutPage ? 'text-[#6A3914]/40' : 'text-[#FFF9F3]/40',
        border: isAboutPage ? 'border-[#6A3914]/10' : 'border-[#FFF9F3]/10',
        inputBorder: isAboutPage ? 'border-[#6A3914]/30' : 'border-[#FFF9F3]/30',
        placeholder: isAboutPage ? 'placeholder-[#6A3914]/50' : 'placeholder-[#FFF9F3]/50',
        logoFilter: isAboutPage ? '' : 'brightness-0 invert',
        button: isAboutPage
            ? 'bg-[#6A3914] text-[#FFF9F3] hover:bg-[#FD7503] hover:text-white'
            : 'bg-[#FFF9F3] text-[#6A3914] hover:bg-[#FD7503] hover:text-white',
        socialBorder: isAboutPage ? 'border-[#6A3914]/30 hover:bg-[#6A3914] hover:text-[#FFF9F3]' : 'border-[#FFF9F3]/30 hover:bg-[#FFF9F3] hover:text-[#6A3914]'
    };

    return (
        <footer className="relative mt-24">
            {/* Top Image Grid (Optional - mimicks reference 'Instagram' strip) */}
            {/* Keeping it clean for now, or we could add a subtle pattern strip */}

            {/* Tree Silhouette Top Edge */}
            {/* This SVG sits *above* the footer background to create the 'cutout' look or 'pile of trees' look */}
            <div className="absolute top-[-40px] md:top-[-80px] left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
                <svg className="relative block w-full h-[50px] md:h-[100px]" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    {/* The path draws the 'sky' that covers the top of the brown box? 
                        Actually, it's easier to draw the 'Trees' pointing UP from the footer color. 
                        So fill should be #6A3914. */}
                    <path
                        d="M0,100 L0,40 Q10,50 20,40 T40,40 T60,50 T80,30 T100,50 T120,40 T140,50 T160,20 T180,50 T200,40 T220,60 T240,30 T260,50 T280,40 T300,50 T320,20 T340,50 T360,40 T380,60 T400,30 T420,50 T440,40 T460,50 T480,20 T500,50 T520,40 T540,60 T560,30 T580,50 T600,40 T620,50 T640,20 T660,50 T680,40 T700,60 T720,30 T740,50 T760,40 T780,50 T800,20 T820,50 T840,40 T860,60 T880,30 T900,50 T920,40 T940,50 T960,20 T980,50 T1000,40 T1020,60 T1040,30 T1060,50 T1080,40 T1100,50 T1120,20 T1140,50 T1160,40 T1180,60 L1200,40 L1200,100 Z"
                        fill="#6A3914"
                        transform="scale(1, 1.5)"
                        transform-origin="bottom"
                    />
                    {/* A simpler, cleaner tree-line silhouette path */}
                    <path
                        d="M0,100 L0,50 
                        C20,50 30,30 40,40 
                        C50,50 60,20 70,40
                        C80,30 90,60 100,40
                        C120,20 140,50 160,30
                        C180,60 200,40 220,50
                        C250,20 280,60 310,40
                        C340,20 370,50 400,30
                        C430,60 460,40 500,50
                        C550,10 600,60 650,30
                        C700,20 750,50 800,40
                        C850,20 900,60 950,40
                        C1000,30 1050,50 1100,30
                        C1150,60 1180,40 1200,50
                        L1200,100 Z"
                        fill="#6A3914"
                    />
                </svg>
            </div>

            <div className={`${theme.bg} ${theme.text} pt-12 pb-8 px-6 lg:px-12 transition-colors duration-300`}>
                <div className="max-w-7xl mx-auto">

                    {/* Main 3-Column Grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 border-b ${theme.border} pb-16`}>

                        {/* Col 1: Links (Left) - Span 3 */}
                        <div className="md:col-span-3 space-y-8 text-center md:text-left">
                            {/* Logo */}
                            <div className="flex justify-center md:justify-start mb-6">
                                <NavLink to="/" className="flex items-center gap-3 group">
                                    <img src={logo} alt="Tech Vriksha" className={`h-10 w-auto ${theme.logoFilter} group-hover:opacity-80 transition-opacity`} />
                                    <span className={`text-xl font-rozha tracking-wider ${theme.text}`}>TECH वृक्ष</span>
                                </NavLink>
                            </div>

                            <ul className="space-y-4 font-medium text-sm tracking-wide">
                                {['About Us', 'Services', 'Projects', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <NavLink
                                            to="#"
                                            className="hover:text-[#FD7503] transition-colors inline-block"
                                        >
                                            {item}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Social Icons */}
                            <div className="flex justify-center md:justify-start gap-4 pt-4">
                                <a href="#" className={`border ${theme.socialBorder} p-2 rounded-full transition-all`}>
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className={`border ${theme.socialBorder} p-2 rounded-full transition-all`}>
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Col 2: Newsletter (Center) - Span 6 */}
                        <div className={`md:col-span-6 text-center border-t md:border-t-0 md:border-l md:border-r ${theme.border} pt-12 md:pt-0 md:px-12`}>
                            <h3 className="font-serif text-3xl md:text-4xl mb-4">Get Updates</h3>
                            <p className={`${theme.textMuted} mb-8 italic text-sm`}>
                                Subscribe to our newsletter to receive updates<br className="hidden md:block" /> and special announcements.
                            </p>

                            <form className="space-y-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="*Email"
                                    className={`w-full bg-transparent border ${theme.inputBorder} px-4 py-3 text-sm focus:outline-none focus:border-[#FD7503] transition-colors ${theme.placeholder}`}
                                />
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="*First Name"
                                        className={`w-full bg-transparent border ${theme.inputBorder} px-4 py-3 text-sm focus:outline-none focus:border-[#FD7503] transition-colors ${theme.placeholder}`}
                                    />
                                    <button
                                        className={`${theme.button} px-6 py-3 text-xs font-bold tracking-wider transition-colors uppercase whitespace-nowrap`}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Col 3: Contact (Right) - Span 3 */}
                        <div className="md:col-span-3 text-center md:text-right space-y-8">
                            <div>
                                <a href="#" className="inline-flex items-center gap-2 hover:text-[#FD7503] transition-colors group font-medium mb-4">
                                    Send Us A Message
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <div className={`${theme.textMuted} text-sm space-y-1`}>
                                    <p className={`font-serif text-lg ${theme.text} mb-2`}>(+91) 9876-543-210</p>
                                    <p>123 Innovation Drive</p>
                                    <p>Mumbai, MH 400001</p>
                                </div>
                            </div>


                        </div>

                    </div>

                    {/* Bottom Utility Bar */}
                    <div className={`flex flex-col md:flex-row justify-between items-center text-xs ${theme.textFaint} gap-4`}>
                        <p>© {new Date().getFullYear()} Tech Vriksha. All Right Reserved</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-[#FD7503] transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-[#FD7503] transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
