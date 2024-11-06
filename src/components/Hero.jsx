import React from 'react'
import hero from '../assets/robot.png';
import discount from '../assets/Discount.svg';

// flex-basis

const Button = ()=>(

    <a 
    href="#"
    className='grid place-items-center uppercase w-[120px] h-[120px] 
    rounded-full text-gradient font-semibold text-[14px]
     border-[#5ce1e6] border-[4px]'
    >
        get started
    </a>
)


const Hero = () => {
  return (
    <div className='flex gap-[50px] flex-col lg:flex-row px-[20px] sm:px-[50px] mt-[80px]'>
      
      <div className="text flex-1">

        <div className="discount px-[10px] py-[5px] rounded-[6px]
         flex gap-[10px] items-center w-fit bg-discount-gradient
         uppercase font-semibold text-txt">

            <div className="icon">
                <img src={discount} alt="discount" />
            </div>

            <p><span className='text-white'>20%</span> discount for <span className='text-white'>1 month</span> account</p>

        </div>

        <div className="title">
            
            <div className="flex items-center gap-[50px]">
                <h1 className='hero-title'>
                The Next

                <br/>

                <span className='text-gradient'>Generation</span>

                </h1>

                <div className="hidden md:block">
                    <Button />
                </div>
            </div>

            <h1 className='hero-title'>Payment Method.</h1>

        </div>

            <p className='mt-[30px] text-txt text-[18px] max-w-[500px]'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>

  
      </div>

      <div className="image relative w-[600px] max-w-full">
        <img className='w-full' src={hero} alt="Hero" />

        <span className="block absolute pink__gradient w-[400px] h-[40%] right-0 top-0 z-[2]"></span>
      </div>

      <div className="block md:hidden mt-[30px] w-fit mx-auto">
              <Button />
      </div>

    </div>
  )
}

export default Hero
