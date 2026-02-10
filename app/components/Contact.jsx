"use client";

import React from 'react';
import { LifeBuoy, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-[#1F2943] mb-12">Need Assistance?</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                
                {/* Portal */}
                <motion.a 
                    href="#"
                    className="flex items-center gap-4 px-8 py-6 bg-gray-50 rounded-xl border border-gray-100 min-w-[280px] justify-center hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="p-2 bg-white rounded-lg group-hover:bg-blue-50 transition-colors">
                        <LifeBuoy className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Helpdesk Portal</span>
                </motion.a>

                {/* Email */}
                <motion.a 
                    href="mailto:IT.support@cntpromoads.com"
                    className="flex items-center gap-4 px-8 py-6 bg-gray-50 rounded-xl border border-gray-100 min-w-[280px] justify-center hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="p-2 bg-white rounded-lg group-hover:bg-blue-50 transition-colors">
                        <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Email Support</span>
                </motion.a>

                {/* Phone */}
                <motion.div 
                    className="flex items-center gap-4 px-8 py-6 bg-gray-50 rounded-xl border border-gray-100 min-w-[280px] justify-center hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="p-2 bg-white rounded-lg group-hover:bg-blue-50 transition-colors">
                        <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Local: 122</span>
                </motion.div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
