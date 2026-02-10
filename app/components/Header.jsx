"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header 
        className="sticky top-0 z-50 bg-[#1F2943] shadow-md transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image 
                src="/logo.png" 
                height={40} 
                width={160} 
                alt="CNT CloudSpace" 
                className="w-auto h-10 object-contain brightness-0 invert"
                priority
            />
          </motion.div>
        </Link>

        {/* Action Button */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button 
            className="bg-white text-[#1F2943] hover:bg-gray-100 font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register now
          </motion.button>
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;
