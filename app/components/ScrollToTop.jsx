"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Rocket Container */}
          <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full shadow-lg shadow-blue-500/30 overflow-visible">
            
            {/* Fire Effect Container - Positioned at the bottom of the rocket */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               {/* Main Flame */}
               <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                  y: [0, 5, 0]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full blur-[2px]"
               />
               {/* Side Sparks */}
               <motion.div
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.5, 0.8, 0.5],
                  y: [0, 3, 0],
                  x: [-2, -4, -2]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1
                }}
                className="absolute top-2 w-2 h-4 bg-orange-400 rounded-full blur-[1px]"
               />
               <motion.div
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.5, 0.8, 0.5],
                  y: [0, 3, 0],
                  x: [2, 4, 2]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute top-2 w-2 h-4 bg-orange-400 rounded-full blur-[1px]"
               />
            </div>

            {/* Rocket Icon */}
            <Rocket className="w-7 h-7 text-white fill-white relative z-10 -rotate-45 group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
