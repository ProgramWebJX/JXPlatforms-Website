import React from 'react';
import { motion } from 'framer-motion';

const FloatingShape = ({ className, delay = 0, duration = 6, rotate = true }) => {
    return (
        <motion.div
            className={`absolute ${className}`}
            animate={{
                y: [0, -20, 0],
                rotate: rotate ? [0, 10, -10, 0] : 0,
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
};

export default FloatingShape;
