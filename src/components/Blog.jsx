import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiArrowRight, FiBookOpen, FiCode, FiTrendingUp } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb } from 'react-icons/si'

const Blog = () => {
  const articles = [
    {
      title: "Building Scalable MERN Applications: Best Practices",
      excerpt: "Learn how to structure your MERN stack applications for scalability, maintainability, and performance. Covering folder structure, state management, and deployment strategies.",
      date: "2025-01-08",
      readTime: "8 min read",
      category: "Full Stack",
      icon: SiReact,
      color: "from-blue-500 to-cyan-500",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      featured: true
    },
    {
      title: "JWT Authentication: Security Best Practices",
      excerpt: "Deep dive into implementing secure JWT authentication in Node.js applications. Learn about token management, refresh strategies, and security considerations.",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Security",
      icon: FiCode,
      color: "from-green-500 to-emerald-500",
      tags: ["JWT", "Security", "Node.js", "Authentication"]
    },
    {
      title: "React Performance Optimization Techniques",
      excerpt: "Explore advanced React optimization techniques including memoization, code splitting, and virtual scrolling to build lightning-fast applications.",
      date: "2025-01-02",
      readTime: "10 min read",
      category: "Frontend",
      icon: SiReact,
      color: "from-purple-500 to-pink-500",
      tags: ["React", "Performance", "Optimization", "JavaScript"]
    },
    {
      title: "MongoDB Aggregation Pipeline Mastery",
      excerpt: "Master MongoDB's aggregation framework to perform complex data transformations and analytics. Real-world examples and performance tips included.",
      date: "2024-12-28",
      readTime: "12 min read",
      category: "Database",
      icon: SiMongodb,
      color: "from-green-600 to-teal-500",
      tags: ["MongoDB", "Database", "Aggregation", "NoSQL"]
    },
    {
      title: "Modern JavaScript ES2024 Features",
      excerpt: "Explore the latest JavaScript features and how they can improve your development workflow. From new array methods to enhanced async patterns.",
      date: "2024-12-25",
      readTime: "7 min read",
      category: "JavaScript",
      icon: SiJavascript,
      color: "from-yellow-500 to-orange-500",
      tags: ["JavaScript", "ES2024", "Modern JS", "Features"]
    },
    {
      title: "Microservices with Node.js and Docker",
      excerpt: "Learn how to build and deploy microservices architecture using Node.js and Docker. Covering service communication, load balancing, and monitoring.",
      date: "2024-12-20",
      readTime: "15 min read",
      category: "Architecture",
      icon: SiNodedotjs,
      color: "from-green-500 to-blue-500",
      tags: ["Node.js", "Docker", "Microservices", "DevOps"]
    }
  ]

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Security", "Database"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

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
            Latest Articles
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Sharing knowledge and insights about web development, best practices, and emerging technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'glass hover:glass-strong text-gray-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="glass-strong rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <FiTrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold text-sm">Featured Article</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${articles[0].color} flex items-center justify-center`}>
                      {React.createElement(articles[0].icon, {
                        className: "w-5 h-5 text-white"
                      })}
                    </div>
                    <span className="text-blue-400 font-medium">{articles[0].category}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {articles[0].title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{new Date(articles[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <FiBookOpen className="w-4 h-4" />
                    <span>Read Article</span>
                    <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                
                <div className="space-y-4">
                  <div className="glass rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Article Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {articles[0].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredArticles.slice(selectedCategory === "All" ? 1 : 0).map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${article.color} flex items-center justify-center`}>
                  {React.createElement(article.icon, {
                    className: "w-4 h-4 text-white"
                  })}
                </div>
                <span className="text-blue-400 font-medium text-sm">{article.category}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                {article.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <FiCalendar className="w-3 h-3" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiClock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-gray-800 rounded text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Read More
                </span>
                <FiArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.article>
          ))}
        </div>

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
            className="px-8 py-4 glass-strong rounded-xl text-white font-semibold hover:glass transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <FiBookOpen className="w-5 h-5" />
            <span>View All Articles</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog