"use client";

import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  subtitle, 
  title, 
  centered = false, 
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="uppercase text-sm tracking-wider text-primary mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient"
      >
        {title}
      </motion.h2>
    </div>
  );
}