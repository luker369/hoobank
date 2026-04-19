import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

const Stat = ({ number, text }) => {
  const match = String(number).match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  const prefix = match ? match[1] : '';
  const numericEnd = match ? parseInt(match[2]) : 0;
  const suffix = match ? match[3] : '';
  const { value, ref } = useCountUp(numericEnd);

  return (
    <div ref={ref} className="flex items-center gap-[10px]">
      <span className='text-[30px] sm:text-[40px] font-bold'>{prefix}{value}{suffix}+</span>
      <p className='text-gradient text-[20px] sm:text-[25px] font-bold'>{text}</p>
    </div>
  );
};

const Stats = () => {
  const ref = useInView();
  return (
    <div ref={ref} className='fade-up my-[50px] px-[30px] flex flex-wrap gap-[20px] md:gap-[50px] xl:gap-[80px]
     justify-normal sm:justify-center items-center'>
      <Stat number={3800} text="User Active" />
      <Stat number={230} text="Trusted by Company" />
      <Stat number="$230M" text="Transaction" />
    </div>
  );
}

export default Stats
