import React from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiTarget, FiTrendingUp, FiCode, FiDatabase, FiServer } from 'react-icons/fi'

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: "Full-Stack Development",
      description: "Expertise in MERN stack with focus on responsive UI design and scalable backend architecture",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiDatabase,
      title: "API Integration",
      description: "Skilled in building and integrating RESTful APIs with secure authentication and optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FiServer,
      title: "Performance Focus",
      description: "Committed to delivering high-performance applications with enhanced user engagement",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Passionate software engineer with hands-on experience in full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 gradient-text">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                Software Engineer with internship experience in full-stack web development using the MERN stack 
                and WordPress. Proven ability to design responsive user interfaces and build scalable web applications. 
                Skilled in integrating RESTful APIs and enhancing user experience with modern technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Strong commitment to continuous learning and delivering impactful software solutions that meet 
                both user needs and business objectives.
              </p>
            </div>

            <div className="glass rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Current Focus</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Advanced React patterns and state management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Node.js performance optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Cloud deployment and DevOps practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">AI integration in web applications</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-strong rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center flex-shrink-0`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed italic">
              "I believe in writing clean, maintainable code that not only solves problems but also 
              creates exceptional user experiences. Every project is an opportunity to learn, grow, 
              and contribute to the ever-evolving world of web development."
            </blockquote>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <span className="text-gray-400 font-medium text-sm sm:text-base">Usama Zahoor</span>
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About