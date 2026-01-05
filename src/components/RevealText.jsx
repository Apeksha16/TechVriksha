import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealText = ({ children, className = "", delay = 0, duration = 0.8 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`overflow-hidden ${className}`}
        >
            <motion.span
                variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 }
                }}
                transition={{ 
                    duration,
                    delay,
                    ease: [0.6, -0.05, 0.01, 0.99]
                }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </motion.div>
    );
};

export default RevealText;

