"use client";

import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Section from '../ui/Section';
import { FiBookOpen, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const education = [
  {
    id: 1,
    degree: "B.Sc. Software Engineering",
    institution: "Braude Academic College of Engineering",
    location: "Karmiel",
    period: "2019 - 2024",
    description: "Comprehensive software engineering education with focus on distributed systems, algorithms, and software architecture.",
    type: "academic"
  },
  {
    id: 2,
    degree: "DevOps Engineer Course",
    institution: "Elevation",
    location: "Tel-Aviv",
    period: "2023 - 2024",
    description: "Specialized training in CI/CD pipelines, containerization, infrastructure as code, and cloud architecture.",
    type: "course"
  },
  {
    id: 3,
    degree: "Full Stack Engineer Course",
    institution: "Tsofen",
    location: "Givat-Haviva",
    period: "2019 - 2020",
    description: "Comprehensive web development training covering modern JavaScript frameworks, backend technologies, and database design.",
    type: "course"
  }
];

const awards = [
  {
    id: 1,
    title: "Winner at Tsofen's Eco-Hack Hackathon",
    year: "2023",
    issuer: "Tsofen"
  },
  {
    id: 2,
    title: "Certified Entrepreneur",
    year: "2023",
    issuer: "MassChallenge Israel & Hasoub Labs"
  }
];

export default function EducationSection() {
  return (
    <Section id="education" className="bg-dark-light">
      <SectionTitle subtitle="My Education" title="Academic Background" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h3 className="flex items-center text-xl font-semibold mb-6">
            <FiBookOpen className="text-primary mr-3" />
            Education & Courses
          </h3>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card relative overflow-hidden"
              >
                {/* Badge for education type */}
                <div className="absolute top-6 right-6">
                  <span className={`text-xs px-3 py-1 rounded-full 
                    ${item.type === 'academic' 
                      ? 'bg-primary bg-opacity-20 text-primary' 
                      : 'bg-accent-1 bg-opacity-20 text-accent-1'}
                  `}>
                    {item.type === 'academic' ? 'Academic Degree' : 'Certificate'}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{item.degree}</h4>
                
                <div className="text-gray-400 mb-1">{item.institution}</div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FiCalendar className="mr-1" size={14} />
                    {item.period}
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="mr-1" size={14} />
                    {item.location}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-6">
            <FiAward className="text-primary mr-3" />
            Awards & Involvements
          </h3>
          
          <div className="card mb-6">
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index !== 0 ? "pt-6 border-t border-gray-800" : ""}
                >
                  <h4 className="font-semibold mb-1">{award.title}</h4>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-2">
                      {award.issuer}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="ml-2">
                      {award.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <h4 className="font-semibold mb-3">Active Participation</h4>
            <p className="text-gray-400 text-sm">
              Active participant & Mentor at Tsofen&apos;s & Hasoub&apos;s Hackathon Events (2019 - Present)
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}