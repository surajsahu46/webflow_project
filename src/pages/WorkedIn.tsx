import { motion } from 'framer-motion';
import React from 'react';

export default function WorkedIn() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Companies I've Worked With</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={company.image} 
                alt={company.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.role}</p>
                <p className="text-gray-500">{company.period}</p>
                <p className="mt-4">{company.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const companies = [
  {
    name: "Tech Innovators",
    role: "Senior Frontend Developer",
    period: "2020 - Present",
    description: "Led the development of multiple high-impact web applications using React and TypeScript.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800"
  },
  {
    name: "Creative Solutions",
    role: "UI/UX Developer",
    period: "2018 - 2020",
    description: "Designed and implemented user interfaces for enterprise clients.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800"
  }
];