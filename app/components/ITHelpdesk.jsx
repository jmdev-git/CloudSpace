"use client";

import React from "react";
import { Activity, List, Clock, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const ITHelpdesk = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#1F2943] font-sans text-slate-200 selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 text-center overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/ITBanner.gif"
            alt="IT Workspace Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1F2943]/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <motion.div
          className="max-w-5xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-none">
              CNT IT Helpdesk
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We make IT work, so you can focus on what really matters. <br/>
            <span className="text-cyan-300 font-normal">Efficient. Reliable. Secure.</span>
          </motion.p>
          <motion.button
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-xl shadow-blue-900/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-bold text-lg tracking-wide">Submit a Ticket</span>
            <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Activity className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* Streamlined Support - Modern Redesign */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                        Streamlined Support
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8 border-l-4 border-blue-500/50 pl-6">
                        The CNT IT Helpdesk System is your centralized hub for all technical inquiries. 
                        We ensure every issue is logged, categorized, and resolved efficiently to minimize downtime.
                    </p>
                </motion.div>

                {/* Abstract Visual Representation (Optional, or just keep text focused layout) */}
                <motion.div 
                    className="hidden lg:block relative h-full min-h-[200px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-auto text-xs text-slate-400 font-mono">system_status: active</div>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                                    <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-blue-400'}`}></div>
                                    <div className="h-2 w-24 bg-slate-600/50 rounded-full"></div>
                                    <div className="h-2 w-12 bg-slate-700/50 rounded-full ml-auto"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature Cards */}
                {[
                    {
                        title: "Live Tracking",
                        desc: "Monitor your request status in real-time from submission to resolution.",
                        icon: Activity,
                        color: "from-blue-500 to-cyan-500"
                    },
                    {
                        title: "Smart Categorization",
                        desc: "Intelligent routing ensures your ticket reaches the right expert immediately.",
                        icon: List,
                        color: "from-purple-500 to-pink-500"
                    },
                    {
                        title: "Timely Updates",
                        desc: "Receive automated notifications on progress and estimated completion times.",
                        icon: Clock,
                        color: "from-emerald-500 to-teal-500"
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity duration-500 rounded-full -mr-10 -mt-10`}></div>
                        
                        <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-blue-300 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed font-light text-sm">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* When to Use & Access (Grid Layout) */}
      <section className="py-8 px-6 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Support Categories */}
          <motion.div
            className="bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h2 className="text-xl md:text-4xl font-extrabold mb-8 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Support Categories
            </h2>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                "Account Access & Login",
                "Data Backup & Recovery",
                "General Inquiries",
                "Hardware Malfunction",
                "Network & Internet",
                "Equipment Requests",
                "Security Incidents",
                "Software Installation",
                "System Performance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-center gap-3 text-slate-300 text-sm font-medium group/item hover:text-white transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 group-hover/item:text-cyan-400 transition-colors" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Access the Portal */}
          <motion.div
            className="bg-gradient-to-br from-blue-900/40 to-[#1F2943] backdrop-blur-md p-10 rounded-3xl shadow-xl border border-blue-500/20 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             {/* Glow effect */}
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 relative z-10">
              Access the Portal
            </h2>
            <div className="space-y-6 relative z-10">
              <motion.div
                className="flex items-start gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                whileHover={{ x: 5 }}
              >
                  <div className="p-3 bg-blue-600 rounded-lg shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">IT Service Portal</h3>
                      <p className="text-slate-400 text-sm mt-1">Direct access to ticket submission and knowledge base.</p>
                  </div>
              </motion.div>
              
              <div className="pt-6 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-2">Need immediate assistance?</p>
                  <div className="text-2xl font-bold text-white tracking-widest">EXT: <span className="text-cyan-400">122</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITHelpdesk;
