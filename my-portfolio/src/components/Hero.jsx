import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileDownload, FaFilePdf } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold">
              AK
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ashutosh Kumar
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8">
            Full Stack Developer, Software Engineer
          </p>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            BTech Computer Science at BIT Mesra | Passionate about building scalable web applications and solving complex problems
          </p>
          
          {/* Contact Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors">
              <FaEnvelope className="text-xl" />
            </a>
            <a href={`tel:${import.meta.env.VITE_NUMBER}`} className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors">
              <FaPhone className="text-xl" />
            </a>
            <a href={`${import.meta.env.VITE_LINKEDIN}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href={`${import.meta.env.VITE_GITHUB}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a 
              href={`${import.meta.env.VITE_RESUME}`} 
              target="_blank" 
              className="flex items-center gap-2 px-5 py-3 bg-primary rounded-full font-bold text-sm hover:scale-105 transition-transform"
            >
              <FaFilePdf /> CV
            </a>
          </div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16"
          >
            <div className="text-gray-500">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto mt-2 flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;