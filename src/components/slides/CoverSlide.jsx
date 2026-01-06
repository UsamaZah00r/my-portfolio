import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiArrowDown } from "react-icons/fi" // Feather icons
import { FaBrain } from "react-icons/fa"             // Font Awesome Brain icon

const CoverSlide = () => {
  return (
    <div className="relative text-center space-y-8 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800">
      
      {/* Main animated title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="relative">
          {/* Floating circle animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-400/30 rounded-full"
          />
          <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Alex Chen
          </h1>
        </div>

        {/* Role & AI Tagline */}
        <div className="flex items-center justify-center space-x-4 text-xl text-gray-300">
          <FiCode className="w-6 h-6 text-blue-400" />
          <span>Software Engineer</span>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <span>AI Enthusiast</span>
          <FaBrain className="w-6 h-6 text-purple-400" />
        </div>
      </motion.div>

      {/* Subtitle paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed">
          Building the future with{' '}
          <span className="text-blue-400 font-semibold">intelligent systems</span>{' '}
          and{' '}
          <span className="text-purple-400 font-semibold">elegant code</span>
        </p>
      </motion.div>

      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-lg mx-auto"
      >
        <p className="text-lg text-gray-300 mb-4">
          From MERN Stack mastery to AI innovation
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Available for opportunities</span>
          </span>
        </div>
      </motion.div>

      {/* Scroll down arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <FiArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CoverSlide
