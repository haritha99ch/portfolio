import { ReactNode } from "react"

const sectionHeading = ({children}:{
    children: ReactNode
}) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>
  )
}

export default sectionHeading