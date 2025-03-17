"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../ui/SectionTitle';
import Section from '../ui/Section';
import { FiDownload, FiUser, FiCode, FiAward } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <Section id="about" className="bg-dark-light">
      <SectionTitle subtitle="About Me" title="Get to Know Me Better" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-card-gradient rounded-3xl opacity-10"></div>
            <div className="absolute -inset-1 bg-card-gradient rounded-3xl opacity-30 blur-xl"></div>
            <div className="absolute inset-0 glassmorphism rounded-3xl overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Ibraheem Ganayim"
                fill
                className="object-cover p-2"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-dark-light p-4 rounded-2xl shadow-card glassmorphism">
              <div className="text-gradient font-bold text-xl">B.Sc.</div>
              <div className="text-sm text-gray-300">Software Engineer</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Co-founder & R&D Team Lead
          </h3>
          
          <p className="text-gray-300 mb-6">
            BSc Software Engineering graduate from Braude Academic College, specializing in distributed systems and cloud architecture. 
            Currently leading a team of 15+ engineers at Dojo, driving innovation in mobile app development and cloud infrastructure. 
            Passionate about building scalable solutions and mentoring future tech leaders.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiUser className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Current Role</h4>
                <p className="text-gray-400 text-sm">Co-founder & R&D Team Lead, Dojo — Tel-Aviv</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiCode className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Experience</h4>
                <p className="text-gray-400 text-sm">3+ Years Professional Experience</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiAward className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Education</h4>
                <p className="text-gray-400 text-sm">B.Sc. Software Engineering, Braude Academic College</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-accent-1 bg-opacity-20 rounded-lg">
                <FiAward className="text-accent-1 text-xl" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Languages</h4>
                <p className="text-gray-400 text-sm">English, Hebrew, Arabic (Native)</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-primary">
              Contact Me
            </Link>
            <Link
              href="/documents/resume.pdf"
              className="btn-outline flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FiDownload className="mr-2" />
              Download Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}