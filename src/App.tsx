import './App.css'
import Header from './components/header'
import SectionDivider from './components/sectionDivider'
import ActiveSection from './contexts/activeSection'
import Milestones from './pages/milestones'
import About from './pages/about'
import Intro from './pages/intro'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {

  return (
    
    <div>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#c73a03c9]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c73a0352]"></div>
      <div className="text-gray-950 relative pt-28 sm:pt-36">
        <ActiveSection>
          <Header/>
          <div className="flex flex-col items-center px-4">
            <Intro/>
            <SectionDivider/>
            <About/>
            <SectionDivider/>
            <Skills/>
            <SectionDivider/>
            <Projects/>
            <SectionDivider/>
          </div>
          <Milestones/>
          <div className="flex flex-col items-center px-4">
            <SectionDivider/>
            <Contact/>
          </div>
          <Footer/>
        </ActiveSection>
      </div>
    </div>
  )
}

export default App
