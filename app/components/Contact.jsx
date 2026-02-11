"use client";

import React from 'react';
import { LifeBuoy, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#1F2943]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                Need Assistance?
            </h2>
            <p className="text-blue-100/80 text-lg max-w-lg mx-auto leading-relaxed">
                Our support team is always ready to help. Choose the most convenient way to reach us.
            </p>
        </motion.div>
        
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            
            {/* Portal Card */}
            <motion.a 
                href="#"
                variants={item}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <LifeBuoy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Helpdesk Portal</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Submit tickets and track status in real-time.
                </p>
                <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-white transition-colors">
                    Access Portal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </motion.a>

            {/* Email Card */}
            <motion.a 
                href="mailto:IT.support@cntpromoads.com"
                variants={item}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Email Support</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Send us an email for general inquiries.
                </p>
                <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-white transition-colors">
                    Send Email <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </motion.a>

            {/* Phone Card */}
            <motion.div 
                variants={item}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-default"
            >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Direct Line</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Urgent issue? Give us a call directly.
                </p>
                <span className="mt-auto flex items-center gap-2 text-lg font-bold text-emerald-400 group-hover:text-white transition-colors">
                    Local: 122
                </span>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
