"use client";

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const socialLinks = [
  { name: 'GitHub', icon: <FiGithub />, href: 'https://github.com/ibraheemganayim' },
  { name: 'LinkedIn', icon: <FiLinkedin />, href: 'https://linkedin.com/in/ibraheemganayim' },
  { name: 'Twitter', icon: <FiTwitter />, href: 'https://twitter.com/ibraheemganayim' },
  { name: 'Instagram', icon: <FiInstagram />, href: 'https://instagram.com/ibraheemganayim' },
];

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-light pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-3xl font-bold text-gradient">
              Ibraheem<span className="text-white">.dev</span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-xs">
              Creating beautiful digital experiences through innovative design and development.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                example@ibraheemganayim.com
              </li>
              <li className="text-gray-400">
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Ibraheem Ganayim. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}