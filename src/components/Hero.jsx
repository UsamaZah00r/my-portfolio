import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiServer, FiDownload, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si'

const Hero = () => {
  const techIcons = [
    { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { icon: SiExpress, color: '#000000', name: 'Express.js' },
    { icon: SiReact, color: '#61DAFB', name: 'React' },
    { icon: SiNodedotjs, color: '#339933', name: 'Node.js' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20 sm:pt-24">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                <span className="gradient-text">Usama</span>
                <br />
                <span className="text-white">Zahoor</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start space-x-4 text-lg sm:text-xl text-gray-300"
              >
                <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span>MERN Stack Developer</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Software Engineer with expertise in full-stack web development using the MERN stack. 
              Passionate about building scalable web applications and delivering impactful software solutions 
              with a focus on user experience and performance optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 glass-strong rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 justify-center lg:justify-start"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <FiMapPin className="w-4 h-4" />
                <span>Sargodha, Punjab</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <FiPhone className="w-4 h-4" />
                <span>+92 317 8123298</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 border-2 border-blue-400/30 rounded-full"
              />
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-4">
                  MERN Stack Expertise
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Full-stack development with modern technologies
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.2 + (index * 0.2),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="flex flex-col items-center p-4 sm:p-6 glass rounded-xl hover:glass-strong transition-all duration-300 cursor-pointer group"
                  >
                    <tech.icon 
                      className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-3 group-hover:animate-bounce" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs sm:text-sm text-gray-300 text-center font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="mt-6 sm:mt-8 text-center"
              >
                <div className="flex items-center justify-center space-x-4 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero