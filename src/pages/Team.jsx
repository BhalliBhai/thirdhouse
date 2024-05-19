import React from "react";
import { teamData } from "../data";
import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <div className="text-center">
      <div className="top pt-8 pb-4 lg:pb-8"
      style={{
        maxWidth:'1260px !important'
      }}
      
      >
        <h3 className="text-[30px] lg:text-[46px] font-bold px-8 md:px-12 lg:px-36 text-center">
          Meet The Team
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center my-8 px-4 md:px-6">
        {teamData.map((card, index) => (
          <div key={index} className="p-2">
            <TeamCard
              image={card.image}
              name={card.name}
              description={card.description}
              position={card.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
