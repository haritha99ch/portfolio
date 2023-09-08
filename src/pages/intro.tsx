import { useState, useEffect } from 'react';
import userDetails from '../models/userDetails';
import { BsEnvelope, BsGithub, BsLinkedin, BsPersonBadgeFill } from 'react-icons/bs';

const Intro = () => {
  const [user, setUser] = useState<userDetails | null>(null);

  useEffect(() => {
    fetch('./userData/userDetails.json')
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div>
          {user && (
            <img
              src={user.profilePicture}
              width="192"
              height="192"
              property="true"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover"
            />
          )}
        </div>
      </div>
      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5 sm:text-4xl">
        <span className="font-bold">{user?.greatingQuote}, I'm {user?.name}. </span>
        <span>{user?.about}</span>
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <a href="#Contact" className="intro-btn">Contact Me <BsEnvelope/> </a>
        <a href={user?.cv} className="intro-btn">Download CV <BsPersonBadgeFill/></a>
        <a href={user?.linkedIn} className="intro-btn"><BsLinkedin/></a>
        <a href={user?.github} className="intro-btn"><BsGithub/></a>
      </div>
    </section>
  );
};

export default Intro;
