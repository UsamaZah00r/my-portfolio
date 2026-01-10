import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import BackgroundAnimation from './components/BackgroundAnimation'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import CodeShowcase from './components/CodeShowcase'
import PerformanceMetrics from './components/PerformanceMetrics'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <ScrollProgress />
          <BackgroundAnimation />
          <Header />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <CodeShowcase />
            <PerformanceMetrics />
            <Education />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
        </>
      )}
    </div>
  )
}

export default App