import React from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Navigation = ({ currentSlide, totalSlides, onNext, onPrev, onGoTo }) => {
  return (
    <>
      {/* Arrow Navigation */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full glass transition-all duration-300 ${
          currentSlide === 0 
            ? 'opacity-30 cursor-not-allowed' 
            : 'hover:glass-strong hover:shadow-lg hover:shadow-blue-500/20'
        }`}
      >
        <FiChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full glass transition-all duration-300 ${
          currentSlide === totalSlides - 1 
            ? 'opacity-30 cursor-not-allowed' 
            : 'hover:glass-strong hover:shadow-lg hover:shadow-blue-500/20'
        }`}
      >
        <FiChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed top-8 right-8 z-50 glass px-4 py-2 rounded-full text-sm font-medium"
      >
        {currentSlide + 1} / {totalSlides}
      </motion.div>

      {/* Keyboard Hints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-8 left-8 z-50 glass px-4 py-2 rounded-full text-xs text-gray-400"
      >
        Use ← → keys or swipe to navigate
      </motion.div>
    </>
  )
}

export default Navigation