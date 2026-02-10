"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Globe, Pin, Bell, Search, Settings, Shield, Monitor, MessageSquare, Forward, CalendarClock, BarChart3, MessageSquareLock, MonitorSmartphone, Lock, User, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/motion-primitives/carousel';

const Chat = () => {
  const [current, setCurrent] = useState(0);
  
  const chatSlides = [
    { id: 1, src: "/Chat1.png", alt: "Chat Dashboard" },
    { id: 2, src: "/Chat2.png", alt: "Threaded Conversations" },
    { id: 3, src: "/Chat3.png", alt: "Search Functionality" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === chatSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 text-center overflow-hidden min-h-[70vh] flex items-center justify-center">
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

        <motion.div 
            className="max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            CNT CloudSpace Chat
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Secure, real-time messaging for the modern enterprise. Connect with your team instantly, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download for Windows
            </motion.button>
            <motion.button 
                className="bg-white text-[#1F2943] hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all shadow-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
              Open in Browser
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* What is CloudSpace Chat? */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-[#1F2943] mb-8">What is CloudSpace Chat?</h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
            CNT CloudSpace Chat is a secure enterprise messaging platform designed to streamline internal communication. 
            Built for performance and flexibility, it offers seamless real-time messaging accessible directly via your browser 
            or through our dedicated desktop application.
            </p>
        </motion.div>
      </section>

      {/* Smart Organized Communication */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Text Content */}
             <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                <h2 className="text-3xl font-bold text-[#1F2943] mb-12">Smart, Organized Communication Made Easy</h2>
                <div className="space-y-10">
                    {/* Item 1 */}
                    <div className="flex gap-5">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                            <Compass className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#1F2943] mb-3">Manage messages with ease</h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Stay on top of your daily conversations with features like message pinning, bookmarks, and hashtags — making communication more structured and accessible.
                            </p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex gap-5">
                         <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                            <Pin className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#1F2943] mb-3">Keep everyone in the loop</h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Pin key messages or mention team members to highlight important updates, ensuring the right information reaches the right people.
                            </p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex gap-5">
                         <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                            <Search className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#1F2943] mb-3">Find what matters, faster</h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Quickly retrieve important messages using bookmarks and tags — or use the powerful built-in search to locate shared files, links, and conversations in seconds.
                            </p>
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Carousel */}
             <motion.div 
                className="relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
             >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  <Carousel
                    index={current}
                    onIndexChange={setCurrent}
                    className="w-full"
                  >
                    <CarouselContent className="h-[350px] sm:h-[450px]">
                      {chatSlides.map((slide) => (
                        <CarouselItem key={slide.id} className="h-full pl-0">
                          <div className="w-full h-full relative">
                             <Image
                              src={slide.src}
                              alt={slide.alt}
                              fill
                              className="object-cover"
                              priority={slide.id === 1}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselNavigation alwaysShow className="bg-white/80 backdrop-blur-sm" />
                    <CarouselIndicator className="pb-6" />
                  </Carousel>
                </div>
                
                 {/* Decorative background element */}
                <motion.div 
                    className="absolute -z-10 top-8 -right-8 w-full h-full bg-blue-100/50 rounded-3xl"
                    animate={{ rotate: [2, 4, 2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Transform team communication */}
      <section className="py-24 px-6 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transform team communication
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Feature 1 */}
            <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
              <div className="mb-6">
                <div className="relative">
                    <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <div className="absolute inset-0 flex items-center justify-center pt-1">
                        <User className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Maximum flexibility</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Start conversations between one or more people or create public or private channels.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="relative">
                    <MessageSquare className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <div className="absolute -bottom-1 -right-1 bg-[#111827] rounded-full p-0.5">
                        <Lock className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Complete privacy</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Ensure confidentiality with optional end-to-end encryption for conversations or channels.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
              <div className="mb-6 flex items-end justify-center gap-1">
                 <MonitorSmartphone className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-platform access</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Chat from the browser, Windows, macOS, Linux, iOS, or Android platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empower Remote Teams Section (Replaced) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-6">Empower remote teams</h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Chat is embedded with interactive and entertaining features to increase users' productivity.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            className="flex flex-wrap justify-center gap-x-12 gap-y-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            
            {/* Threads */}
            <motion.div variants={item} className="flex flex-col items-center text-center max-w-[300px] group">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                <MessageSquare className="w-10 h-10 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2943] mb-3">Threads</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep conversations tidy by replying to messages in a thread.
              </p>
            </motion.div>

            {/* Reminders */}
            <motion.div variants={item} className="flex flex-col items-center text-center max-w-[300px] group">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                <Bell className="w-10 h-10 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2943] mb-3">Reminders</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay on top of what matters with message reminders.
              </p>
            </motion.div>

            {/* Polls */}
            <motion.div variants={item} className="flex flex-col items-center text-center max-w-[300px] group">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                <BarChart3 className="w-10 h-10 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2943] mb-3">Polls</h3>
              <p className="text-gray-600 leading-relaxed">
                Get feedback from your team by creating polls.
              </p>
            </motion.div>

            {/* Forwarding */}
            <motion.div variants={item} className="flex flex-col items-center text-center max-w-[300px] group">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                <Forward className="w-10 h-10 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2943] mb-3">Forwarding</h3>
              <p className="text-gray-600 leading-relaxed">
                Save time by forwarding messages and large files.
              </p>
            </motion.div>

            {/* Scheduling */}
            <motion.div variants={item} className="flex flex-col items-center text-center max-w-[300px] group">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                <CalendarClock className="w-10 h-10 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2943] mb-3">Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Plan your work ahead by scheduling messages in advance.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Communication?</h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
                Join thousands of employees communicating faster and more securely.
            </p>
            <motion.button 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-blue-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Get Started Today
            </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Chat;
