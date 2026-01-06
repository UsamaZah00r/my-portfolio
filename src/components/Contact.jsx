import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiDownload, FiSend, FiCheck, FiX } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'

const Contact = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.publicKey
      )

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        form.current.reset()
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at usamazahoor216@gmail.com'
      })
    } finally {
      setIsLoading(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "usamazahoorchadhar54@gmail.com",
      href: "mailto:usamazahoorchadhar54@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+92 317 8123298",
      href: "tel:+923178123298",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Sargodha, Punjab",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/usama-zahoor",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/usamazahoor",
      color: "from-gray-600 to-gray-800"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to collaborate on your next project? Let's build something amazing together
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
              <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations. Whether you're looking for a full-stack developer, 
                need help with a MERN stack project, or just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass rounded-xl hover:glass-strong transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:animate-pulse flex-shrink-0`}>
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-400 font-medium">{contact.label}</p>
                      <p className="text-white font-semibold text-sm sm:text-base break-all">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
                What I'm Looking For
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Full-stack development opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">MERN stack projects and collaborations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Remote or hybrid work arrangements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Innovative startup environments</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-6">
                Quick Message
              </h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                {/* Hidden field for destination email */}
                <input type="hidden" name="to_email" value="usamazahoor216@gmail.com" />
                
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center space-x-3 ${
                      status.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <FiCheck className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FiX className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                    placeholder="Project collaboration"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center space-x-3 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 glass-strong rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
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
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Available for new opportunities</span>
            </div>
            
            <h3 className="text-2xl font-semibold gradient-text mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about creating innovative web solutions and would love to contribute 
              to your team's success. Let's discuss how we can bring your ideas to life with 
              modern web technologies and best practices.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Usama Zahoor. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact