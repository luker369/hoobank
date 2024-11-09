import { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';
import { verifyAuth } from '../store/slices/auth';
import { useCookies } from 'react-cookie';
import userImage from '../assets/user.png';



const List = ()=>(

  <ul className="flex flex-col lg:flex-row items-center gap-[30px]
  ">
        <li><a href="#" className='nav-item'>Home</a></li>
        <li><a href="#features" className='nav-item'>Features</a></li>
        <li><a href="#product" className='nav-item'>Product</a></li>
        <li><a href="#clients" className='nav-item'>Clients</a></li>

  </ul>
)


const Buttons = ()=>(

  <div className="buttons flex gap-[15px]">
  <Link to="/auth/signup" className="button bg-blue-gradient text-black">Signup</Link>
  <Link to="/auth/login" className="button bg-gray-gradient">Login</Link>

 </div>

)

const Profile = ()=>{

  const dispatch = useDispatch();

  const [cookie,setCookie,removeCookie] = useCookies(['hoobank-user']);

  function logout(){

    removeCookie('hoobank-user',{path: "/"});

    dispatch(verifyAuth());


  }

  return(
    <div className="flex items-center gap-[10px]">
    <img className='w-[30px] h-[30px]' src={userImage} alt="profile" />
    <button onClick={logout} className='button bg-red-500 text-white'>Logout</button>
  </div>
  )
}

// write the Logout component

const Header = () => {

  const [toggle,setToggle] = useState(false);

  const isSigned = useSelector(state=>state.isSigned);


  return (
    <>

    <div className='flex justify-between items-center px-[25px] h-[90px]'>

       <Link to="/">
        <img className="w-[150px]" src={logo} alt="Logo" />
       </Link>

       <div className="hidden lg:block">
        <List />
       </div>

       {isSigned && <div className="">
        <Profile />
       </div>}

       <div className="hidden md:block">

        {
          !isSigned && <Buttons />
        }

        

       </div>


       <div className="lg:hidden relative">

       <div className="text-[30px] cursor-pointer">

        {toggle ? <MdClose onClick={()=>setToggle(false)} />

        : <HiBars3 onClick={()=>setToggle(true)} />

        }

       </div>

       { toggle &&

        <div className="list absolute -left-[250px] bg-gray-gradient w-[280px] px-[15px] py-[20px] top-[180%] rounded-[6px]">
        <List />

        <div className="md:hidden mt-[20px]">

          {
            !isSigned && <Buttons />
          }
        </div>

       </div>

       }


       </div>

    </div>
      
    </>

  )
}

export default Header
