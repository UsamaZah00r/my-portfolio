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
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Profile Picture Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <div className="relative">
              {/* Profile Picture Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
              >
                {/* Animated Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-slate-950"></div>
                </motion.div>
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
                  <img
                    src="/assets/images/profile.png"
                    alt="Usama Zahoor - MERN Stack Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.target.src = `https://ui-avatars.com/api/?name=Usama+Zahoor&size=400&background=1e293b&color=ffffff&bold=true&format=png`
                    }}
                  />
                </div>
                
                {/* Status Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-950 shadow-lg"
                  title="Available for opportunities"
                />
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <SiReact className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <SiNodedotjs className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-2 lg:col-span-2"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
              >
                <span className="gradient-text">Usama</span>
                <br />
                <span className="text-white">Zahoor</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start space-x-4 text-lg sm:text-xl text-gray-300"
              >
                <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span>MERN Stack Developer</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Software Engineer with expertise in full-stack web development using the MERN stack. 
              Passionate about building scalable web applications and delivering impactful software solutions 
              with a focus on user experience and performance optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
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
              transition={{ duration: 0.8, delay: 1.2 }}
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

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.6 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center p-3 glass rounded-xl hover:glass-strong transition-all duration-300 cursor-pointer group"
                  title={tech.name}
                >
                  <tech.icon 
                    className="w-6 h-6 group-hover:animate-pulse" 
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-gray-400 mt-1 font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero