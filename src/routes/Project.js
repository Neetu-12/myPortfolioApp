import React from 'react';
import HeroImg2 from '../components/HeroImg2';
// import PricingCard from '../components/PricingCard';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <HeroImg2 heading="PROJECTS" text="Some of the my most recent work" />
      <Work />
      {/* <PricingCard /> */}
    </div>
  );
}

export default Project;