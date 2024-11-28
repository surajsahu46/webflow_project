import { motion } from 'framer-motion';
import React from 'react';

export default function Contact() {
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
          className="bg-white rounded-lg shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through any of these channels.
              </p>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 text-gray-600 hover:text-gray-900"
                  >
                    <span className="text-xl">{method.icon}</span>
                    <span>{method.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=800"
                alt="Contact"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const contactMethods = [
  {
    icon: "📧",
    text: "hello@example.com",
    link: "mailto:hello@example.com"
  },
  {
    icon: "🐦",
    text: "@username",
    link: "https://twitter.com/username"
  },
  {
    icon: "💼",
    text: "LinkedIn",
    link: "https://linkedin.com/in/username"
  }
];