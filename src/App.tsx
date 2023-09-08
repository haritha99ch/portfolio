import './App.css'
import Header from './components/header'
import Intro from './pages/intro'

function App() {

  return (
    
    <div>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#c73a03c9]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c73a0352]"></div>
      <div className="flex flex-col items-center px-4 pt-28 sm:pt-36">
        <Header/>
        <Intro/>
      </div>
    </div>
  )
}

export default App
