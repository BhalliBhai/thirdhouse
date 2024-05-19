import React from 'react';
import AboutCard from '../components/AboutCard';
import { aboutCardsData } from '../data';

const About = () => {
  return (
    <div className="text-center">
      <div className="top pt-12 pb-20">
        <h3 className="text-[24px] lg:text-[36px] font-medium  px-8 md:px-12 lg:px-36 text-center">We invest opportunistically and seek to add value, growth capital, and experience.</h3>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {aboutCardsData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
            <AboutCard image={card.image} title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
