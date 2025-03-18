"use client";

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-16">
      <Section id="privacy" className="bg-dark-light">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy outlines how Ibraheem Ganayim ("I", "me", or "my") collects, uses, and protects
              your information when you visit ibraheemganayim.com (the "Website").
            </p>
          </section>

          <section className="mb-8">
            <h2>Information Collection</h2>
            <p>I collect information that you voluntarily provide when you:</p>
            <ul>
              <li>Contact me through the contact form</li>
              <li>Subscribe to my newsletter (if available)</li>
              <li>Comment on blog posts (if available)</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Analytics and Cookies</h2>
            <p>
              This website uses Vercel Analytics and Speed Insights to collect anonymous usage data
              to improve user experience. These tools do not collect personally identifiable information.
            </p>
          </section>

          <section className="mb-8">
            <h2>Data Usage</h2>
            <p>I use the collected information to:</p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Improve website functionality and content</li>
              <li>Send relevant communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Data Protection</h2>
            <p>
              Your data is secured using industry-standard encryption and security measures.
              I do not sell, trade, or transfer your information to third parties without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Contact Information</h2>
            <p>
              For any privacy-related questions or requests, please contact me at{' '}
              <a href="mailto:Ganayim.Ibraheem@gmail.com" className="text-primary">
                Ganayim.Ibraheem@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>
              This Privacy Policy may be updated occasionally. The latest version will be posted
              on this page with the last updated date.
            </p>
            <p className="text-gray-400 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </motion.article>
      </Section>
    </main>
  );
}