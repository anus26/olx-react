import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { TiEye } from "react-icons/ti";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Verify from '../Verify';
const Login = () => {
    const [showpassword ,setShowPassword]=useState(false)
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted');
       console.log('Email:', email);
    console.log('Password:', password);


    //clear  foam field
    setEmail('');
    setPassword('');
    
  };
  const forgetpassword=()=>{

    console.log('forgtpassword');
    navigate('/verify')
  }

  return (
    <div className=" mt-10 w-full h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white border md:w-96 w-full p-8 shadow-md rounded-xl">
        <h1 className="font-bold text-2xl text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded h-16 "
            required
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />
          <div className='relative'>

          <input
            type={showpassword ? 'text':'password'}
            placeholder="Password"
            className="border border-gray-300 p-2 rounded h-16 w-full "
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
            />
            <div onClick={()=>setShowPassword(!showpassword)} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600  cursor-pointer'>
                {showpassword ? <IoMdEyeOff /> :  <TiEye />}
            </div>
            </div>
          <button className='font-semibold' onClick={()=>forgetpassword()}>forgetpassword?</button>
          <button
            type="submit"
            className="button  py-2 rounded  transition-all"
          >
            Login
          </button>
          <h2 className='text-center'>Not Registered? 
            <Link to="/register">
            <span className='text-red-700'>Sign</span>
            </Link>
            </h2>
          <h2 className='text-center'>Or continue with social account</h2>
            <button
            
            className="Google  py-2 rounded  bg-slate-200 transition-all flex gap-3 justify-center font-semibold"
          >
            <FcGoogle className='text-xl' /> Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

