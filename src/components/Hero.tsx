import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="max-w-3xl text-center relative z-10">
        <motion.h1 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Creative Developer
        </motion.h1>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          Crafting digital experiences through code and design
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="#work" 
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}