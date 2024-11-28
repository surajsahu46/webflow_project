import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">JW</Link>
        <div className="space-x-8">
          <Link to="/work" className="hover:text-gray-600 transition-colors">Work</Link>
          <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
        </div>
      </nav>
    </motion.header>
  );
}