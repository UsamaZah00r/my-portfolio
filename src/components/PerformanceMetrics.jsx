import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiZap, FiShield, FiUsers, FiCode, FiDatabase, FiServer, FiGlobe } from 'react-icons/fi'

const PerformanceMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({})

  const metrics = [
    {
      icon: FiZap,
      label: "Page Load Speed",
      value: 98,
      unit: "%",
      description: "Lighthouse Performance Score",
      color: "from-yellow-500 to-orange-500",
      improvement: "+15%"
    },
    {
      icon: FiShield,
      label: "Security Score",
      value: 100,
      unit: "%",
      description: "OWASP Security Standards",
      color: "from-green-500 to-emerald-500",
      improvement: "A+"
    },
    {
      icon: FiUsers,
      label: "User Satisfaction",
      value: 96,
      unit: "%",
      description: "Client Feedback Rating",
      color: "from-blue-500 to-cyan-500",
      improvement: "+8%"
    },
    {
      icon: FiCode,
      label: "Code Quality",
      value: 94,
      unit: "%",
      description: "SonarQube Analysis",
      color: "from-purple-500 to-pink-500",
      improvement: "A"
    },
    {
      icon: FiDatabase,
      label: "Database Efficiency",
      value: 92,
      unit: "%",
      description: "Query Optimization",
      color: "from-green-600 to-teal-500",
      improvement: "+25%"
    },
    {
      icon: FiServer,
      label: "API Response Time",
      value: 150,
      unit: "ms",
      description: "Average Response Time",
      color: "from-blue-600 to-indigo-500",
      improvement: "-40%"
    },
    {
      icon: FiGlobe,
      label: "SEO Score",
      value: 95,
      unit: "%",
      description: "Search Engine Optimization",
      color: "from-pink-500 to-rose-500",
      improvement: "+12%"
    },
    {
      icon: FiTrendingUp,
      label: "Conversion Rate",
      value: 87,
      unit: "%",
      description: "User Goal Completion",
      color: "from-indigo-500 to-purple-500",
      improvement: "+18%"
    }
  ]

  const achievements = [
    {
      title: "Performance Optimization",
      description: "Reduced application load time by 60% through code splitting and lazy loading",
      impact: "60% faster",
      icon: FiZap
    },
    {
      title: "Database Optimization",
      description: "Improved query performance by implementing efficient indexing strategies",
      impact: "3x faster queries",
      icon: FiDatabase
    },
    {
      title: "Security Implementation",
      description: "Implemented comprehensive security measures including JWT, CORS, and input validation",
      impact: "Zero vulnerabilities",
      icon: FiShield
    },
    {
      title: "User Experience",
      description: "Enhanced user interface resulting in improved user engagement and satisfaction",
      impact: "40% more engagement",
      icon: FiUsers
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {}
      metrics.forEach((metric, index) => {
        setTimeout(() => {
          animated[index] = metric.value
          setAnimatedValues(prev => ({ ...prev, ...animated }))
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const animateValue = (start, end, duration, callback) => {
    let startTime = null
    const step = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const value = Math.floor(progress * (end - start) + start)
      callback(value)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  return (
    <section className="section-padding bg-slate-900/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Performance Metrics
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Measurable results and technical achievements across projects
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="mb-2">
                <motion.span
                  className="text-2xl sm:text-3xl font-bold gradient-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {animatedValues[index] || 0}{metric.unit}
                </motion.span>
                <div className={`text-xs font-semibold mt-1 px-2 py-1 rounded-full bg-gradient-to-r ${metric.color} bg-opacity-20 text-white inline-block`}>
                  {metric.improvement}
                </div>
              </div>
              
              <h3 className="text-sm font-semibold text-white mb-1">
                {metric.label}
              </h3>
              <p className="text-xs text-gray-400">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold gradient-text text-center mb-8">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-strong rounded-xl p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {achievement.title}
                      </h4>
                      <span className="text-sm font-bold text-green-400">
                        {achievement.impact}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold gradient-text mb-4">
              Performance-First Development
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I believe that great software is not just about functionality—it's about delivering 
              exceptional performance, security, and user experience. Every line of code is written 
              with optimization in mind, ensuring scalable and maintainable solutions.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 glass rounded-xl">
                <div className="text-2xl font-bold gradient-text mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="p-4 glass rounded-xl">
                <div className="text-2xl font-bold gradient-text mb-1">&lt;2s</div>
                <div className="text-sm text-gray-400">Load Time</div>
              </div>
              <div className="p-4 glass rounded-xl">
                <div className="text-2xl font-bold gradient-text mb-1">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PerformanceMetrics