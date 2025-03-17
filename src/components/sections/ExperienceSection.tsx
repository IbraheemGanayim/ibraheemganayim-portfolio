"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Section from '../ui/Section';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    title: "Full Stack Engineer (Team Lead)",
    company: "Dojo",
    location: "Tel-Aviv",
    period: "2024 - Present",
    description: [
      "Promoted to team lead, managing a 15-member team to deliver a React Native app launching in 2025.",
      "Built backend systems with Node.js, Docker and AWS, optimizing data workflows with robust schemas.",
      "Mentored and interviewed over 20 candidates, enhancing team collaboration and productivity."
    ],
    skills: ["React Native", "Node.js", "Docker", "AWS", "Team Leadership"]
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Western Digital",
    location: "Tefen",
    period: "2018 - 2019",
    description: [
      "Analyzed 500+ data reports using Python and Power BI, leading to more informed decision-making.",
      "Developed a C# and ASP.NET web portal for data visualization, streamlining access to critical data and workflows.",
      "Selected as 1 of 6 students from ~600 for the Excellence for Hi-Tech program, recognizing technical skills."
    ],
    skills: ["Python", "Power BI", "C#", "ASP.NET", "Data Analysis"]
  }
];

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);

  return (
    <Section id="experience">
      <SectionTitle subtitle="Work Experience" title="Professional Journey" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline Navigation */}
        <div className="lg:col-span-1">
          <div className="flex flex-col space-y-1">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`text-left px-6 py-5 rounded-lg transition-all duration-300 flex items-start
                  ${activeExperience === exp.id 
                    ? 'bg-gradient-to-r from-primary/20 to-transparent border-l-4 border-primary shadow-custom' 
                    : 'hover:bg-dark-light'}
                `}
              >
                <div className="min-w-[40px]">
                  <div className={`w-3 h-3 rounded-full mt-1.5 
                    ${activeExperience === exp.id ? 'bg-primary' : 'bg-gray-600'}`} 
                  />
                </div>
                
                <div>
                  <h3 className={`font-medium mb-1 
                    ${activeExperience === exp.id ? 'text-primary' : 'text-white'}`}>
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{exp.company}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <FiCalendar className="mr-1" size={12} />
                    {exp.period}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Experience Details */}
        <div className="lg:col-span-2">
          {experiences
            .filter(exp => exp.id === activeExperience)
            .map(exp => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="card h-full"
              >
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-primary bg-opacity-20 mr-4">
                      <FiBriefcase className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company} - {exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <FiCalendar className="mr-2" />
                    {exp.period}
                  </div>
                  
                  <div className="space-y-4">
                    {exp.description.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-3 text-primary">•</div>
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-3 font-semibold">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="text-xs px-3 py-1.5 rounded-full bg-dark text-gray-300 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
}