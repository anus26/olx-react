import { Button } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <div className='border bg-white w-full max-w-4xl mx-auto p-6 rounded shadow'>
      <div className='flex justify-between border-b pb-4 mb-4'>
        <h1 className='text-xl font-semibold'>My Profile</h1>
        <Button variant="outlined" size="small">Change Password</Button>
      </div>

      <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <input
          type="text"
          placeholder='Full Name'
          className='border rounded px-4 py-2'
        />
        <input
          type="email"
          placeholder='Email'
          className='border rounded px-4 py-2'
        />
        <input
          type="number"
          placeholder='Phone Number'
          className='border rounded px-4 py-2'
        />
        {/* Empty div for alignment in 2-column grid */}
        <div></div>

        <div className='col-span-1 md:col-span-2 mt-4'>
          <button
            type='submit'
            className='bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition duration-300'
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
