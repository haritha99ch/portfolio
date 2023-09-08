import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { UseActiveSection } from '../contexts/activeSection';
import SectionHeading from '../components/sectionHeading';

const Skills = () => {
   const [skills, setSkills] = useState<string[]>();
    useEffect(() => {
        populateSkills();
    });

    const {ref, inView} = useInView({threshold: 0.5});
    const {setSection} = UseActiveSection();
    useEffect(() => {
      if(inView) setSection("Skills");
    }, [inView, setSection]);
    
  return (
    <section id="Skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-gray-800 text-lg"> 
            {skills?.map((skill, index) => (
                <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2" key={index}>{skill}</li>
            ))}
        </ul>
    </section>
  )

  async function populateSkills() {
      const response = await fetch('./userData/skills.json');
      const data = await response.json();
      setSkills(data);
    }
}

export default Skills

