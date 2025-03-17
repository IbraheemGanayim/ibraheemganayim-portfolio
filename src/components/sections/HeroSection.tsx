"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I&apos;m <span className="text-gradient">Ibraheem Ganayim</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
                R&D Team Lead & Software Engineer
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Co-founder and R&D Team Lead at Dojo. BSc in Software Engineering with expertise in full-stack development, 
                system architecture, and team leadership. Transforming innovative ideas into scalable solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary flex items-center">
                  Get In Touch <FiArrowRight className="ml-2" />
                </Link>
                <Link href="#projects" className="btn-outline">
                  View My Work
                </Link>
              </div>
              
              <div className="mt-10 flex items-center">
                <p className="text-gray-400 mr-4">Find me on:</p>
                <div className="flex space-x-4">
                  <Link 
                    href="https://github.com/ibraheemganayim" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </Link>
                  <Link 
                    href="https://linkedin.com/in/ibraheemganayim" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-card-gradient rounded-3xl opacity-10"></div>
              <div className="absolute -inset-1 bg-card-gradient rounded-3xl opacity-30 blur-xl"></div>
              <div className="absolute inset-0 glassmorphism rounded-3xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile.jpg"
                  alt="Ibraheem Ganayim - R&D Team Lead and Software Engineer in Tel Aviv"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-32 right-0 w-96 h-96 bg-primary opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-accent-1 opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
}