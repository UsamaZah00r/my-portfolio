import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiMessageCircle, FiMapPin } from 'react-icons/fi'

const ContactSlide = () => {
  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "alex.chen@example.com",
      href: "mailto:alex.chen@example.com",
      color: "from-blue-500 to-cyan-500",
      description: "Let's discuss your next project"
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/alexchen",
      href: "https://github.com/alexchen",
      color: "from-gray-600 to-gray-800",
      description: "Explore my code and contributions"
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alexchen",
      href: "https://linkedin.com/in/alexchen",
      color: "from-blue-600 to-blue-800",
      description: "Connect professionally"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300">Ready to build something amazing together?</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="glass-strong rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Available for Opportunities</h3>
                <p className="text-gray-400 text-sm">Open to full-time, contract, and collaboration</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-400" />
                <span>San Francisco Bay Area (Remote-friendly)</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMessageCircle className="w-5 h-5 text-purple-400" />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">What I'm Looking For</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Full-stack development roles</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>AI/ML integration projects</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Innovative startup environments</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Technical leadership opportunities</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + (index * 0.2) }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="block glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:animate-pulse`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                    {method.label}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{method.description}</p>
                  <p className="text-gray-300 font-mono text-sm">{method.value}</p>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold gradient-text mb-6">
            Ready to Start a Conversation?
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Whether you're looking to build a new application, enhance an existing system with AI, 
            or just want to discuss the future of web development, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FiMail className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-strong rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="text-center mt-12"
      >
        <p className="text-gray-500 text-sm">
          Thank you for taking the time to explore my portfolio. Let's build something extraordinary together.
        </p>
      </motion.div>
    </div>
  )
}

export default ContactSlide