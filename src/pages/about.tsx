import { useState, useEffect } from "react";
import userDetails from "../models/userDetails";
import SectionHeading from "../components/sectionHeading";
import { useInView } from "react-intersection-observer";
import { UseActiveSection } from "../contexts/activeSection";

const About = () => {
  const [user, setUser] = useState<userDetails | null>(null);
  useEffect(() => {
    fetch('./userData/userDetails.json')
    .then((response) => response.json())
    .then((data) => setUser(data));
  }, []);

  const {ref, inView} = useInView({threshold: 0.75});
  const {setSection} = UseActiveSection();
  useEffect(() => {
    if(inView) setSection("About");
  }, [inView, setSection]);

  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    id="About"
    ref={ref}>
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">{user?.moreAbout}</p>
    </section>
  );
};

export default About