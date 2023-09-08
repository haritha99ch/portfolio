import { useState, useEffect } from "react";
import userDetails from "../models/userDetails";
import SectionHeading from "../components/sectionHeading";

const About = () => {
    const [user, setUser] = useState<userDetails | null>(null);
    useEffect(() => {
        fetch('./userData/userDetails.json')
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);

  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">{user?.moreAbout}</p>
    </section>
  );
};

export default About