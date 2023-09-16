import { useEffect, useState } from 'react'
import UserDetails from '../models/userDetails'
import SectionHeading from '../components/sectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { UseActiveSection } from '../contexts/activeSection'

const Contact = () => {
  const [userDetails, setUser] = useState<UserDetails>()
  useEffect(() => {
    getUserDetails()
  }, [])

  const {ref, inView} = useInView({threshold: 0.5});
  const {setSection} = UseActiveSection();
  useEffect(() => {
    if(inView) setSection("Contact");
  }, [inView, setSection]);
  
  return (
    <section ref={ref} id='Contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:dark-mode-text-secondary">Contact me at <a className="underline" href={`mailto:${userDetails?.email}`}>{userDetails?.email}</a> or through this form.</p>

      <form action="https://getform.io/f/88ca3292-10ef-41e3-83e9-3f5dfd0cc4fc" method="POST"
       className='mt-10 flex flex-col'>
        <input required maxLength={500} type="email" name='email' placeholder=' Your Email'  className='h-14 rounded-lg border border-black/10 px-4 dark:dark-mode-bg-tertiary'/>
        <textarea required maxLength={500} name='message' placeholder='Your Message' className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:dark-mode-bg-tertiary'/>
        <button type="submit" className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#DB4105] text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-[#DB4105]/[0.9]'>Send <FaPaperPlane className="text-xs transition-all"/></button>
      </form>
    </section>
  )

  async function getUserDetails() {
    const response = await fetch('./userData/userDetails.json')
    const data = await response.json()
    setUser(data)
  }
}

export default Contact