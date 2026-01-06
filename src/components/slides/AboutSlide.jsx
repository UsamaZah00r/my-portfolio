import React from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiTarget, FiTrendingUp } from 'react-icons/fi'

const AboutSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
          About Me
        </h2>
        <p className="text-xl text-gray-300">The journey from code to intelligence</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="glass-strong rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:animate-pulse">
            <FiUser className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Engineering Mindset</h3>
          <p className="text-gray-300 leading-relaxed">
            I approach problems with systematic thinking, clean architecture, and a passion for 
            writing maintainable code that scales beautifully.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-strong rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:animate-pulse">
            <FiTarget className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">MERN Foundation</h3>
          <p className="text-gray-300 leading-relaxed">
            Deep expertise in MongoDB, Express, React, and Node.js. I've built full-stack 
            applications that handle real-world complexity with elegance.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-strong rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center group-hover:animate-pulse">
            <FiTrendingUp className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-green-300">AI Transition</h3>
          <p className="text-gray-300 leading-relaxed">
            Currently diving deep into machine learning, neural networks, and AI integration. 
            The future is intelligent, and I'm building it.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 text-center"
      >
        <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-lg text-gray-200 leading-relaxed">
            "I believe the most powerful applications are born at the intersection of 
            <span className="gradient-text font-semibold"> solid engineering principles</span> and 
            <span className="gradient-text font-semibold"> cutting-edge AI capabilities</span>. 
            My mission is to bridge that gap and create software that doesn't just work—it thinks."
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutSlide