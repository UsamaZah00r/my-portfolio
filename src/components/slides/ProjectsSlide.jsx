import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaCode, FaBrain, FaDatabase, FaShoppingCart } from 'react-icons/fa'

const ProjectsSlide = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with real-time inventory, payment processing, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      icon: FaShoppingCart,
      color: "from-blue-500 to-cyan-500",
      highlights: ["Real-time updates", "Payment integration", "Admin analytics"]
    },
    {
      title: "Task Management API",
      description: "RESTful API with JWT authentication, role-based access, and comprehensive testing suite",
      tech: ["Express.js", "MongoDB", "JWT", "Jest"],
      icon: FaDatabase,
      color: "from-purple-500 to-pink-500",
      highlights: ["JWT Auth", "Role-based access", "95% test coverage"]
    },
    {
      title: "AI Chat Interface",
      description: "React-based chat application integrating OpenAI API with context-aware conversations",
      tech: ["React", "OpenAI API", "WebSocket", "Tailwind"],
      icon: FaBrain,
      color: "from-green-500 to-teal-500",
      highlights: ["AI Integration", "Real-time chat", "Context memory"]
    },
    {
      title: "Code Review Tool",
      description: "Developer tool for automated code analysis and team collaboration with GitHub integration",
      tech: ["TypeScript", "GitHub API", "Docker", "PostgreSQL"],
      icon: FaCode,
      color: "from-orange-500 to-red-500",
      highlights: ["GitHub integration", "Automated analysis", "Team collaboration"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-300">Building solutions that matter</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:animate-pulse`}>
                <project.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                >
                  <FiGithub className="w-5 h-5 text-gray-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                >
                  <FiExternalLink className="w-5 h-5 text-gray-300" />
                </motion.button>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300 border border-white/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + (idx * 0.1) }}
                    className={`px-3 py-1 text-sm bg-gradient-to-r ${project.color} rounded-full text-white font-medium`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 text-center"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-gray-300 mb-4">
            Each project represents a step forward in my journey from traditional web development to AI-powered applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View All Projects on GitHub
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectsSlide
