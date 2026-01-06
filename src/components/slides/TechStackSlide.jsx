import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript,
  SiTailwindcss, SiPython, SiTensorflow, SiDocker, SiGit, SiAmazonaws,
  SiPostgresql, SiRedis, SiGraphql, SiNextdotjs, SiVite, SiFramer
} from 'react-icons/si'

const TechStackSlide = () => {
  const techStacks = [
    {
      category: "Frontend",
      color: "from-blue-400 to-cyan-400",
      techs: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Vite", icon: SiVite, color: "#646CFF" }
      ]
    },
    {
      category: "Backend",
      color: "from-green-400 to-emerald-400",
      techs: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" }
      ]
    },
    {
      category: "AI & ML",
      color: "from-purple-400 to-pink-400",
      techs: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
      ]
    },
    {
      category: "DevOps",
      color: "from-orange-400 to-red-400",
      techs: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F05032" }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
          Tech Stack
        </h2>
        <p className="text-xl text-gray-300">Tools that bring ideas to life</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStacks.map((stack, stackIndex) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: stackIndex * 0.2 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="text-center mb-6">
              <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${stack.color} text-white font-semibold text-sm mb-4`}>
                {stack.category}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stack.techs.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (stackIndex * 0.2) + (techIndex * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="flex flex-col items-center p-4 glass rounded-xl hover:glass-strong transition-all duration-300 cursor-pointer group"
                >
                  <tech.icon 
                    className="w-8 h-8 mb-2 group-hover:animate-bounce" 
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-gray-300 text-center font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-16"
      >
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold gradient-text mb-4">
            The Perfect Stack Combination
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My approach combines the reliability of the MERN stack with the innovation of AI technologies. 
            This unique blend allows me to build applications that are not only robust and scalable, 
            but also intelligent and forward-thinking.
          </p>
          
          <div className="flex justify-center mt-8 space-x-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
            >
              <SiReact className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex items-center text-2xl text-gray-400">+</div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center"
            >
              <SiPython className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex items-center text-2xl text-gray-400">=</div>
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                  "0 0 40px rgba(236, 72, 153, 0.8)",
                  "0 0 20px rgba(236, 72, 153, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">AI</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TechStackSlide