"use client";

import React from 'react';
import Link from 'next/link';
import { LogIn, Headphones, MessageSquare, Calendar } from 'lucide-react';
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
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
            className="text-3xl font-bold text-center text-[#1F2943] mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            Features & Services
        </motion.h2>
        
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
                <Link href={feature.link} className="block h-full">
                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start h-full group"
                        whileHover={{ 
                            y: -8, 
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {feature.gif ? (
                            <div className="mb-6 w-full">
                                <img src={feature.gif} alt={feature.title} className="w-full h-44 object-cover rounded-xl" />
                            </div>
                        ) : (
                            <div className="mb-6 p-4 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                                {React.cloneElement(feature.icon, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" })}
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-[#1F2943] mb-4 group-hover:text-blue-600 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
