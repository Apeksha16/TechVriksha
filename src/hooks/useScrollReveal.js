import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollReveal = (options = {}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
        ...options
    });

    return { ref, isInView };
};

