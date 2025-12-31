import React from 'react';
import { motion } from 'framer-motion';
import FloatingShape from './FloatingShape';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">

            {/* Background Shapes mimicking the reference */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Pink/Purple Torus-like shape top right */}
                <FloatingShape
                    className="top-[15%] right-[10%] w-32 h-32 md:w-64 md:h-64 rounded-full border-[30px] border-pink-500/80 blur-sm shadow-[0_0_50px_rgba(236,72,153,0.5)]"
                    delay={0}
                    duration={8}
                />

                {/* Orange Bumpy Sphere-like shape bottom left */}
                <FloatingShape
                    className="bottom-[15%] left-[5%] w-24 h-24 md:w-48 md:h-48 bg-gradient-to-br from-orange-400 to-red-600 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),0_0_30px_rgba(249,115,22,0.6)]"
                    delay={2}
                    duration={7}
                />

                {/* Blue Glass sheet middle right */}
                <FloatingShape
                    className="top-[40%] right-[20%] w-40 h-40 md:w-80 md:h-60 bg-blue-500/10 backdrop-blur-xl border border-white/20 rounded-3xl transform rotate-12 z-0"
                    delay={1}
                    duration={9}
                    rotate={false}
                />

                {/* Purple Sphere top left */}
                <FloatingShape
                    className="top-[20%] left-[15%] w-16 h-16 md:w-32 md:h-32 bg-gradient-to-tr from-purple-600 to-indigo-400 rounded-full blur-[2px]"
                    delay={3}
                    duration={6}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-sm font-medium text-blue-200">Innovation for the Future</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight leading-tight mb-8">
                        <span className="block">We Create</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-300">
                            Programs
                        </span>
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed mb-12">
                        to bring <span className="font-bold text-white">now</span> a futuristic future
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Start Building
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white font-medium text-lg hover:bg-white/10 transition-all">
                            Explore Products
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
