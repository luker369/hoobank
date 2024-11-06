import img1 from '../assets/airbnb.png';
import img2 from '../assets/binance.png';
import img3 from '../assets/coinbase.png';
import img4 from '../assets/dropbox.png';

const Image = ({src})=>(

    <img className='w-[100px] sm:w-[150px] lg:w-[200px]' src={src} alt="company" />
)

const Partners = () => {
  return (
    <div className='pt-[30px] pb-[50px] px-[30px] flex flex-wrap items-center gap-[20px] justify-between'>
      
      <Image src={img1} />
      <Image src={img2} />
      <Image src={img3} />
      <Image src={img4} />

      
    </div>
  )
}

export default Partners
