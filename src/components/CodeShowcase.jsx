import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCopy, FiCheck, FiGithub } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si'

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const codeExamples = [
    {
      title: "React Custom Hook",
      language: "JavaScript",
      icon: SiReact,
      color: "from-blue-500 to-cyan-500",
      description: "Custom React hook for authentication management",
      code: `import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const response = await fetch('/api/auth/validate', {
          headers: { Authorization: 'Bearer ' + token }
        })
        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    
    if (response.ok) {
      const { token, user } = await response.json()
      localStorage.setItem('token', token)
      setUser(user)
      return { success: true }
    }
    return { success: false }
  }

  return { user, loading, login }
}`
    },
    {
      title: "Node.js Middleware",
      language: "JavaScript", 
      icon: SiNodedotjs,
      color: "from-green-500 to-emerald-500",
      description: "Express middleware for JWT authentication",
      code: `const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
      return res.status(401).json({ 
        error: 'Access token required' 
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.userId)
    
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid token' 
      })
    }

    req.user = user
    next()
  } catch (error) {
    return res.status(403).json({ 
      error: 'Token verification failed' 
    })
  }
}

module.exports = { authenticateToken }`
    },
    {
      title: "MongoDB Aggregation",
      language: "JavaScript",
      icon: SiMongodb,
      color: "from-green-600 to-teal-500", 
      description: "Complex aggregation pipeline for analytics",
      code: `const getJobAnalytics = async (req, res) => {
  try {
    const { startDate, endDate } = req.query

    const pipeline = [
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }
      },
      {
        $group: {
          _id: '$category',
          totalJobs: { $sum: 1 },
          avgSalary: { $avg: '$salary' },
          applications: { $sum: '$applicationCount' }
        }
      },
      {
        $sort: { totalJobs: -1 }
      }
    ]

    const analytics = await Job.aggregate(pipeline)
    
    res.json({
      success: true,
      data: analytics
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Analytics generation failed'
    })
  }
}`
    }
  ]

  const copyToClipboard = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <section className="section-padding bg-slate-900/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Code Showcase
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Real-world code examples demonstrating clean architecture and best practices
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {codeExamples.map((example, index) => {
            const IconComponent = example.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${example.color} text-white shadow-lg`
                    : 'glass hover:glass-strong text-gray-300 hover:text-white'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{example.title}</span>
                <span className="sm:hidden">{example.language}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Code Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${codeExamples[activeTab].color} flex items-center justify-center`}>
                  {React.createElement(codeExamples[activeTab].icon, {
                    className: "w-5 h-5 text-white"
                  })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {codeExamples[activeTab].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {codeExamples[activeTab].description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard(codeExamples[activeTab].code, activeTab)}
                  className="flex items-center space-x-2 px-3 py-2 glass rounded-lg hover:glass-strong transition-all duration-300"
                >
                  {copiedIndex === activeTab ? (
                    <>
                      <FiCheck className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Code Block */}
            <div className="relative">
              <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
                <code className="text-gray-300 font-mono">
                  {codeExamples[activeTab].code}
                </code>
              </pre>
              
              {/* Language Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-400">
                  {codeExamples[activeTab].language}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
          >
            <FiGithub className="w-5 h-5" />
            <span>View All Code on GitHub</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CodeShowcase