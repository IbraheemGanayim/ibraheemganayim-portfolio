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
  },
  {
    id: 4,
    degree: "Early Computer Science Program",
    institution: "Haifa University - Etgar Program",
    location: "Haifa",
    period: "2016 - 2017",
    description: "Selected for an advanced program enabling outstanding high-school students to complete B.Sc. computer science courses alongside school studies.",
    type: "academic"
  },
  {
    id: 5,
    degree: "Web & Mobile Development",
    institution: "Intel",
    location: "Haifa",
    period: "2015",
    description: "Completed intensive courses in Web Development (HTML/CSS) and Android app development through Intel's Son of Employee program.",
    type: "course"
  }
];

const hackathonAwards = [
  {
    id: 1,
    title: "Winner - Tsofen's Eco-Hack Hackathon",
    year: "2022",
    issuer: "Tsofen",
    description: "Led team to victory with innovative environmental solution"
  },
  {
    id: 2,
    title: "Makeathon Finalist",
    year: "2022",
    issuer: "Hasoub",
    description: "Developed solutions for people with special abilities"
  },
  {
    id: 3,
    title: "Makeathon Finalist",
    year: "2020",
    issuer: "Tsofen",
    description: "Developed mind-controlled wheelchair project"
  },
  {
    id: 4,
    title: "Ultra Hackathon Finalist",
    year: "2019",
    issuer: "Tsofen",
    description: "Developed volunteering web application"
  },
  
];

const entrepreneurshipAwards = [
  {
    id: 1,
    title: "Certified Entrepreneur",
    year: "2024",
    issuer: "50:50 Startups",
    description: "Completed 2-week startup program in Cyprus"
  },
  {
    id: 2,
    title: "Certified Entrepreneur",
    year: "2023",
    issuer: "MassChallenge Israel & Hasoub",
    description: "Completed Pre-accelerator program"
  }
];

export default function EducationSection() {
  return (
    <Section id="education" className="bg-dark-light">
      <SectionTitle subtitle="My Education" title="Academic Background" className="mb-12" />
      
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
        
        <div className="space-y-6">
          <div>
            <h3 className="flex items-center text-xl font-semibold mb-6">
              <FiAward className="text-primary mr-3" />
              Hackathons & Innovation
            </h3>
            
            <div className="card mb-6">
              <div className="space-y-6">
                {hackathonAwards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={index !== 0 ? "pt-6 border-t border-gray-800" : ""}
                  >
                    <h4 className="font-semibold mb-1">{award.title}</h4>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span className="mr-2">{award.issuer}</span>
                      <span className="text-gray-600">•</span>
                      <span className="ml-2">{award.year}</span>
                    </div>
                    <p className="text-sm text-gray-300">{award.description}</p>
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
              <h4 className="font-semibold mb-3">Mentorship & Community</h4>
              <p className="text-gray-400 text-sm">
                Mentor for hackathons and makeathons at Tsofen and Hasoub since 2018, contributing to the growth of tech innovation in the community.
              </p>
            </motion.div>
          </div>

          <div>
            <h3 className="flex items-center text-xl font-semibold mb-6">
              <FiAward className="text-primary mr-3" />
              Entrepreneurship
            </h3>
            
            <div className="card">
              <div className="space-y-6">
                {entrepreneurshipAwards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={index !== 0 ? "pt-6 border-t border-gray-800" : ""}
                  >
                    <h4 className="font-semibold mb-1">{award.title}</h4>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span className="mr-2">{award.issuer}</span>
                      <span className="text-gray-600">•</span>
                      <span className="ml-2">{award.year}</span>
                    </div>
                    <p className="text-sm text-gray-300">{award.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}