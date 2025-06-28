import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { TiEye } from "react-icons/ti";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';

const Forgetpassword = () => {
    const [showpassword ,setShowPassword]=useState(false)
       const [showpassword2 ,setShowPassword2]=useState(false)
    const [confirmpassword, setConfirmPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted');
       console.log('confirmpassword:', setConfirmPassword);
    console.log('newPassword:', newpassword);


    //clear  foam field
    
    setNewPassword('');
    setConfirmPassword('')
  };
 

  return (
    <div className=" mt-10 w-full h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white border md:w-96 w-full p-8 shadow-md rounded-xl">
         <img src="./images/reset-password.png" alt="forget image" className='w-20 flex ml-32'/>
        <h1 className="font-bold text-2xl text-center mb-6">Forget password</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className='relative'>

          <input
        type={showpassword ? 'text':'newpassword'}
        placeholder="newpassword"
        className="border border-gray-300 p-2 rounded h-16  w-full"
        required
        value={newpassword}
        onChange={(e) =>setNewPassword(e.target.value)}
        />
            <div onClick={()=>setShowPassword(!showpassword)} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600  cursor-pointer'>
                {showpassword ? <IoMdEyeOff /> :  <TiEye />}
            </div>
        </div>
          <div className='relative'>

          <input
            type={showpassword2 ? 'text':'confirmpassword'}
            placeholder="confirmPassword"
            className="border border-gray-300 p-2 rounded h-16 w-full "
            required
            value={confirmpassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            
            />
            <div onClick={()=>setShowPassword2(!showpassword2)} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600  cursor-pointer'>
                {showpassword2 ? <IoMdEyeOff /> :  <TiEye />}
            </div>
            </div>
          <button
            type="submit"
            className="button  py-2 rounded  transition-all"
          >
            submit
          </button>
        
       
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;