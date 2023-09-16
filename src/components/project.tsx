import { useEffect, useState } from "react";
import { ProjectUrl } from "../models/projects"
import ProjectDetails from "../models/projectDetails";

const Project = (projectUrl: ProjectUrl) => {
    const [project, setProject] = useState<ProjectDetails | null>(null);
    useEffect(() => {
        fetch(projectUrl.project)
            .then((response) => response.json())
            .then((data) => setProject(data));
    });
    
  return (
    <article className="group bg-gray-100 dark:dark-mode-bg-tertiary max-w-[42rem] border border-black/5 overflow-hidden max-h-[20rem] sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 dark:hover:dark-mode-bg-secondary transition rounded-lg"
        onClick={() => window.open(project?.githubUrl, '_blank')}>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{project?.name}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:dark-mode-text-secondary sm:h-1/2">{project?.description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {
                    project?.techStack.map((tech) => (
                        <li className="bg-[#DB4105] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{tech}</li>
                        ))
                    }
            </ul>
        </div>
        <img src={project?.imagePath} alt={project?.name} className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition"/>
    </article>
  )
}

export default Project