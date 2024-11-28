import { motion } from 'framer-motion';
import React from 'react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800"
            alt="Profile"
            className="rounded-lg shadow-xl"
          />
          <div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-gray-600 mb-4">
              I'm a creative developer passionate about building beautiful digital experiences. With expertise in both design and development, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or seeking inspiration in nature.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">{skill.category}</h3>
              <ul className="text-gray-600 space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

const skills = [
  {
    category: "Development",
    items: ["React", "JavaScript", "TypeScript", "Node.js", "Next.js"]
  },
  {
    category: "Design",
    items: ["UI/UX Design", "Figma", "Webflow", "Framer"]
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "GitLab", "AWS"]
  }
];