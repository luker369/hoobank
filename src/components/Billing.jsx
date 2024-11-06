import React from 'react'
import billing from '../assets/bill.png';
import apple from '../assets/apple.svg';
import googlePlay from '../assets/google.svg';


const Billing = () => {
  return (
    <div className='px-[30px] py-[70px] flex flex-col-reverse lg:flex-row gap-[30px] sm:items-center'>
      
      <div className="image flex-1 relative">
      <img className='w-full' src={billing} alt="billing" />
      <span className='block blue__gradient absolute h-full w-[400px] max-w-full left-0 top-0'></span>
      </div>

      <div className="text flex-1 max-w-[600px]">

        <h1 className='font-bold text-[40px] sm:text-[60px]'>
        Easily control your billing & invoicing.
        </h1>

        <p className='text-gray-400 my-[40px]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      
        <div className="buttons flex items-center gap-[20px]">

          <a href="#">
            <img src={apple} alt="Apple" />
          </a>

          <a href="#">
            <img src={googlePlay} alt="google play" />
          </a>


        </div>
      </div>

    </div>
  )
}

export default Billing
