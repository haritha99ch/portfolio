import { Fragment, useEffect, useState } from 'react'
import SectionHeading from '../components/sectionHeading'
import Milestones from '../models/milestones'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { UseActiveSection } from '../contexts/activeSection';

const Eilestones = () => {
    const [milestones, setMilestones] = useState<Milestones>()
    useEffect(() => {
        getMilestones()
    })

    const {ref, inView} = useInView({threshold: 0.5});
    const {setSection} = UseActiveSection();
    useEffect(() => {
      if(inView) setSection("Milestones");
    }, [inView, setSection]);
    
  return (
    <section ref={ref} id="Milestones" className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>Milestones</SectionHeading>
        <VerticalTimeline lineColor="">
            {milestones?.milestones.map((milestone, index) => (
                <Fragment key={index}>
                    <VerticalTimelineElement 
                        contentStyle={{
                            background: "#f3f4f6",
                            boxShadow: "nono",
                            border: "1px solid rgba(0,0,0, 0.05)",
                            padding: "1.3rem, 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  #f3f4f6"
                        }}
                        date={milestone.start.toString()}
                        icon={milestone.type === "education" ? <FaGraduationCap /> : <FaBriefcase/>}
                        iconStyle={{
                            background: "white",
                            fontSize: "1.5rem",
                        }}>
                        <h3 className="font-semibold capitalize">{milestone.what}</h3>
                        <p className="!font-normal !mt-0">{milestone.where}</p>
                        <p className="!mt-1 !font-normal text-gray-700">{milestone.description}</p>
                    </VerticalTimelineElement>
                </Fragment>
            ))}
        </VerticalTimeline>
    </section>
  )

    async function getMilestones() {
        const response = await fetch('./userData/milestones.json')
        const data = await response.json()
        setMilestones(data)
    }
}

export default Eilestones