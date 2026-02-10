"use client";

import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative text-white py-32 px-6 text-center overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Background GIF with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/ITBanner.gif" 
                alt="IT Workspace Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1F2943]/85 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1 
                className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Welcome to the <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-none">CNT CloudSpace</span>
            </motion.h1>

            <motion.p 
                className="text-xl md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                Your Digital Workspace for faster, smarter, and safer collaboration.
            </motion.p>
            
            {/* Rocket Button Area */}
            <motion.div 
                className="flex flex-col items-center justify-center space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <motion.button 
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-300 shadow-xl shadow-blue-900/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="font-semibold text-lg tracking-wide">Launch Workspace</span>
                    {/* Floating Rocket Icon */}
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Rocket className="w-6 h-6" />
                    </motion.div>
                </motion.button>
                
                <motion.p 
                    className="text-sm text-blue-200/80 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Instant access to your dashboard
                </motion.p>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;
