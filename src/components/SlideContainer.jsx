import React from 'react'
import { motion } from 'framer-motion'

const SlideContainer = ({ slide }) => {
  const SlideComponent = slide.component

  return (
    <div className="slide-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto px-8"
      >
        <SlideComponent />
      </motion.div>
    </div>
  )
}

export default SlideContainer