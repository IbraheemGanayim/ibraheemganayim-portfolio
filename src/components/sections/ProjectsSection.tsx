"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../ui/SectionTitle';
import Section from '../ui/Section';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "AgarVision",
    description: "ML-Powered Bacteria Detection App that uses custom k-means clustering for colony detection with a Flutter frontend and Python backend.",
    image: "/projects/agarvision.jpeg",
    tags: ["Flutter", "Python", "Machine Learning", "Docker", "Firebase", "JWT"],
    liveUrl: "https://agarvision.app",
    githubUrl: "https://github.com/ibraheemganayim/agarvision",
    category: "mobile",
  },
  {
    id: 2,
    title: "Object Detection Bot",
    description: "Microservices-based Telegram bot using YOLO with CI/CD pipeline via Jenkins and GitHub Actions, deployed on AWS using Terraform.",
    image: "/projects/telegram-bot.jpeg",
    tags: ["Python", "AWS", "Docker", "Terraform", "CI/CD", "Jenkins"],
    liveUrl: "https://t.me/ObjectDetectionBot",
    githubUrl: "https://github.com/ibraheemganayim/object-detection-bot",
    category: "backend",
  },
  {
    id: 3,
    title: "Cyber Attacks Management",
    description: "Full-scale web app for Radware's security researchers using React and Node.js to track and analyze cyber attacks.",
    image: "/projects/cyber-attacks.jpeg",
    tags: ["React", "Node.js", "TypeScript", "REST API", "Dashboard"],
    liveUrl: "https://cyber-dashboard.example.com",
    githubUrl: "https://github.com/ibraheemganayim/cyber-attacks-app",
    category: "web",
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "backend", label: "Backend" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section id="projects" className="bg-dark-light">
      <SectionTitle subtitle="My Projects" title="Recent Work" centered />
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button 
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2 rounded-full transition-all duration-300
              ${activeCategory === category.id 
                ? 'bg-primary text-white shadow-button' 
                : 'bg-dark-light border border-gray-700 text-gray-300 hover:border-primary'}
            `}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-dark rounded-2xl shadow-card overflow-hidden group"
          >
            {/* Project Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
            </div>
            
            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 rounded-full bg-primary bg-opacity-20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
              
              {/* Links */}
              <div className="flex gap-3">
                <Link
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-sm bg-gray-700 text-gray-400 cursor-not-allowed opacity-50 rounded-lg px-3 py-2"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiExternalLink /> Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-dark-light border border-gray-700 hover:border-primary rounded-lg px-3 py-2 transition-colors duration-300"
                >
                  <FiGithub /> Code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <FiCode className="text-4xl text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No projects in this category yet.</p>
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Link 
          href="https://github.com/ibraheemganayim"
          target="_blank"
          rel="noopener noreferrer" 
          className="btn-outline inline-flex items-center"
        >
          <FiGithub className="mr-2" /> View More on GitHub
        </Link>
      </motion.div>
    </Section>
  );
}