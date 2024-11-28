import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with real-time inventory",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      link: "/work/ecommerce"
    },
    {
      title: "Healthcare Dashboard",
      description: "Interactive analytics dashboard for healthcare providers",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800",
      link: "/work/healthcare"
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform for creative professionals",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800",
      link: "/work/social"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning platform for business intelligence",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
      link: "/work/analytics"
    }
  ];

  return (
    <div>
      <Hero />
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}