import React from 'react';
import AboutContent from '../components/AboutContent';
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <HeroImg2 heading="ABOUT" text="Let's learn more about me." />
      <AboutContent />
    </div>
  )
}

export default About;