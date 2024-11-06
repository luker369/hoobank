import { useState } from 'react'
import logo from '../assets/logo.svg';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {verifyAuth} from '../store/slices/auth';
import {useCookies} from 'react-cookie';


const Signup = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [cookie,setCookie] = useCookies(['hoobank-user']);

  const [userData,setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })

  function signNewUser(e){

    e.preventDefault();

    let arr = [];

    let localStHoobank = window.localStorage.getItem("hoobank");

    if(localStHoobank){

      const previousArray = JSON.parse(localStHoobank);

      arr = previousArray;

    }


    arr.push(userData);

    window.localStorage.setItem("hoobank", JSON.stringify(arr));

    setCookie("hoobank-user","user",{path: "/"});

    dispatch(verifyAuth());

    navigate("/");

  }



  return (
    <>
  
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={signNewUser} className="space-y-6">

        <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6">
              Username
            </label>
            <div className="mt-2">
              <input
                onChange={(e)=>setUserData({...userData, username: e.target.value})}
                id="username"
                type="text"
                required
                autoComplete="email"
                className="block w-full rounded-md px-[15px] outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e)=>setUserData({...userData, email: e.target.value})}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md px-[15px] outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
               onChange={(e)=>setUserData({...userData, password: e.target.value})}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md px-[15px] outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already Have an account?{' '}
          <Link to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default Signup
