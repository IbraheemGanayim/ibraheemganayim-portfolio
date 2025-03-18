"use client";

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-16">
      <Section id="terms" className="bg-dark-light">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <section className="mb-8">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing ibraheemganayim.com (the &quot;Website&quot;), you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2>Intellectual Property</h2>
            <p>
              The content on this Website, including but not limited to text, graphics, logos, images, code,
              and software, is the property of Ibraheem Ganayim and is protected by intellectual property laws.
            </p>
            <p>
              You may view and download content for personal, non-commercial use only, provided you:
            </p>
            <ul>
              <li>Maintain all copyright and proprietary notices</li>
              <li>Do not modify the content</li>
              <li>Do not use the content in a way that suggests endorsement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access and view the materials on the Website for personal,
              non-commercial use only. This is the grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>User Submissions</h2>
            <p>
              By submitting content through contact forms or other means, you grant Ibraheem Ganayim a
              non-exclusive, royalty-free license to use, store, and process that content for the purpose
              of responding to your inquiries and improving the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2>Disclaimer</h2>
            <p>
              The materials on the Website are provided on an &apos;as is&apos; basis. Ibraheem Ganayim makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness
              for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="mb-8">
            <h2>Limitations</h2>
            <p>
              In no event shall Ibraheem Ganayim be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use
              or inability to use the materials on the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2>Links to Other Websites</h2>
            <p>
              The Website may contain links to external websites. Ibraheem Ganayim is not responsible for
              the content or practices of these websites and encourages you to read their terms and policies.
            </p>
          </section>

          <section className="mb-8">
            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Israel,
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              Ibraheem Ganayim reserves the right to modify these terms of service at any time. We do so by
              posting and drawing attention to the updated terms on this page.
            </p>
            <p className="text-gray-400 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </motion.article>
      </Section>
    </main>
  );
}