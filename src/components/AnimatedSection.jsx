import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const AnimatedSection = ({ children, className = "", variant = "fadeUp", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        slideRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{ 
                duration: 0.8, 
                delay,
                ease: [0.6, -0.05, 0.01, 0.99]
            }}
            style={{ y: variant === "fadeUp" ? y : 0, opacity: variant === "fadeIn" ? opacity : undefined }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;

