import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiTailwindcss, SiGit, SiGithub, SiPython, SiMysql, SiPostgresql, SiJsonwebtokens
} from 'react-icons/si'
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, level: 88, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, level: 85, color: "#3178C6" },
        { name: "HTML5", icon: SiHtml5, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, level: 90, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "#06B6D4" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: FiServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 88, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 90, color: "#000000" },
        { name: "Python", icon: SiPython, level: 82, color: "#3776AB" },
        { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, level: 83, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "#4169E1" }
      ]
    },
    {
      title: "Tools & Security",
      icon: FiTool,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: SiGit, level: 88, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, level: 90, color: "#181717" },
        { name: "JWT Auth", icon: SiJsonwebtokens, level: 85, color: "#000000" },
        { name: "Postman", icon: FiTool, level: 85, color: "#FF6C37" }
      ]
    }
  ]

  const additionalSkills = [
    "React Native", "TypeScript", "Python", "SQL", "RESTful APIs",
    "JWT Authentication", "RBAC", "Database Design", "MVC Architecture",
    "CRUD Operations", "Agile Methodology", "Version Control",
    "Responsive Design", "Problem Solving", "Team Collaboration"
  ]

  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive expertise in modern web development technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-3 sm:mr-4`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: skill.color }} />
                        <span className="text-gray-200 font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-6">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-2 sm:px-4 sm:py-2 glass-strong rounded-full text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              <span className="gradient-text font-semibold">Continuously learning</span> and 
              staying updated with the latest technologies and best practices in web development. 
              Currently exploring advanced React patterns, microservices architecture, and cloud technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills