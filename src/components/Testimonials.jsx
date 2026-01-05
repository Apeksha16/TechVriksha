import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Founder",
        company: "Vedic Roots",
        content: "TechVriksha completely transformed our digital presence. Their understanding of our traditional values combined with modern tech was exactly what we needed. The new eCommerce platform has increased our sales by 200%.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "CTO",
        company: "FinTech Solutions",
        content: "The level of technical expertise at TechVriksha is outstanding. They delivered a complex React Native app ahead of schedule and the code quality was impeccable. Highly recommended for scalable solutions.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Marketing Director",
        company: "Global Wellness",
        content: "We needed a website that felt premium and 'alive'. The team delivered beyond our expectations with stunning animations and a seamless user experience. Our bounce rate dropped significantly.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
        rating: 5
    }
];

const Testimonials = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="testimonials" ref={containerRef} className="relative py-24 md:py-32 bg-vedic-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-vedic-saffron rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-vedic-gold rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-vedic-saffron/10 border border-vedic-saffron/20 text-vedic-saffron text-sm font-semibold tracking-wider mb-6">
                        CLIENT STORIES
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Trusted by Visionaries
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        See what our value-driven approach has achieved for businesses worldwide.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-vedic-saffron/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl h-full flex flex-col justify-between hover:border-vedic-saffron/30 transition-colors">
                                <div>
                                    <Quote className="w-12 h-12 text-vedic-saffron/40 mb-6" />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-vedic-saffron text-vedic-saffron" />
                                        ))}
                                    </div>

                                    <p className="text-lg text-white/80 leading-relaxed mb-8 font-light italic">
                                        "{testimonial.content}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-vedic-saffron/50"
                                    />
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-white/50">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center">
                        <div className="w-px h-16 bg-gradient-to-b from-transparent to-vedic-saffron mb-6" />
                        <p className="text-white/60 mb-4">Ready to start your journey?</p>
                        <a href="/contact" className="group flex items-center gap-2 text-vedic-saffron text-xl font-bold hover:text-white transition-colors">
                            Let's Talk
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
