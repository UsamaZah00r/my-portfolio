import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiZap, FiTarget } from 'react-icons/fi'
import { FaBrain, FaLayerGroup, FaChartLine } from 'react-icons/fa'

const AIVisionSlide = () => {
  const visionPoints = [
    {
      icon: FiCode,
      title: "Intelligent Interfaces",
      description: "React components that adapt and learn from user behavior, creating personalized experiences"
    },
    {
      icon: FaLayerGroup,
      title: "Smart Backend Systems",
      description: "Node.js APIs enhanced with ML models for predictive analytics and automated decision making"
    },
    {
      icon: FiZap,
      title: "Real-time Intelligence",
      description: "WebSocket connections powered by AI for instant, context-aware responses and recommendations"
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
        <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
          AI Vision
        </h2>
        <p className="text-xl text-gray-300">Where MERN meets Machine Learning</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-3xl font-semibold mb-6 gradient-text">
              The Future is Intelligent
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I envision a world where traditional web applications evolve into intelligent systems 
              that understand, predict, and adapt. By combining the robustness of the MERN stack 
              with the power of AI, we can create applications that don't just respond—they anticipate.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <FiTarget className="w-5 h-5" />
              <span>Building the next generation of smart applications</span>
            </div>
          </div>

          <div className="space-y-4">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{point.title}</h4>
                  <p className="text-gray-300 text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative overflow-hidden">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity }
              }}
              className="absolute top-4 right-4 w-20 h-20 border-2 border-blue-400/30 rounded-full"
            />
            
            <div className="text-center mb-8">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.5)",
                    "0 0 60px rgba(147, 51, 234, 0.5)",
                    "0 0 30px rgba(236, 72, 153, 0.5)",
                    "0 0 60px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6"
              >
                <FaBrain className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-2xl font-semibold gradient-text mb-4">
                AI-Powered MERN
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-gray-300">Traditional Web Apps</span>
                <div className="w-16 h-2 bg-gray-600 rounded-full">
                  <div className="w-8 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-gray-300">AI-Enhanced Apps</span>
                <div className="w-16 h-2 bg-gray-600 rounded-full">
                  <motion.div
                    animate={{ width: ["50%", "100%", "50%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-2">
                <span className="text-white font-bold">MERN</span>
              </div>
              <span className="text-sm text-gray-400">Solid Foundation</span>
            </div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl text-gray-400"
            >
              +
            </motion.div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-2">
                <FaBrain className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-gray-400">AI Intelligence</span>
            </div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-3xl text-gray-400"
            >
              =
            </motion.div>
            
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-2"
              >
                <FaChartLine className="w-8 h-8 text-white" />
              </motion.div>
              <span className="text-sm text-gray-400">Smart Products</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            "The applications of tomorrow will be built today by developers who understand 
            that intelligence isn't just a feature—it's the foundation of exceptional user experiences."
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default AIVisionSlide
