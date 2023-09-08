import { Dispatch, ReactNode, createContext, useContext, useState } from "react"


export function UseActiveSection()  {
    const context = useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error('useActiveSection must be used within a ActiveSectionContext')
    }
    return context
}
type ActiveSectionContextType = {
    currentSection: "Intro" | "About" | "Skills" | "Projects" | "Milestones" | "Contact",
    setSection: Dispatch<React.SetStateAction<"Intro" | "About" | "Skills" | "Projects" | "Milestones" | "Contact">>
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSection = ({children}:{
    children: ReactNode
}) => {
    const [currentSection, setSection] = useState<"Intro" | "About" | "Skills" | "Projects" | "Milestones" | "Contact">("Intro")
  return (
    <ActiveSectionContext.Provider value={{currentSection, setSection}}>{children}</ActiveSectionContext.Provider>
  )
}

export default ActiveSection
