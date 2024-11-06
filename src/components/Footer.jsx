import Logo from '../assets/logo.svg';


const Links = ({title,links})=>(

    <div className="">
        <h3 className='text-[20px] font-semibold mb-[20px]'>{title}:</h3>

        <ul>
       
       {
        links.map((link,index)=>(

            <li key={index}><a href="#" className={`${index !== links.length - 1 ? 'mb-[10px]' : ''} text-gray-400`}>{link}</a></li> 
        ))
       }
       </ul>
    </div>
)

const Footer = () => {
  return (
    <footer className='bg-black px-[20px] sm:px-[50px] pt-[80px] pb-[50px]'>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
      
      <div>

        <img className='w-[150px]' src={Logo} alt="logo" />
        <p className='text-gray-500 mt-[20px] text-[18px]'>A new way to make the payments easy, reliable and secure.</p>

      </div>

      <div>
        <Links
        title="Useful Links"
        links={["content", "How it Works","Create", "Explore", "Terms & Services"]}
        />

      </div>

      <div>
      <Links
        title="Community"
        links={["Help Center", "Partners","Suggestions", "Blog", "Newsletters"]}
        />
      </div>

      <div>
      <Links
        title="Partner"
        links={["Our Partner", "Become a Partner"]}
        />
      </div>

    </div>

    <span className='block my-[30px] w-full h-[1px] bg-[#aaa]'></span>

    <p className='text-center text-gray-500'>Copyright &copy; {new Date().getFullYear()} Hoobank. All Rights Reserved.</p>

    </footer>
  )
}

export default Footer
