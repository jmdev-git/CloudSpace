"use client";

import React from 'react';
import Link from 'next/link';
import { LogIn, Headphones, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Features = () => {
  const features = [
    {
      title: "Login to Your CNT CloudSpace",
      description: "Single sign-on entry to your personalized dashboard and essential corporate tools.",
      link: "#",
      gif: "/nas.gif"
    },
    {
      title: "IT Helpdesk",
      description: "Submit tickets, track real-time status, and get rapid resolution for technical issues.",
      link: "/it-helpdesk",
      gif: "/document.gif"
    },
    {
      title: "CloudSpace Chat",
      description: "Connect instantly with colleagues via secure, archived messaging channels.",
      link: "/chat",
      gif: "/chat_gif.gif"
    },
    {
      title: "Schedule an IT Assistance",
      description: "Book dedicated sessions with IT specialists for complex setup and troubleshooting.",
      link: "#",
      gif: "/calendar.gif"
    }
  ];

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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section className="py-24 px-6 bg-[#1F2943] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-center mb-20 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            Features & Services
        </motion.h2>
        
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
                <Link href={feature.link} className="block h-full group">
                    <div 
                        className="relative bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/10 h-full flex flex-col transition-all duration-500 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden group-hover:-translate-y-2"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-[#1F2943]/50">
                                <img 
                                    src={feature.gif} 
                                    alt={feature.title} 
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors tracking-wide">
                                {feature.title}
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                                {feature.description}
                            </p>

                            {/* Learn More Action */}
                            <div className="flex items-center text-blue-400 text-sm font-semibold mt-auto group/btn">
                                <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
