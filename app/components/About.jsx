"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/motion-primitives/carousel';

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="py-24 px-6 bg-white border-b border-gray-100 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-8 leading-tight">
              About CNT CloudSpace
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              CNT CloudSpace is a centralized, secure digital environment designed to streamline your daily operations. 
              From seamless communication and real-time collaboration to efficient file management and instant IT support, 
              we bring everything you need into one intuitive platform.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Experience a smarter way to work, connected and secure.
            </p>
            <motion.button 
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group"
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
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Carousel
                index={current}
                onIndexChange={setCurrent}
                className="w-full"
              >
                <CarouselContent className="h-[300px] sm:h-[400px]">
                  {slides.map((slide) => (
                    <CarouselItem key={slide.id} className="h-full">
                      <div className={`w-full h-full ${slide.fallbackColor} flex items-center justify-center relative`}>
                        {/* Fallback Text (visible while loading or if image missing) */}
                        <span className="text-slate-400 font-medium absolute z-0">{slide.alt}</span>
                        
                        {/* Actual Image */}
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-cover z-10"
                          priority={slide.id === 1}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'; // Hide if image fails to load
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNavigation alwaysShow />
                <CarouselIndicator className="pb-6" />
              </Carousel>
            </div>
            
            {/* Decorative background element */}
            <motion.div 
                className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-50/50 rounded-2xl transform rotate-3"
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
