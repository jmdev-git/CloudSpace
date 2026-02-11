"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

const slides = [
  {
    id: 1,
    src: "/HCarousel1.png",
    alt: "CNT CloudSpace Dashboard",
    fallbackColor: "bg-blue-100"
  },
  {
    id: 2,
    src: "/HCarousel2.png",
    alt: "Team Collaboration",
    fallbackColor: "bg-indigo-100"
  },
  { 
    id: 3,
    src: "/HCarousel3.png",
    alt: "IT Support System",
    fallbackColor: "bg-slate-100"
  }
];

const About = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  return (
    <section className="py-24 px-6 bg-[#1F2943] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              About CNT CloudSpace
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              CNT CloudSpace is a centralized, secure digital environment designed to streamline your daily operations. 
              From seamless communication and real-time collaboration to efficient file management and instant IT support, 
              we bring everything you need into one intuitive platform.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Experience a smarter way to work, connected and secure.
            </p>
            <motion.button 
                className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 group"
                whileHover={{ x: 5 }}
            >
              Learn more about us 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Image Carousel */}
          <motion.div 
            className="relative order-1 lg:order-2 group"
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
                  <div className="ml-4 text-xs text-slate-400 font-medium tracking-wide">CNT CloudSpace - Overview</div>
              </div>

              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="h-[300px] sm:h-[400px]">
                  {slides.map((slide) => (
                    <CarouselItem key={slide.id} className="h-full">
                      <div className={`w-full h-full flex items-center justify-center relative bg-[#1F2943]/50`}>
                        {/* Fallback Text (visible while loading or if image missing) */}
                        <span className="text-slate-500 font-medium absolute z-0">{slide.alt}</span>
                        
                        {/* Actual Image */}
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-contain z-10"
                          priority={slide.id === 1}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'; // Hide if image fails to load
                          }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent pointer-events-none z-20"></div>
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
                className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-500/10 rounded-2xl transform rotate-3 blur-2xl"
                animate={{ rotate: [3, 5, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
