import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {

  const ScrollToTop = ()=> window.scrollTo({top: 0})

  return (
    <div onClick={ScrollToTop}className='fixed grid place-items-center bottom-[20px] right-[20px] w-[50px] h-[50px] text-white bg-blue-gradient rounded-full'>
      <FaArrowUp className='h-[25px]'/>
    </div>
  )
}

export default ScrollToTop