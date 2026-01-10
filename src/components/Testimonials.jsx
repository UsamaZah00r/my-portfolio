import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageCircle } from 'react-icons/fi'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Usama delivered exceptional work on our hospital management system. His attention to detail and technical expertise made the project a huge success. The system is now being used by multiple departments seamlessly.",
      rating: 5,
      project: "Derma Hospital Management System"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working with Usama on our job portal was fantastic. He understood our requirements perfectly and delivered a robust, scalable solution. His MERN stack expertise is truly impressive.",
      rating: 5,
      project: "Job Finder Web App"
    },
    {
      name: "Emily Rodriguez",
      role: "Technical Lead",
      company: "Digital Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Usama's code quality and problem-solving skills are outstanding. He consistently delivers clean, maintainable code and is always ready to go the extra mile to ensure project success.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "HealthTech Pro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The authentication system Usama built for us is rock-solid. His understanding of security best practices and JWT implementation exceeded our expectations. Highly recommended!",
      rating: 5,
      project: "Healthcare Dashboard"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
            Client Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-strong rounded-2xl p-8 sm:p-12"
              >
                <div className="text-center mb-8">
                  <FiMessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-blue-400 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Project: {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 glass-strong rounded-full hover:glass transition-all duration-300"
            >
              <FiChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 glass-strong rounded-full hover:glass transition-all duration-300"
            >
              <FiChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials