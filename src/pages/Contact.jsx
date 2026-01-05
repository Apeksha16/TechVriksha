import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^[\d\s\-\+\(\)]+$/;
        return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: ''
            });
            
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="bg-[#FAF9F6] min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-vedic-saffron tracking-widest uppercase font-semibold text-sm sanskrit-text">
                        Get in Touch
                    </span>
                    <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-vedic-black sanskrit-accent">
                        Let's Create Something Timeless
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-vedic-brown/70 max-w-3xl mx-auto leading-relaxed">
                        Whether you have a project in mind or just want to explore the possibilities, we're here to guide you on your digital journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-vedic-black mb-6">
                                Connect With Us
                            </h2>
                            <p className="text-vedic-brown/70 text-lg leading-relaxed">
                                We're here to answer your questions and discuss how we can bring your digital vision to life. Reach out through any of these channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { 
                                    icon: MapPin, 
                                    title: "Our Studio", 
                                    text: "123 Innovation Drive, Tech Park", 
                                    subtext: "Mumbai, Maharashtra, India - 400001"
                                },
                                { 
                                    icon: Phone, 
                                    title: "Phone", 
                                    text: "+91 98765 43210",
                                    subtext: "Mon - Sat, 9:00 AM - 6:00 PM IST"
                                },
                                { 
                                    icon: Mail, 
                                    title: "Email", 
                                    text: "hello@techvriksha.com",
                                    subtext: "We respond within 24 hours"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-vedic-white/50 transition-colors"
                                >
                                    <div className="bg-gradient-vedic text-white p-3 rounded-xl shadow-lg flex-shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-semibold text-lg text-vedic-black mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-vedic-brown font-medium">{item.text}</p>
                                        {item.subtext && (
                                            <p className="text-vedic-brown/60 text-sm mt-1">{item.subtext}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-br from-vedic-saffron/10 to-vedic-gold/5 rounded-2xl p-6 vedic-card">
                            <h3 className="font-serif font-bold text-vedic-black mb-2">
                                Why Choose Us?
                            </h3>
                            <ul className="space-y-2 text-sm text-vedic-brown/80">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-vedic-saffron mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Quick response time (within 24 hours)</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-vedic-saffron mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Free initial consultation</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-vedic-saffron mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Transparent pricing and timelines</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="vedic-card p-8 md:p-10 relative"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.6 }}
                                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle size={40} className="text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-serif font-bold text-vedic-black mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-vedic-brown/70">
                                    We've received your message and will get back to you within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-vedic-black mb-6">
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-vedic-black mb-2">
                                                First Name <span className="text-vedic-saffron">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                    errors.firstName 
                                                        ? 'border-red-500' 
                                                        : 'border-vedic-black/20 focus:border-vedic-saffron'
                                                } focus:ring-2 focus:ring-vedic-saffron/20 outline-none transition-all bg-vedic-white`}
                                                placeholder="John"
                                            />
                                            {errors.firstName && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.firstName}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-vedic-black mb-2">
                                                Last Name <span className="text-vedic-saffron">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                    errors.lastName 
                                                        ? 'border-red-500' 
                                                        : 'border-vedic-black/20 focus:border-vedic-saffron'
                                                } focus:ring-2 focus:ring-vedic-saffron/20 outline-none transition-all bg-vedic-white`}
                                                placeholder="Doe"
                                            />
                                            {errors.lastName && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.lastName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-vedic-black mb-2">
                                                Email Address <span className="text-vedic-saffron">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                    errors.email 
                                                        ? 'border-red-500' 
                                                        : 'border-vedic-black/20 focus:border-vedic-saffron'
                                                } focus:ring-2 focus:ring-vedic-saffron/20 outline-none transition-all bg-vedic-white`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-vedic-black mb-2">
                                                Phone Number <span className="text-vedic-saffron">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                    errors.phone 
                                                        ? 'border-red-500' 
                                                        : 'border-vedic-black/20 focus:border-vedic-saffron'
                                                } focus:ring-2 focus:ring-vedic-saffron/20 outline-none transition-all bg-vedic-white`}
                                                placeholder="+91 98765 43210"
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-vedic-black mb-2">
                                            Company (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-vedic-black/20 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 outline-none transition-all bg-vedic-white"
                                            placeholder="Your Company Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-vedic-black mb-2">
                                            Subject <span className="text-vedic-saffron">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                errors.subject 
                                                    ? 'border-red-500' 
                                                    : 'border-vedic-black/20 focus:border-vedic-saffron'
                                            } focus:ring-2 focus:ring-vedic-saffron/20 outline-none transition-all bg-vedic-white`}
                                            placeholder="What can we help you with?"
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                                <AlertCircle size={16} className="mr-1" />
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-vedic-black mb-2">
                                            Message <span className="text-vedic-saffron">*</span>
                                        </label>
                                        <textarea
                                            rows="5"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                errors.message 
                                                    ? 'border-red-500' 
                                                    : 'border-vedic-black/20 focus:border-vedic-saffron'
                                            } focus:ring-2 focus:ring-vedic-saffron/20 outline-none transition-all bg-vedic-white resize-none`}
                                            placeholder="Tell us about your project..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                                <AlertCircle size={16} className="mr-1" />
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className="w-full py-4 bg-gradient-vedic text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed premium-glow-hover"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader className="animate-spin mr-2" size={20} />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send size={20} className="ml-2" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
