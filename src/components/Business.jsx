import React from 'react'
import features from '../data/business'

const Business = () => {
  return (
    <div className='px-[30px] py-[70px] flex flex-col xl:flex-row gap-[50px] xl:gap-[30px]'>
      
      <div className="flex-1">

        <h1 className='font-bold text-[40px] sm:text-[60px]'>You do the business, we’ll handle the money.</h1>

        <p className='text-gray-400 my-[20px]'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <a
         href="#"
         className='get_started-btn'
         >
          Get Started
        </a>

      </div>


      <div className="flex-1">

        {
          features.map((feature,index)=>(

            <div key={feature.id}
             className={`${index !== features.length - 1  ? 'mb-[20px]' : ''}
             flex flex-col sm:flex-row gap-[10px] sm:items-center`}
             >

              <div className="icon bg-dimBlue w-[40px] h-[40px] grid place-items-center rounded-full">
                <img className='w-[20px]' src={feature.icon} alt="icon" />
              </div>


              <div className="">

                <h3 className='text-[18px] capitalize font-semibold'>{feature.title}</h3>
                <p className='text-gray-400 mt-[10px]'>{feature.content}</p>

              </div>


            </div>
          ))
        }

      </div>
      


    </div>
  )
}

export default Business
