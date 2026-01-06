import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript,
  SiTailwindcss, SiPython, SiTensorflow, SiDocker, SiGit, SiAmazonaws
} from 'react-icons/si'
import { FaBrain, FaCode, FaServer, FaBolt } from 'react-icons/fa' // Correct FA icons

const SkillsSlide = () => {
  const skillCategories = [
    {
      title: "MERN Stack",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 90 },
        { name: "Express.js", icon: SiExpress, level: 85 },
        { name: "React", icon: SiReact, level: 95 },
        { name: "Node.js", icon: SiNodedotjs, level: 88 }
      ]
    },
    {
      title: "Frontend",
      icon: FaBolt,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "JavaScript", icon: SiJavascript, level: 92 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
        { name: "React Ecosystem", icon: SiReact, level: 88 }
      ]
    },
    {
      title: "Backend & DevOps",
      icon: FaServer,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js APIs", icon: SiNodedotjs, level: 87 },
        { name: "Docker", icon: SiDocker, level: 75 },
        { name: "AWS", icon: SiAmazonaws, level: 70 },
        { name: "Git", icon: SiGit, level: 90 }
      ]
    },
    {
      title: "AI & ML Journey",
      icon: FaBrain,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Python", icon: SiPython, level: 78 },
        { name: "TensorFlow", icon: SiTensorflow, level: 65 },
        { name: "ML Fundamentals", icon: FaBrain, level: 70 },
        { name: "AI Integration", icon: FaBrain, level: 75 }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Skills & Expertise
        </h2>
        <p className="text-xl text-gray-300">Technologies that power my vision</p>
      </motion.div>

      {/* Skill categories */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            {/* Category header */}
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
            </div>

            {/* Individual skills */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-5 h-5 text-gray-300" />
                    <span className="text-gray-200">{skill.name}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-8">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-12 text-center"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-gray-300">
            <span className="gradient-text font-semibold">Always learning</span> • 
            Currently exploring: LangChain, Vector Databases, and Advanced ML Architectures
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default SkillsSlide
