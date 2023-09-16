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
import ThemeContextProvider from './providers/ThemeContextProvider'
import ThemeSwitcher from './components/themeSwitcher'

function App() {

  return (
    
    <div className="-z-20 bg-blue-50 dark:dark-mode-bg-primary">
      <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#c73a03c9] dark:bg-[#c73a03]"></div>
        <div className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#c73a0352] dark:bg-[#c73a03]"></div>
      <div className="text-gray-950 relative pt-28 sm:pt-36 dark:dark-mode-text-primary">
        <ThemeContextProvider>
        <ActiveSection>
          <Header/>
          <div className="flex flex-col items-center px-4 dark:dark-mode-text-primary">
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
          <ThemeSwitcher/>
          <Footer/>
        </ActiveSection>
        </ThemeContextProvider>
      </div>
    </div>
  )
}

export default App
