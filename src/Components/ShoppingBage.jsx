import React, { useContext } from 'react'
import { ValueContext } from '../pages/Home'
import logo1 from '../assets/image/cart-page.svg'
import { Link } from 'react-router-dom'

export default function ShoppingBage() {
    const {value} = useContext(ValueContext)
  return (
    <div className=' flex flex-col items-center '>
      {value === 0&&
       <div className='flex flex-col gap-[20px] items-center'>
        <img src={logo1} /> 
        <p className='font-semibold text-sm'>  عربة التسوق فارغه </p>
        <Link 
        to={'/'}
        className='flex items-center justify-center  bg-green-500
        text-white rounded-lg w-[180px] p-[12px] cursor-pointer
         text-sm font-semibold duration-200 hover:bg-blue-600'>
            العوده للتسوق
        </Link>
        </div>   
      } 
        
    </div>
  )
}
