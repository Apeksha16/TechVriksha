import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            // Here you would typically send to your backend
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-vedic-saffron/10 via-vedic-gold/5 to-vedic-brown/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 vedic-pattern opacity-20" />
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 left-10 text-6xl text-vedic-saffron/10 font-sanskrit pointer-events-none select-none"
            >
                ॐ
            </motion.div>
            <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 right-10 text-6xl text-vedic-gold/10 font-sanskrit pointer-events-none select-none"
            >
                श्री
            </motion.div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6"
                    >
                        <div className="w-20 h-20 mx-auto bg-gradient-vedic rounded-full flex items-center justify-center text-white shadow-xl">
                            <Mail size={40} />
                        </div>
                    </motion.div>

                    <span className="text-vedic-saffron tracking-widest uppercase font-semibold text-sm sanskrit-text block mb-4">
                        Stay Connected
                    </span>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-vedic-black mb-4">
                        Join Our Newsletter
                    </h2>
                    
                    <p className="text-lg md:text-xl text-vedic-brown/70 mb-2 max-w-2xl mx-auto">
                        Get the latest updates on technology trends, project showcases, and exclusive insights
                    </p>
                    

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vedic-brown/40 w-5 h-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-vedic-black/20 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 outline-none bg-white text-vedic-black placeholder-vedic-brown/40 transition-all"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={submitted}
                                className={`px-8 py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 vedic-button ${
                                    submitted 
                                        ? 'bg-green-600 cursor-not-allowed' 
                                        : 'bg-gradient-vedic premium-glow-hover'
                                }`}
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Subscribed!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Subscribe
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.form>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                    >
                        {[
                            { icon: Sparkles, text: 'Latest Tech Insights' },
                            { icon: Mail, text: 'Project Showcases' },
                            { icon: CheckCircle, text: 'Exclusive Offers' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center text-center p-4"
                            >
                                <div className="w-12 h-12 bg-vedic-saffron/10 rounded-full flex items-center justify-center text-vedic-saffron mb-3">
                                    <item.icon size={24} />
                                </div>
                                <p className="text-sm text-vedic-brown/70 font-medium">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <p className="mt-8 text-xs text-vedic-brown/50">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;

