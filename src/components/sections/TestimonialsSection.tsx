"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
import Section from '../ui/Section';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    text: "Ibraheem is an exceptional team lead who combines technical expertise with outstanding people management. His ability to break down complex problems and communicate solutions clearly made our React Native app development seamless.",
    name: "Alex Johnson",
    position: "Senior Developer",
    company: "Dojo",
    avatar: "/testimonials/avatar1.png"
  },
  {
    id: 2,
    text: "Working with Ibraheem on our AWS infrastructure was a game-changer. His expertise in Docker and Terraform helped us build a scalable system that drastically improved our deployment process.",
    name: "Sarah Chen",
    position: "DevOps Engineer",
    company: "Dojo",
    avatar: "/testimonials/avatar2.png"
  },
  {
    id: 3,
    text: "Ibraheem's data analysis skills are top-notch. His work at Western Digital significantly improved our decision-making process by transforming complex datasets into actionable insights.",
    name: "David Meir",
    position: "Data Science Manager",
    company: "Western Digital",
    avatar: "/testimonials/avatar3.png"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <Section id="testimonials">
      <SectionTitle subtitle="Testimonials" title="What People Say" centered />
      
      <div className="relative">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={currentIndex}
              className="card text-center p-8 md:p-12 relative"
            >
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary opacity-5 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-1 opacity-5 rounded-tr-3xl"></div>
              
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 relative z-10">
                    <Image 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full">
                    <FiMessageSquare />
                  </div>
                </div>
              </div>
              
              <blockquote className="mb-8">
                <p className="text-lg md:text-xl italic text-gray-300">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
              </blockquote>
              
              <div>
                <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-8 gap-3">
            <button 
              onClick={goToPrevious} 
              className="p-3 rounded-full bg-dark-light hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext} 
              className="p-3 rounded-full bg-dark-light hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}