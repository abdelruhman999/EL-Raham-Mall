import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function FacebookCurd() {
  return (
    <Link className='bg-blue-900 h-[45px] 
    flex items-center gap-[50px]  justify-between 
    hover:scale-105 duration-200  shadow shadow-gray-500'>
       <div className='flex items-center gap-[20px]'>
       <FaFacebookF className='text-white pl-4  text-3xl ' />
       <div className='bg-gray-500 w-[1px] h-[45px]'></div>
       </div>
      
       <p className='text-white pr-2  w-full'>تسجيل الدخول بأستخدام فيسبوك</p>
      
     
   </Link>
  )
}
