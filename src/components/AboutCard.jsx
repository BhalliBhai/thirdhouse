import React from 'react'

const AboutCard = ({ image, title, description }) => {
  return (
    <div className="mx-auto flex items-center flex-col mb-2 fade-in">
      <img className="h-48" src={image} alt="Card" />
      <div className="p-6 max-w-[250px]">
        <h2 className="text-xl font-semibold text-white my-3">{title}</h2>
        <p className="text-md text-white">{description}</p>
      </div>
    </div>
  )
}

export default AboutCard