"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1F2943]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
                <Image
                src="/CloudLogo.png"
                height={45}
                width={45}
                alt="CNT CloudSpace"
                className="w-auto h-10 md:h-12 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                priority
                />
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
            </div>
            
            <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 group-hover:from-blue-400 group-hover:via-cyan-400 group-hover:to-teal-300 transition-all duration-300 drop-shadow-sm">
                        CNT CLOUDSPACE
                    </span>
                </h2>
            </div>
          </motion.div>
        </Link>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-6"
        >
            {/* Optional: Add a subtle 'Login' link if desired, otherwise just the CTA */}
            {/* <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden md:block">
                Log In
            </Link> */}

          <motion.button
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1F2943]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#06B6D4_50%,#3B82F6_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-600 group-hover:bg-blue-700 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-3xl transition-all duration-300">
              <span className="flex items-center gap-2">
                Register Now <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
