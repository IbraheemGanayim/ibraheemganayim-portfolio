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
        <motion.article
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <figure className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-card-gradient rounded-3xl opacity-10"></div>
            <div className="absolute -inset-1 bg-card-gradient rounded-3xl opacity-30 blur-xl"></div>
            <div className="absolute inset-0 glassmorphism rounded-3xl overflow-hidden">
              <Image
              src="/grad.jpg"
              alt="Ibraheem Ganayim - Software Engineer and R&D Team Lead profile photo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover p-2 rounded-2xl"
              />
            </div>
            
            <figcaption className="absolute -bottom-6 -right-6 bg-dark-light p-4 rounded-2xl shadow-card glassmorphism">
              <div className="text-gradient font-bold text-xl">B.Sc.</div>
              <div className="text-sm text-gray-300">Software Engineer</div>
            </figcaption>
          </figure>
        </motion.article>
        
        <motion.article
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Co-founder & R&D Team Lead
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              BSc Software Engineering graduate from Braude Academic College, specializing in distributed systems and cloud architecture. 
              Currently leading a team of 15+ engineers at Dojo, driving innovation in mobile app development and cloud infrastructure. 
              Passionate about building scalable solutions and mentoring future tech leaders.
            </p>
          </div>
          
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start">
              <dt className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiUser className="text-primary text-xl" aria-hidden="true" />
              </dt>
              <dd>
                <h3 className="font-medium mb-1">Current Role</h3>
                <p className="text-gray-400 text-sm">Co-founder & R&D Team Lead, Dojo — Tel-Aviv</p>
              </dd>
            </div>
            
            <div className="flex items-start">
              <dt className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiCode className="text-primary text-xl" aria-hidden="true" />
              </dt>
              <dd>
                <h3 className="font-medium mb-1">Experience</h3>
                <p className="text-gray-400 text-sm">3+ Years Professional Experience</p>
              </dd>
            </div>
            
            <div className="flex items-start">
              <dt className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiAward className="text-primary text-xl" aria-hidden="true" />
              </dt>
              <dd>
                <h3 className="font-medium mb-1">Education</h3>
                <p className="text-gray-400 text-sm">B.Sc. Software Engineering, Braude Academic College</p>
              </dd>
            </div>
            
            <div className="flex items-start">
              <dt className="mr-4 p-3 bg-accent-1 bg-opacity-20 rounded-lg">
                <FiAward className="text-accent-1 text-xl" aria-hidden="true" />
              </dt>
              <dd>
                <h3 className="font-medium mb-1">Languages</h3>
                <p className="text-gray-400 text-sm">English, Hebrew, Arabic (Native)</p>
              </dd>
            </div>
          </dl>
          
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
              aria-label="Download Resume PDF"
            >
              <FiDownload className="mr-2" aria-hidden="true" />
              Download Resume
            </Link>
          </div>
        </motion.article>
      </div>
    </Section>
  );
}