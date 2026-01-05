import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-vedic-black overflow-x-hidden selection:bg-vedic-saffron selection:text-white">
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
