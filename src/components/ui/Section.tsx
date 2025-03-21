"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Section({ id, className = '', children, fullWidth = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`section-padding w-full overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px", amount: 0.1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "opacity, transform" }}
        className={fullWidth ? 'w-full' : 'container-custom mx-auto'}
      >
        {children}
      </motion.div>
    </section>
  );
}