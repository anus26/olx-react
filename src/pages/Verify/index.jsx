import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Verify = () => {

  const [otp, setOtp] = useState(['','','','','','']);
  const navigate=useNavigate()
  const handleChange=(e,index)=>{
    const  value=e.target.value
   if (!/^[0-9]?$/.test(value)) return; 
   const  newotp =[...otp]
   newotp[index]=value
   setOtp(newotp)
   if(value && e.target.nextSibling){
    e.target.nextSibling.focus()
   }
  }
const handleVerify=(e)=>{
  e.preventDefault()
  const joinedOtp=otp.join('')

  if(joinedOtp.length===6){
    alert("OTP Verified");
    navigate('/Forgetpassword')
    setOtp
    }
    console.log(handleVerify);
    
    setOtp(['','','','','','']);
        console.log('OTP:', joinedOtp);
}
  return (
  <>
<section className='min-h-screen flex items-center justify-center bg-gray-50'>

  <div className='flex flex-col   items-center gap-6 p-8 bg-white rounded-lg shadow-md'>
    
      <img src="./images/verify3.png" alt="verify" />

      <h1 className='text-2xl font-semibold'> Verify OTP</h1>
      <h1>OTP send to <span className='text-primary'>anus23@gmail.com</span> </h1>
      <form onSubmit={handleVerify} className='gap-2' >

     
             
        <div className="flex gap-3">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e)=>handleChange(e,index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-xl"
            />
          ))}
        </div>
        <br />
        <button type='submit' className='bg-primary text-white p-3 hover:bg-black transition-all duration-300 rounded-lg  shadow-md w-80'>Verify OTP</button>
     </form>

  </div>
</section>
  </>
  )
}

export default Verify