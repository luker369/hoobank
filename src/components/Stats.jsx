import React from 'react'

const Stat = ({number,text})=>(

    <div className="flex items-center gap-[10px]">
        
        <span className='text-[30px] sm:text-[40px] font-bold'>{number}+</span>
        <p className='text-gradient text-[20px] sm:text-[25px] font-bold'>{text}</p>
    </div>
)

const Stats = () => {
  return (
    <div className='my-[50px] px-[30px] flex flex-wrap gap-[20px] md:gap-[50px] xl:gap-[80px]
     justify-normal sm:justify-center items-center'>
      <Stat number={3800} text="User Active" />
      <Stat number={230} text="Trusted by Company" />
      <Stat number="$230M" text="Transaction" />

    </div>
  )
}

export default Stats
