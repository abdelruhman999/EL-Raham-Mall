import React from 'react'
import logo1 from '../assets/image/unnamed.png'
import { Link } from 'react-router-dom'

export default function Googlecurd() {
  return (
    <Link className='bg-white h-[45px] 
         flex items-center gap-[50px] justify-between 
         hover:scale-105 duration-200  shadow shadow-gray-500'>
             <div className='flex items-center '>
            <img src={logo1} className='size-[50px]  p-[10px]  ' />
            <div className='bg-gray-400 w-[1px] h-[45px]'></div>
             </div>
            <p className='text-black pr-2'>تسجيل الدخول بأستخدام جوجل</p>
        </Link>  
  )
}
