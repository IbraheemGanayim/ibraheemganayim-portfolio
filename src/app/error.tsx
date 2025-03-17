'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Oops!</h1>
          <p className="text-gray-400 mb-8">Something went wrong. Please try again.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary"
            >
              Try Again
            </button>
            <Link href="/" className="btn-outline">
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}