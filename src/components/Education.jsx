import React from 'react'
import { motion } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin, FiAward, FiTrendingUp } from 'react-icons/fi'

const Education = () => {
  const education = {
    degree: "Bachelor of Science in Software Engineering",
    institution: "The University of Lahore - Sargodha",
    period: "Jul 2025",
    location: "Sargodha, Punjab",
    status: "Graduated",
    description: "Comprehensive program covering software development principles, algorithms, data structures, and modern programming practices with focus on practical application and industry-relevant skills."
  }

  const achievements = [
    {
      title: "Final Year Project",
      subtitle: "ProPath AI - Career Counseling App",
      description: "Developed a comprehensive AI-powered career counseling mobile application with real-time chat features and interactive assistant capabilities",
      icon: FiAward,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Academic Excellence",
      subtitle: "Software Engineering Focus",
      description: "Strong foundation in software development lifecycle, object-oriented programming, database design, and web technologies",
      icon: FiTrendingUp,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Web Development Technologies",
    "Software Engineering Principles",
    "Computer Networks",
    "Mobile Application Development",
    "Software Testing & Quality Assurance",
    "Project Management",
    "Human-Computer Interaction"
  ]

  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Education
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Academic foundation in software engineering and computer science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <FiBook className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-base sm:text-lg gradient-text font-medium mb-4">
                    {education.institution}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{education.location}</span>
                    </div>
                    <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                      {education.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {education.description}
              </p>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-blue-300 font-medium text-sm mb-2">
                        {achievement.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-semibold gradient-text mb-6">
                Core Coursework
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Comprehensive curriculum covering fundamental and advanced topics in software engineering, 
                providing a strong theoretical foundation and practical skills for modern software development.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {coursework.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 glass rounded-lg hover:glass-strong transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Academic Highlights
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Strong focus on practical software development and industry best practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Hands-on experience with modern programming languages and frameworks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Collaborative projects and team-based software development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">Integration of AI technologies in final year project</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold gradient-text mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My academic journey has provided a solid foundation in software engineering principles, 
              which I continue to build upon through practical experience, online courses, and staying 
              current with emerging technologies in web development and software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education