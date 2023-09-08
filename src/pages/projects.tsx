import { useState, useEffect } from 'react';
import SectionHeading from '../components/sectionHeading'
import projects from '../models/projects';
import Project from '../components/project';
import { useInView } from 'react-intersection-observer';
import { UseActiveSection } from '../contexts/activeSection';

const Projects = () => {
    const [projectsList, setProjects] = useState<projects | null>(null);
    useEffect(() => {
        fetch('./userData/projects/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    const {ref, inView} = useInView();
    const {setSection} = UseActiveSection();
    useEffect(() => {
      if(inView) setSection("Projects");
    }, [inView, setSection]);

  return (
    <section id="Projects" className="scroll-mt-28 mb-28"
    ref={ref}>
        <SectionHeading>Projects</SectionHeading>
        <div>
            {
                projectsList?.projects.map((project) => (
                    <>
                        <Project {...project}/>
                    </>
                ))
            }
        </div>
    </section>
  )
}

export default Projects