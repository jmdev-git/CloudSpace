"use client";

import React from "react";
import { Activity, List, Clock, ExternalLink } from "lucide-react";
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
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 text-center overflow-hidden min-h-[95vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/ITBanner.gif"
            alt="IT Workspace Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1F2943]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          className="max-w-4xl mx-auto relative z-10"
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
              CNT IT Helpdesk System
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We make IT work, so you can focus on what really matters.
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit a Ticket
          </motion.button>
        </motion.div>
      </section>

      {/* What is the IT Helpdesk System? */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#1F2943] mb-6">
            Streamlined Support
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            The CNT IT Helpdesk System is your centralized hub for all technical
            inquiries. We ensure every issue is logged, categorized, and
            resolved efficiently to minimize downtime.
          </p>

          <h3 className="text-lg font-bold text-[#1F2943] mb-6 uppercase tracking-wider text-sm">
            Key Capabilities
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.li className="flex items-start gap-4" whileHover={{ x: 5 }}>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600 shrink-0" />
              </div>
              <div>
                <span className="font-bold block text-slate-900 mb-1">
                  Live Tracking
                </span>
                <span className="text-sm text-gray-500 leading-relaxed">
                  Monitor your request status in real-time from submission to
                  resolution.
                </span>
              </div>
            </motion.li>
            <motion.li className="flex items-start gap-4" whileHover={{ x: 5 }}>
              <div className="p-2 bg-blue-50 rounded-lg">
                <List className="w-6 h-6 text-blue-600 shrink-0" />
              </div>
              <div>
                <span className="font-bold block text-slate-900 mb-1">
                  Smart Categorization
                </span>
                <span className="text-sm text-gray-500 leading-relaxed">
                  Intelligent routing ensures your ticket reaches the right
                  expert immediately.
                </span>
              </div>
            </motion.li>
            <motion.li className="flex items-start gap-4" whileHover={{ x: 5 }}>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 shrink-0" />
              </div>
              <div>
                <span className="font-bold block text-slate-900 mb-1">
                  Timely Updates
                </span>
                <span className="text-sm text-gray-500 leading-relaxed">
                  Receive automated notifications on progress and estimated
                  completion times.
                </span>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </section>

      {/* When to Use & Access (Grid Layout) */}
      <section className="py-8 px-6 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* When to Use */}
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1F2943] mb-8">
              Support Categories
            </h2>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6"
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
                  className="flex items-center gap-3 text-gray-600 text-sm font-medium"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* How to Access */}
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1F2943] mb-8">
              Access the Portal
            </h2>
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    Helpdesk Portal
                  </h3>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                  >
                    Click to launch the full support dashboard
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITHelpdesk;
