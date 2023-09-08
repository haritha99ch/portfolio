import { useState, useEffect } from 'react';
import SectionHeading from '../components/sectionHeading'
import projects from '../models/projects';
import Project from '../components/project';

const Projects = () => {
    const [projectsList, setProjects] = useState<projects | null>(null);
    useEffect(() => {
        fetch('./userData/projects/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);


  return (
    <section>
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