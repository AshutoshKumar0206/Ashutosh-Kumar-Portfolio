import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiJavascript, SiPython, SiReact, 
  SiNodedotjs, SiMongodb, SiExpress, SiMysql,
  SiTailwindcss, SiFlask, SiPostman, SiGit,
  SiGithub, SiJira
} from 'react-icons/si';

const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" }
    ],
    "Technologies & Frameworks": [
      { name: "ReactJS", icon: <SiReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Flask", icon: <SiFlask />, color: "#FFFFFF" }
    ],
    "Developer Tools": [
      { name: "VS Code", icon: "💻", color: "#007ACC" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Jira", icon: <SiJira />, color: "#0052CC" }
    ]
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category}</h3>
              
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-xl"
                      style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;