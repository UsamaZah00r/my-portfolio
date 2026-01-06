import CoverSlide from '../components/slides/CoverSlide'
import AboutSlide from '../components/slides/AboutSlide'
import SkillsSlide from '../components/slides/SkillsSlide'
import ProjectsSlide from '../components/slides/ProjectsSlide'
import TechStackSlide from '../components/slides/TechStackSlide'
import AIVisionSlide from '../components/slides/AIVisionSlide'
import ContactSlide from '../components/slides/ContactSlide'

const slides = [
  {
    id: 'cover',
    title: 'Cover',
    component: CoverSlide
  },
  {
    id: 'about',
    title: 'About Me',
    component: AboutSlide
  },
  {
    id: 'skills',
    title: 'Skills',
    component: SkillsSlide
  },
  {
    id: 'projects',
    title: 'Projects',
    component: ProjectsSlide
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack',
    component: TechStackSlide
  },
  {
    id: 'ai-vision',
    title: 'AI Vision',
    component: AIVisionSlide
  },
  {
    id: 'contact',
    title: 'Contact',
    component: ContactSlide
  }
]

export default slides