import React from 'react'

const InvestmentCard = ({data}) => {
  const {link, image} = data;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='w-full h-full fade-in flex items-center p-1 justify-center'>
      <img src={image} alt="Investment" className='object-contain h-[140px]' />
    </a>
  )
}

export default InvestmentCard