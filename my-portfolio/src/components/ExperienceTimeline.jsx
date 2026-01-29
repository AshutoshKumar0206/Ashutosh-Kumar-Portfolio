import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiAngular, SiDocker, SiPostman, SiMongodb, SiJira, SiGithub, SiElasticsearch, SiNodedotjs } from 'react-icons/si';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "SWE Intern",
      company: "CreditSea",
      location: "Raipur, Chhattisgarh",
      date: "Dec 2025 - Present",
      icon: <FaBriefcase />,
      color: "#10B981",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Postman", "GitHub"],
      points: [
        "Worked on UI development for Project Connectfy, building responsive interfaces",
        "Contributed to end-to-end feature development for Project Paisa108",
        "Implemented webhooks and APIs for CreditSea Admin Dashboard"
      ]
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "OGGANGS",
      location: "Remote",
      date: "May 2024 - June 2024",
      icon: <FaBriefcase />,
      color: "#8B5CF6",
      tech: ["AngularJS", "Node.js", "MongoDB", "Docker", "Elastic Search", "Jira", "GitHub"],
      points: [
        "Contributed to EpicECart and OGGANGS platform development",
        "Reduced operational costs by 15% through backend optimization",
        "Improved performance by 20% with 30% reduction in load times"
      ]
    },
    {
      title: "B.Tech CSE",
      company: "Birla Institute of Technology, Mesra",
      location: "Ranchi, Jharkhand",
      date: "Nov 2022 - June 2026",
      icon: <FaGraduationCap />,
      color: "#3B82F6",
      tech: ["CGPA: 8.07"],
      points: [
        "Relevant Coursework: Data Structures, Algorithms, DBMS, OS, OOP, Computer Networks, Software Engineering"
      ]
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      "Next.js": <SiNextdotjs className="inline mr-1" />,
      "TypeScript": <SiTypescript className="inline mr-1 text-[#3178C6]" />,
      "AngularJS": <SiAngular className="inline mr-1 text-[#E23237]" />,
      "Docker": <SiDocker className="inline mr-1 text-[#0052CC]" />,
      "Postman": <SiPostman className="inline mr-1 text-[#FF6C37]" />,
      "Jira": <SiJira className="inline mr-1 text-[#0052CC]" />,
      "MongoDB": <SiMongodb className="inline mr-1 text-[#47A248]" />,
      "GitHub": <SiGithub className="inline mr-1" />,
      "Elastic Search": <SiElasticsearch className="inline mr-1 text-[#47A248]" />,
      "Node.js": <SiNodedotjs className="inline mr-1 text-[#339933]" />,

    };
    return icons[tech] || null;
  };

  return (
    <section className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white mb-16">Experience & Education</h2>
        
        <VerticalTimeline lineColor="#334155">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#1E293B', 
                color: '#fff',
                border: '1px solid #334155',
                borderRadius: '12px'
              }}
              contentArrowStyle={{ borderRight: '7px solid #1E293B' }}
              date={exp.date}
              dateClassName="text-gray-300"
              iconStyle={{ background: exp.color, color: '#fff' }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg text-primary mb-2">
                {exp.company}
              </h4>
              <p className="text-gray-400 mb-3">{exp.location}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center">
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceTimeline;