import React from "react";

const TeamCard = ({ image, name, description, position }) => {
  return (
    <div className="text-left fade-in">
      <img
        className="w-full h-[380px] lg:h-[430px] object-cover"
        src={image}
        alt={name}
      />
      <div className="">
        <div className="font-bold text-[18px] mt-3 text-white">{name}</div>
        <div className="text-[#f3f3fc] font-semibold text-sm my-1">
          {position}
        </div>
        <p className="text-white text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;