"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

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
                Full-Stack Developer & UI/UX Designer
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                I create exceptional digital experiences through innovative design and robust 
                development solutions that transform ideas into reality.
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
                <div className="w-full h-full bg-dark-light flex items-center justify-center">
                  <span className="text-4xl text-gradient">IB</span>
                </div>
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