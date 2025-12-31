import { motion } from 'framer-motion';

const FloatingShape = ({ className, delay = 0, duration = 6, ShouldRotate = true }) => {
    const rotateValue = ShouldRotate ? [0, 10, -10, 0] : 0;
    
    return (
        <motion.div
            className={`absolute ${className}`}
            animate={{
                y: [0, -20, 0],
                rotate: rotateValue,
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
