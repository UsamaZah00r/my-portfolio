import React from 'react'
import { motion } from 'framer-motion'

const ProgressIndicator = ({ currentSlide, totalSlides, onGoTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex space-x-3"
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onGoTo(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/50'
              : 'bg-white/20 hover:bg-white/40'
          }`}
        >
          <span className="sr-only">Go to slide {index + 1}</span>
        </motion.button>
      ))}
    </motion.div>
  )
}

export default ProgressIndicator