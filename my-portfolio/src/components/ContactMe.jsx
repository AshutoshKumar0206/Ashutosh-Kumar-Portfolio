import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-gray-800/50 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Email Me</p>
                  <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="text-white hover:text-primary transition-colors">
                    {`${import.meta.env.VITE_EMAIL}`}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <label className="text-sm text-gray-400 ml-1">Message</label>
              <textarea 
                rows="4"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
              <FaPaperPlane /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
