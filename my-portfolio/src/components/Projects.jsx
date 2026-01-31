import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiFlask, SiTailwindcss, SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "CollegeHub",
      description: "Online Assignment Submission Portal with plagiarism detection for 200+ students",
      duration: "Dec 2024 - April 2025",
      tech: ["ReactJS", "Node.js", "MongoDB", "Flask", "Tailwind CSS"],
      icons: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiFlask />, <SiTailwindcss/>],
      points: [
        "Engineered assignment creation, submission and plagiarism detection system",
        "Designed high-performance RESTful APIs for CRUD operations",
        "Implemented JWT authentication with bcrypt",
        "Integrated NLP-based AI model with Flask APIs"
      ],
      links: {
        website: `${import.meta.env.VITE_LINK}`,
        frontend: `${import.meta.env.VITE_FRONTEND_COLLEGEHUB}`,
        backend: `${import.meta.env.VITE_BACKEND_COLLEGEHUB}`
      }
    },
    {
      title: "Madhav",
      description: "Madhav is an AI voice assistant designed to provide relief from depression by offering empathetic support and helpful guidance. It shares insights from Sreemad Bhagwad Gita.",
      duration: "March 2024 - March 2024",
      tech: ["HTML", "CSS", "Javascript", "Flask"],
      icons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiFlask />],
      points: [
        "Spearheaded the creation of Madhav, an AI Voice Assistant designed to deliver empathetic mental health support, offering supportive assistance for individuals struggling with Depression and promoting overall mental well-being.",
        "Designed high-performance RESTful APIs for CRUD operations",
        "Implemented RESTful APIs using Flask for backend integration in an AI application, enabling seamless communication between Frontend and NLP based AI model.",
      ],
      links: {
        frontend: `${import.meta.env.VITE_FRONTEND_MADHAV}`,
        backend: `${import.meta.env.VITE_FRONTEND_MADHAV}`
      }
    }
  ];

  return (
    <section className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-card"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  {project.duration}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-1">
                    {project.icons[i]}
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                {project.links.website && (<a href={project.links.website} className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                )}
                {project.links.frontend && (<a href={project.links.frontend} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <FaGithub /> Frontend
                </a>)
                }
                {project.links.backend && (<a href={project.links.backend} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <FaGithub /> Backend
                </a>)
                }
              </div>
            </motion.div>
          ))}
         
          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="timeline-card lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">LeetCode & Codeforces</h4>
                  <p className="text-gray-300">Solved 1000+ problems</p>
                  <p className="text-sm text-gray-400">Leetcode: Global Rank 958 in Weekly Contest 456 (30k+ participants)</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">Hack-A-BIT Hackathon</h4>
                  <p className="text-gray-300">Top 10 among 50+ teams</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">GirlScript Summer of Code (GSSOC)
                  </h4>
                  <p className="text-gray-300">GSSOC 24 Contributor</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary">Coding Profiles</h4>
                  <div className="flex gap-4 mt-2">
                    <a href={`${import.meta.env.VITE_LEETCODE}`} className="px-4 py-2 bg-yellow-600/20 rounded-lg hover:bg-yellow-600/30">
                      LeetCode
                    </a>
                    <a href={`${import.meta.env.VITE_CODEFORCES}`} className="px-4 py-2 bg-red-600/20 rounded-lg hover:bg-red-600/30">
                      Codeforces
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;