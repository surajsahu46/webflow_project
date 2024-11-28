import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      whileHover={{ y: -10 }}
      className="block group"
    >
      <div className="overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.a>
  );
}