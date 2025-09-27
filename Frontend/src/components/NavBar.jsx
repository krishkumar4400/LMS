import React from 'react'
import { assets } from '../assets/assets'
import {useUser, UserButton, useClerk} from '@clerk/clerk-react';
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const {openSignIn} = useClerk();
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-8 py-5 sm:px-20 border border-b border-gray-400">
      <img src={assets.logo} onClick={() => navigate('/')} className='w-28 sm:w-34 cursor-pointer' alt="" />
      <div className='flex items-center gap-4 text-gray-700'>
        <p>Add Course  |  </p>
        <p> Login</p>
        <button onClick={openSignIn} className='bg-primary rounded-full text-white px-6 py-2.5 cursor-pointer'>Create Account</button>
      </div>
    </div>
  );
}

export default NavBar
