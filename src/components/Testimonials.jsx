import React from 'react'
import testimonials from '../data/testimonials';
import quotes from '../assets/quotes.svg';

const Testimonials = () => {
  return (
    <div className='py-[70px] px-[30px]'>
      
      <div className="title flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[20px]">

        <h1 className='text-[40px] sm:text-[60px] font-bold max-w-[500px]'>What people are saying about us</h1>

        <p className='text-gray-400 text-[20px] max-w-[500px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px]">

{
    testimonials.map(element=>{

        const user = element.user;

        return(

            <div className="feature-card-show px-[20px] py-[25px] rounded-[6px] h-[300px] relative">
            <img src={quotes} alt="icon" />

            <p className='mt-[30px] text-[20px] font-semibold'>{element.text}</p>

            <div className="user absolute bottom-[30px] flex items-center gap-[10px]">
                <img className='w-[30px] h-[30px]' src={user.image} alt="user" />

                <div>
                    <h3 className='font-semibold text-[20px]'>{user.username}</h3>
                    <h4 className='text-gray-400'>{user.job}</h4>
                </div>
            </div>
        </div>

        )
    })
}
</div>


    </div>
  )
}

export default Testimonials
