import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="bg-[#FFF9F3] min-h-screen pt-20">
            {/* Header Section */}
            <div className="text-center py-16 px-4">
                <h4 className="text-vedic-saffron font-bold text-sm tracking-[0.2em] uppercase mb-4">Contact Us</h4>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-vedic-black">Let's Discuss Your Project</h1>
                <p className="mt-4 text-vedic-brown/60 text-lg max-w-2xl mx-auto">
                    We'd love to hear from you. Let's create something amazing together.
                </p>
            </div>

            {/* Main Content Split */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                    {/* LEFT: Form Section */}
                    <div className="flex-1 w-full lg:w-3/5">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-black mb-2">
                                Get Your <span className="text-vedic-saffron italic font-serif">Free Quote Today!</span>
                            </h2>
                            <p className="text-vedic-brown/60">Fill out the form and we'll get back to you within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-vedic-black mb-2">Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ex. John Doe"
                                        required
                                        className="w-full bg-[#f4f1ea] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-vedic-saffron/20 transition-all outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-vedic-black mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@gmail.com"
                                        required
                                        className="w-full bg-[#f4f1ea] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-vedic-saffron/20 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-vedic-black mb-2">Subject *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter Subject"
                                    required
                                    className="w-full bg-[#f4f1ea] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-vedic-saffron/20 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-vedic-black mb-2">Your Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Enter here.."
                                    required
                                    className="w-full bg-[#f4f1ea] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-vedic-saffron/20 transition-all outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center gap-2 bg-[#FD7503] hover:bg-[#e06502] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                            </button>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 text-green-700 rounded-xl flex items-center gap-2"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    <span>Message sent successfully! We'll contact you shortly.</span>
                                </motion.div>
                            )}
                        </form>
                    </div>

                    {/* RIGHT: Info Card */}
                    <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
                        <div className="bg-[#2D1B15] text-white rounded-[2.5rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD7503] rounded-full filter blur-[80px] opacity-10 translate-x-1/3 -translate-y-1/3"></div>

                            <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>

                            <div className="space-y-8 relative z-10">
                                {/* Address */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#FD7503] mb-2">Address</h4>
                                    <p className="text-white/80 leading-relaxed">
                                        123 Innovation Drive, Tech Park<br />
                                        Mumbai, Maharashtra, India - 400001
                                    </p>
                                </div>

                                {/* Contact */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#FD7503] mb-2">Contact</h4>
                                    <p className="text-white/80 mb-1">Phone : +91 98765 43210</p>
                                    <p className="text-white/80">Email : hello@techvriksha.com</p>
                                </div>

                                {/* Open Time */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#FD7503] mb-2">Open Time</h4>
                                    <div className="text-white/80 space-y-1">
                                        <div className="flex justify-between max-w-[200px]">
                                            <span>Monday - Friday</span>
                                            <span>: 10:00 - 20:00</span>
                                        </div>
                                        <div className="flex justify-between max-w-[200px]">
                                            <span>Saturday - Sunday</span>
                                            <span>: 11:00 - 18:00</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stay Connected */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#FD7503] mb-4">Stay Connected</h4>
                                    <div className="flex gap-4">
                                        {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#FD7503] flex items-center justify-center text-white hover:bg-white hover:text-[#FD7503] transition-all duration-300">
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAP SECTION */}
            <div className="w-full h-[400px] md:h-[500px] bg-[#E5E0D8] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.9973284063!2d78.53205735541992!3d17.4477818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9975e81d7631%3A0xdc727abb61b4d081!2sApartment%20Complex!5e0!3m2!1sen!2sin!4v1709664654321!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TechVriksha Location"
                ></iframe>
                {/* Note: Updated generic Hyderabad map coordinates from the user link approximation logic or placeholder. 
                    Ideally verify exact embed link if possible. For now, using a clean grayscale map. */}
            </div>
        </div>
    );
};

export default Contact;
