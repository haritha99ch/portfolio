const header = () => {
  return (
    <header className="z-50 relative">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-red-50 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full">
            <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2.5 sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    <li key={"#Intro"} className="navli">
                        <a href="#Intro" className="navhref">Intro</a>
                    </li>
                    <li key={"#About"} className="navli">
                        <a href="#About" className="navhref">About</a>
                    </li>
                    <li key={"#Skills"} className="navli">
                        <a href="#Skills" className="navhref">Skills</a>
                    </li>
                    <li key={"#Projects"} className="navli">
                        <a href="#Projects" className="navhref">Projects</a>
                    </li>
                    <li key={"#Milestones"} className="navli">
                        <a href="#Milestones" className="navhref">Milestones</a>
                    </li>
                    <li key={"#Contact"} className="navli">
                        <a href="#Contact" className="navhref">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default header