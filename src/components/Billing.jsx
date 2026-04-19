import billing from '../assets/bill.png';
import { useInView } from '../hooks/useInView';
import apple from '../assets/apple.svg';
import googlePlay from '../assets/google.svg';


const Billing = () => {
  const ref = useInView();
  return (
    <div ref={ref} className='fade-up px-[30px] py-[70px] flex flex-col-reverse lg:flex-row gap-[30px] sm:items-center'>
      
      <div className="image flex-1 relative">
      <img className='w-full' src={billing} alt="billing" />
      <span className='block blue__gradient absolute h-full w-[400px] max-w-full left-0 top-0'></span>
      </div>

      <div className="text flex-1 max-w-[600px]">

        <h1 className='font-bold text-[40px] sm:text-[60px]'>
        Easily control your billing & invoicing.
        </h1>

        <p className='text-gray-400 my-[40px]'>Track every transaction in real time. Our smart billing dashboard gives you full visibility into your spending, invoices, and payment history — all in one place.</p>
      
        <div className="buttons flex items-center gap-[20px]">

          <a href="/">
            <img src={apple} alt="Apple" />
          </a>

          <a href="/">
            <img src={googlePlay} alt="google play" />
          </a>


        </div>
      </div>

    </div>
  )
}

export default Billing
