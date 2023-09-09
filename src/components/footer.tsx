import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='py-2 px-4 text-center text-gray-500 bg-red-50'>
        <small className='mb-2 text-xs'>
            &copy; {new Date().getFullYear()} - All rights reserved
        </small>
        <p className='text-xs'>
            <span>About this website: <span>built with React, TypeScript, Tailwind CSS, Getform.io, GitHub pages.</span><span><a className='underline flex flex-row items-center justify-center' href="https://www.github.com/haritha99ch/portfolio">View source <BsGithub/></a></span> </span>
        </p>
    </footer>
  )
}

export default Footer