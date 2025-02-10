import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropleft } from "react-icons/io";

export default function Returnhome(props) {
  return (
    <div className='flex self-end flex-row-reverse gap-[10px] items-center'>
                     <div className='flex text-gray-400
                      items-center gap-[5px]'>
                     <IoMdArrowDropleft />
                     <Link
                     className='hover:text-blue-500 hover:border-b-[1px] duration-200 hover:border-blue-400'
                     to={'/'}
                     >
                       الصفحه الرئيسية
                     </Link>
                     </div>
                     <p>
                     {props.text}    
                     </p>
                   </div>
  )
}
