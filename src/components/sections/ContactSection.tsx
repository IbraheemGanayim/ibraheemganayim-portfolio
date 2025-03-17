"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Section from '../ui/Section';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <Section id="contact" className="bg-dark-light">
      <SectionTitle subtitle="Get In Touch" title="Contact Me" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Lets Talk</h3>
          <p className="text-gray-300 mb-8">
            Feel free to get in touch with me. I am always open to discussing new projects, 
            creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiMail className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-gray-400">Ganayim.Ibraheem@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiPhone className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-gray-400">054-9278861</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-primary bg-opacity-20 rounded-lg">
                <FiMapPin className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-gray-400">Tel-Aviv, Israel</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-dark rounded-xl border border-gray-800">
            <h4 className="font-semibold mb-2">Response Time</h4>
            <p className="text-gray-400 text-sm">
              I usually respond within 24 hours. For urgent matters, please contact me via phone.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
              <p className="text-gray-300 mb-6">Your message has been sent successfully.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-outline"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={formAnimation}
                className="mb-4"
              >
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark px-4 py-3 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={formAnimation}
                className="mb-4"
              >
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark px-4 py-3 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={formAnimation}
                className="mb-4"
              >
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark px-4 py-3 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </motion.div>
              
              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={formAnimation}
                className="mb-6"
              >
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark px-4 py-3 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </motion.div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-900 bg-opacity-20 border border-red-800 rounded-lg text-red-500"
                >
                  {error}
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`btn-primary w-full flex items-center justify-center
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}