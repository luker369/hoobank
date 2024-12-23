import {Home,Login,Signup,ScrollToTop} from './components';
import { Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyAuth } from './store/slices/auth';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(verifyAuth());

  },[dispatch]);

  
  return (

    <>
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<h1>About Page</h1>} />
    <Route path="auth/signup" element={<Signup />} />
    <Route path="auth/login" element={<Login />} />

    </Routes>

    <ScrollToTop />

    </>
  );
}

export default App;
