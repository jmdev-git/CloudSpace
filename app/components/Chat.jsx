"use client";
import React from "react";
import Image from "next/image";
import {
  Download,
  Globe,
  Pin,
  Bell,
  Search,
  Settings,
  Shield,
  Monitor,
  MessageSquare,
  Forward,
  CalendarClock,
  BarChart3,
  MessageSquareLock,
  MonitorSmartphone,
  Lock,
  User,
  Compass,
} from "lucide-react";
import { motion } from "motion/react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const Chat = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  const chatSlides = [
    { id: 1, src: "/Chat1.png", alt: "Chat Dashboard" },
    { id: 2, src: "/Chat2.png", alt: "Threaded Conversations" },
    { id: 3, src: "/Chat3.png", alt: "Search Functionality" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  // Icon Animation Variants
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { duration: 0.5 },
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity },
    },
    shake: {
      rotate: [0, -15, 15, -15, 15, 0],
      transition: { duration: 0.5, repeatType: "loop", repeatDelay: 1 },
    },
    bounce: {
      y: [0, -5, 0],
      transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
    },
    slide: {
      x: [0, 5, 0],
      transition: { duration: 1, repeat: Infinity },
    },
    grow: {
      scaleY: [1, 1.2, 1],
      originY: 1,
      transition: { duration: 1.5, repeat: Infinity },
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 text-center overflow-hidden min-h-[95vh] flex items-center justify-center">
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
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-none">
              CNT CloudSpace Chat
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Communicate easily and securely with CNT Cloudspace Chat — your
            all-in-one private cloud messaging service.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-xl shadow-blue-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span className="font-semibold text-lg tracking-wide">Download for Windows</span>
            </motion.button>
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-full transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
              <span className="font-semibold text-lg tracking-wide">Open in Browser</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* What is CloudSpace Chat? */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#1F2943]">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Floating Icons */}
                <motion.div 
                    className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
                            <MessageSquare className="w-4 h-4" />
                            <span>Enterprise-Grade Messaging</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight">
                            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">CloudSpace Chat?</span>
                        </h2>
                        <p className="text-slate-300 leading-relaxed text-lg mb-8 font-light">
                            CNT CloudSpace Chat is a secure enterprise messaging platform
                            designed to streamline internal communication. Built for performance
                            and flexibility, it offers seamless real-time messaging accessible
                            directly via your browser or through our dedicated desktop
                            application.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                             <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                Real-time Sync
                             </div>
                             <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                End-to-End Encrypted
                             </div>
                             <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
                                Cross-Platform
                             </div>
                        </div>
                    </div>

                    {/* Visual/Icon Composition */}
                    <div className="flex-shrink-0 relative w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
                            {/* Glow Effect behind the image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2rem] blur-[60px] opacity-30"></div>
                            
                            {/* Main App Preview Card */}
                            <motion.div 
                                className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0F172A]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Fake Browser Header */}
                                <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                {/* App Screenshot */}
                                <div className="relative aspect-[16/10]">
                                    <Image 
                                        src="/Chat1.png" 
                                        alt="CloudSpace Chat UI" 
                                        fill 
                                        className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Gradient Overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-20"></div>
                                </div>
                            </motion.div>

                            {/* Orbiting Elements */}
                             <motion.div 
                                className="absolute -right-4 lg:-right-12 top-10 p-4 bg-[#1F2943]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.4)] flex items-center gap-4 z-20"
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="text-sm">
                                    <div className="text-slate-200 font-bold">Secure</div>
                                    <div className="text-slate-500 text-xs">AES-256</div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="absolute -left-4 lg:-left-12 bottom-8 p-4 bg-[#1F2943]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.4)] flex items-center gap-4 z-20"
                                animate={{ y: [15, -15, 15] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <MonitorSmartphone className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="text-sm">
                                    <div className="text-slate-200 font-bold">Any Device</div>
                                    <div className="text-slate-500 text-xs">Web & Desktop</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Smart Organized Communication */}
      <section className="py-24 px-6 bg-[#1F2943] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-left max-w-xl mb-8 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                Smart, Organized Communication Made Easy
              </h2>
              <div className="space-y-10">
                {/* Item 1 */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 shadow-sm border border-white/5">
                    <Compass className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Manage messages with ease
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-base">
                      Stay on top of your daily conversations with features like
                      message pinning, bookmarks, and hashtags — making
                      communication more structured and accessible.
                    </p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 shadow-sm border border-white/5">
                    <Pin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Keep everyone in the loop
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-base">
                      Pin key messages or mention team members to highlight
                      important updates, ensuring the right information reaches
                      the right people.
                    </p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 shadow-sm border border-white/5">
                    <Search className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Find what matters, faster
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-base">
                      Quickly retrieve important messages using bookmarks and
                      tags — or use the powerful built-in search to locate
                      shared files, links, and conversations in seconds.
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
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
                {/* Window Header */}
                <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-4 text-xs text-slate-400 font-medium tracking-wide">CNT Chat - Workspace</div>
                </div>
                
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent className="h-[350px] sm:h-[450px]">
                    {chatSlides.map((slide) => (
                      <CarouselItem key={slide.id} className="h-full">
                        <div className="w-full h-full relative">
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-contain"
                            priority={slide.id === 1}
                          />
                          {/* Gradient Overlay for better text readability if images are light, but good for mood */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-[#1F2943]/80 border-white/10 text-white hover:bg-blue-600 hover:text-white z-20" />
                  <CarouselNext className="right-4 bg-[#1F2943]/80 border-white/10 text-white hover:bg-blue-600 hover:text-white z-20" />
                </Carousel>
              </div>

              {/* Decorative background element */}
              <motion.div
                className="absolute -z-10 top-8 -right-8 w-full h-full bg-blue-500/10 rounded-3xl blur-2xl"
                animate={{ rotate: [2, 4, 2] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transform team communication */}
      <section className="py-24 px-6 bg-[#1F2943] text-white relative overflow-hidden">
        {/* Modern Background Gradient & Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-center mb-20 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transform team communication
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative mb-8 p-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all duration-500">
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                >
                  <Shield className="w-16 h-16 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" strokeWidth={1.5} />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center pt-1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <User className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors duration-300" strokeWidth={2} />
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Maximum flexibility</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto font-light group-hover:text-slate-300 transition-colors">
                Start conversations between one or more people or create public
                or private channels.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative mb-8 p-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all duration-500">
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                >
                  <MessageSquare
                    className="w-16 h-16 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <motion.div 
                    className="absolute -bottom-1 -right-1 bg-[#0B1120] rounded-full p-1 border border-white/10"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Lock className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors duration-300" strokeWidth={2} />
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Complete privacy</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto font-light group-hover:text-slate-300 transition-colors">
                Ensure confidentiality with optional end-to-end encryption for
                conversations or channels.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative mb-8 p-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all duration-500">
                <motion.div
                    className="flex items-end justify-center gap-1"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MonitorSmartphone
                    className="w-16 h-16 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Multi-platform access</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto font-light group-hover:text-slate-300 transition-colors">
                Chat from the browser, Windows, macOS, Linux, iOS, or Android
                platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empower Remote Teams Section (Refactored) */}
      <section className="py-24 px-6 bg-[#1F2943] relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Empower remote teams
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Chat is embedded with interactive and entertaining features to
              increase users' productivity.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Threads */}
            <motion.div
              variants={item}
              className="flex flex-col items-center text-center w-full sm:w-[300px] group"
            >
              <div className="relative mb-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  animate="bounce"
                >
                  <MessageSquare className="w-12 h-12 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Threads</h3>
              <p className="text-slate-300 leading-relaxed text-sm font-light">
                Keep conversations tidy by replying to messages in a thread.
              </p>
            </motion.div>

            {/* Reminders */}
            <motion.div
              variants={item}
              className="flex flex-col items-center text-center w-full sm:w-[300px] group"
            >
              <div className="relative mb-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  animate="shake"
                >
                  <Bell className="w-12 h-12 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                Reminders
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm font-light">
                Stay on top of what matters with message reminders.
              </p>
            </motion.div>

            {/* Polls */}
            <motion.div
              variants={item}
              className="flex flex-col items-center text-center w-full sm:w-[300px] group"
            >
              <div className="relative mb-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  animate="grow"
                >
                  <BarChart3 className="w-12 h-12 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Polls</h3>
              <p className="text-slate-300 leading-relaxed text-sm font-light">
                Get feedback from your team by creating polls.
              </p>
            </motion.div>

            {/* Forwarding */}
            <motion.div
              variants={item}
              className="flex flex-col items-center text-center w-full sm:w-[300px] group"
            >
              <div className="relative mb-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  animate="slide"
                >
                  <Forward className="w-12 h-12 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                Forwarding
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm font-light">
                Save time by forwarding messages and large files.
              </p>
            </motion.div>

            {/* Scheduling */}
            <motion.div
              variants={item}
              className="flex flex-col items-center text-center w-full sm:w-[300px] group"
            >
              <div className="relative mb-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  animate="pulse"
                >
                  <CalendarClock className="w-12 h-12 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                Scheduling
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm font-light">
                Plan your work ahead by scheduling messages in advance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#1F2943]">
        {/* Background Gradients */}
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <motion.div
          className="relative max-w-4xl mx-auto text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
          >
            <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">Join the Revolution</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight text-white leading-tight">
            Ready to Transform Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Communication?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Join thousands of employees communicating faster, safer, and more securely than ever before.
          </p>
          
          <motion.button
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-xl shadow-blue-900/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">Get Started Today</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
            <svg className="w-5 h-5 ml-2 -mr-1 transition-all duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Chat;
