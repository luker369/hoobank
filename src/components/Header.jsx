import { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { verifyAuth } from '../store/slices/auth';
import { useCookies } from 'react-cookie';
import userImage from '../assets/user.png';

const List = () => (
  <ul className="flex flex-col lg:flex-row items-center gap-[30px]">
    <li><a href="#" className='nav-item'>Home</a></li>
    <li><a href="#features" className='nav-item'>Features</a></li>
    <li><a href="#product" className='nav-item'>Product</a></li>
    <li><a href="#clients" className='nav-item'>Clients</a></li>
  </ul>
);

const Buttons = () => (
  <div className="buttons flex gap-[15px]">
    <Link to="/auth/signup" className="button bg-blue-gradient text-black">Signup</Link>
    <Link to="/auth/login" className="button bg-gray-gradient">Login</Link>
  </div>
);

const Profile = ({ handleLogout }) => (
  <div className="flex items-center gap-[10px]">
    <img className='w-[30px] h-[30px]' src={userImage} alt="profile" />
    <button onClick={handleLogout} className='hidden md:block button bg-red-500 text-white'>Logout</button>
  </div>
);

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSigned = useSelector(state => state.isSigned);
  const [cookie, setCookie, removeCookie] = useCookies(['hoobank-user']);

  // Define the logout function in Home.jsx
  const handleLogout = () => {
    removeCookie('hoobank-user', { path: "/" });
    dispatch(verifyAuth());
    setIsMenuOpen(false); // Close the menu after logout
  };

  return (
    <div className='flex justify-between items-center px-[25px] py-[20px]'>
      <Link to="/">
        <img className="w-[150px]" src={logo} alt="Logo" />
      </Link>

      {/* Desktop and Medium Navigation */}
      <div className="hidden lg:block">
        <List />
      </div>

      {/* Profile and Logout Button for Medium and Larger Screens */}
      {isSigned && (
        <div className="flex items-center gap-[15px]">
          <img className='w-[30px] h-[30px]' src={userImage} alt="profile" />
          <button onClick={handleLogout} className='hidden lg:block button bg-red-500 text-white'>Logout</button>
        </div>
      )}

      {/* Buttons for Signup/Login if User is Not Signed In */}
      {!isSigned && (
        <div className="hidden lg:block">
          <Buttons />
        </div>
      )}

      {/* Hamburger Icon for Mobile Navigation */}
      <div className="lg:hidden relative">
        <div className="text-[30px] cursor-pointer">
          {isMenuOpen ? (
            <MdClose onClick={() => setIsMenuOpen(false)} />
          ) : (
            <HiBars3 onClick={() => setIsMenuOpen(true)} />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="list absolute -left-[250px] bg-gray-gradient w-[280px] px-[15px] py-[20px] top-[180%] rounded-[6px]">
            <List />
            <div className="lg:hidden mt-[20px] flex justify-center">
              {isSigned ? (
                // Logout Button Only When User is Signed In
                <button
                  className="button bg-red-500 text-white mt-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                // Signup/Login Buttons When User is Not Signed In
                <Buttons />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
