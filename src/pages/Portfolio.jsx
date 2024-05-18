import React from 'react'
import InvestmentCard from '../components/InvestmentCard'
import { investmentData } from '../data'

const Portfolio = () => {
  return (
    <div className="text-center">
      <div className="top pt-8 pb-6 md:pb-12">
        <h3 className="text-[30px] md:text-[46px] font-bold text-white lg:px-36 text-center">Recent Investments</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 justify-center my-8 px-2">
        {investmentData.map((card, index) => (
          <div key={index} className="p-2 h-[150px] md:h-[175px]">
            <InvestmentCard data={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio