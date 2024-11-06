import React from 'react'
import card from '../assets/card.png';


const Card = () => {
  return (
    <div className='py-[70px] px-[30px] flex flex-col lg:flex-row lg:items-center gap-[50px]'>
      
      <div className="text flex-1">
        <h1 className='font-bold text-[40px] sm:text-[60px]'>Find a better card deal in few easy steps.</h1>

        <p className='my-[20px] text-gray-400'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>

        <a href="#" className='get_started-btn'>Get Started</a>    
      </div>

      <div className="image flex-1">
        <img className='w-full' src={card} alt="card" />
      </div>

    </div>
  )
}

export default Card
