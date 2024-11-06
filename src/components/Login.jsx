import {useState} from 'react'
import logo from "../assets/logo.svg";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {verifyAuth} from '../store/slices/auth';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'

const Login = () => {

  const [cookie,setCookie] = useCookies(['hoobank-user']);

  const [userData,setUserData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function loginUser(e){

    e.preventDefault();

    let usersData = window.localStorage.getItem('hoobank');

    if(!usersData){

      alert("You must sign up first");
      return;
    }

    usersData = JSON.parse(usersData);

    const user = usersData.find(usr=>usr.email === userData.email);

    if(!user){
      
      alert("User not found");
      return;
    }

    const isPasswordCorrect = user.password === userData.password;

    if(!isPasswordCorrect){

      alert('Your Password is Wrong');
      return;
    }

    setCookie("hoobank-user","true",{path: "/"});

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
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={loginUser} className="space-y-6">
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
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't Have an account?{' '}
          <Link to="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Signup
          </Link>
        </p>
      </div>
    </div>

  </>
  )
}

export default Login
