"use client";

import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Section from '../ui/Section';
import { 
  FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaDocker,
  FaGithub, FaDatabase
} from 'react-icons/fa';
import { 
  SiKubernetes, SiTerraform, SiJenkins, SiTypescript,
  SiFlutter, SiFirebase, SiMongodb, SiSharp
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { DiDotnet } from 'react-icons/di';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C#", icon: <SiSharp /> },
      { name: "C++", icon: <TbBrandCpp /> }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "ASP.NET", icon: <DiDotnet /> }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "GitHub Actions", icon: <FaGithub /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "DynamoDB", icon: <FaAws /> }
    ]
  }
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="skills">
      <SectionTitle subtitle="My Skills" title="Technical Proficiency" centered />
      
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
        With expertise across multiple languages, frameworks, and technologies, I build 
        scalable, fault-tolerant systems that solve real-world problems.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-6 text-gradient">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center 
                    bg-dark bg-opacity-50 text-3xl text-primary mb-3
                    group-hover:text-white group-hover:bg-primary
                    transition-all duration-300 ease-in-out">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 italic">
          &quot;Continuously learning and adapting to new technologies&quot;
        </p>
      </motion.div>
    </Section>
  );
}