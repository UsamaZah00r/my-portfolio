import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode, FiUsers, FiShield, FiCalendar } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: "Job Finder Web App",
      period: "Jun 2025 - Jul 2025",
      description: "A comprehensive full-stack job portal built with the MERN stack, featuring advanced authentication, role-based access control, and seamless communication between users.",
      longDescription: "Developed a full-stack job portal using the MERN stack featuring JWT authentication and role-based access control. Implemented dynamic job posting and tailored interfaces for employers and job seekers, enhancing user engagement.",
      features: [
        "JWT Authentication & Authorization",
        "Role-based access control for employers and job seekers",
        "Dynamic job posting and management system",
        "EmailJS integration for seamless communication",
        "Responsive design with modern UI/UX"
      ],
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      icon: FiUsers,
      color: "from-blue-500 to-cyan-500",
      highlights: ["Full-stack MERN", "JWT Auth", "Role-based Access", "EmailJS Integration"]
    },
    {
      title: "Derma Hospital Management System",
      period: "Aug 2025 - Sep 2025",
      description: "A comprehensive hospital management system designed to streamline healthcare operations with secure patient data management and real-time notifications.",
      longDescription: "Engineered a comprehensive hospital management system with MERN stack to streamline patient records, appointment scheduling, and billing. Implemented role-based access control to safeguard sensitive medical data.",
      features: [
        "Patient records and medical history management",
        "Appointment scheduling and management",
        "Billing and payment processing",
        "Role-based access control for medical staff",
        "Real-time notifications and alerts",
        "Cloud deployment for high availability"
      ],
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      icon: FiShield,
      color: "from-green-500 to-teal-500",
      highlights: ["Healthcare System", "Secure Data", "Real-time Notifications", "Cloud Deployed"]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Real-world applications built with the MERN stack, showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 sm:p-8 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <project.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-4">
                        <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 glass-strong rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technology Stack:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.2) + (techIndex * 0.05),
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center space-x-3 p-3 glass rounded-xl hover:glass-strong transition-all duration-300"
                        >
                          <tech.icon 
                            className="w-5 h-5" 
                            style={{ color: tech.color }}
                          />
                          <span className="text-gray-300 text-sm font-medium">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Project Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <motion.span
                          key={highlightIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (highlightIndex * 0.1) }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 text-sm bg-gradient-to-r ${project.color} rounded-full text-white font-medium`}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold gradient-text mb-4">
              Project Development Approach
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Each project demonstrates my commitment to building scalable, production-ready applications 
              using modern development practices. I focus on clean code architecture, user experience, 
              and implementing robust security measures to ensure reliable and maintainable solutions.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <FiGithub className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects