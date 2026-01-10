import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentTech, setCurrentTech] = useState(0)

  const techStack = [
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiExpress, name: 'Express.js', color: '#000000' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const techInterval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % techStack.length)
    }, 800)

    return () => {
      clearInterval(interval)
      clearInterval(techInterval)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative"
          >
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-blue-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-4 border-purple-500/30 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={currentTech}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {React.createElement(techStack[currentTech].icon, {
                    className: "w-8 h-8",
                    style: { color: techStack[currentTech].color }
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold gradient-text">
              Usama Zahoor
            </h1>
            <p className="text-gray-400">
              Loading {techStack[currentTech].name}...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-64 mx-auto"
          >
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">{progress}%</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen