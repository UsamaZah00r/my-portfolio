import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      title: "Full-stack Developer",
      company: "Maaz Informatics",
      location: "Sargodha, Punjab, Pakistan",
      period: "Oct 2025 - Present",
      type: "Full-time",
      description: "Currently developing and maintaining full-stack MERN applications with focus on system reliability and efficiency.",
      achievements: [
        "Developed and maintained full-stack MERN applications, enhancing system reliability and efficiency",
        "Translated design wireframes into responsive, user-friendly interfaces, improving user satisfaction",
        "Built and integrated secure RESTful APIs with Node.js and Express.js to support backend operations",
        "Participated in all phases of the software development lifecycle, from planning to deployment, ensuring timely project delivery"
      ],
      color: "from-blue-500 to-cyan-500",
      current: true
    },
    {
      title: "Web Development Intern",
      company: "Rhombix Technologies",
      location: "Lahore",
      period: "Jul 2025 - Aug 2025",
      type: "Internship",
      description: "Gained hands-on experience in full-stack web development using the MERN stack and modern development practices.",
      achievements: [
        "Developed and deployed scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), improving application performance and user engagement",
        "Designed and implemented responsive user interfaces with React and Tailwind CSS, increasing cross-device compatibility",
        "Integrated RESTful APIs and collaborated with senior developers to optimize app features and functionality"
      ],
      color: "from-purple-500 to-pink-500",
      current: false
    }
  ]

  const leadership = {
    title: "Final Year Project Developer",
    project: "ProPath AI Project",
    description: "Successfully completed the Final Year Project, developing a comprehensive AI-powered career counseling mobile app that integrates real-time chat features and enhances user experience through an interactive assistant.",
    color: "from-green-500 to-teal-500"
  }

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Professional journey in full-stack development and software engineering
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-strong rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                        <FiBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-base sm:text-lg gradient-text font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30 flex-shrink-0"
                        >
                          Current
                        </motion.span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-1 glass rounded-md text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (achIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-2">
              Leadership & Projects
            </h3>
          </div>
          
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${leadership.color} flex items-center justify-center flex-shrink-0`}>
                <FiBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-lg sm:text-xl font-semibold text-white">{leadership.title}</h4>
                <p className="text-base sm:text-lg gradient-text font-medium">{leadership.project}</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {leadership.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-4">
              Professional Growth
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              My journey in software development has been marked by continuous learning and hands-on experience 
              with cutting-edge technologies. From internship to full-time development roles, I've consistently 
              delivered high-quality solutions while expanding my expertise in the MERN stack and modern web development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience