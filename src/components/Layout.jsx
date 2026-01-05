import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-vedic-black overflow-x-hidden selection:bg-vedic-saffron selection:text-white relative">
            {/* Global Grain Texture (Multiply for Light Backgrounds) */}
            <div className="fixed inset-0 opacity-40 pointer-events-none mix-blend-multiply z-50"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
            {/* Global Grain Texture (Overlay for Dark Backgrounds) */}
            <div className="fixed inset-0 opacity-20 pointer-events-none mix-blend-overlay z-50"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow pt-20 relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
