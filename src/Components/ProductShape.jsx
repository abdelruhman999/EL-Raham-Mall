import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Buttonpay from './Buttonpay'
import { surve } from '../utils/surve'

export default function ProductShape({props}) {
    const [show,setshow] = useState(false)
   
  return (
    <div
    onMouseEnter={()=>{
    setshow(true)
    }}
    onMouseLeave={()=>{
        setshow(false)
    }}
        className="bg-white
        justify-between  gap-[10px] 
        rounded-lg flex  flex-col
        items-center relative
         w-[200px] h-fit p-[10px]"
    >
        <img
            className="size-[190px] rounded"
            src={surve(
                `${props.image_1}`
            )}
        />
        <p
            className="text-sm  text-gray-500 w-full
            font-semibold  text-center"
        >
            {props.name}
        </p>
        <p
            className="text-sm text-gray-500 w-full
            font-semibold  text-end"
        >
            {props.description}
        </p>

        <p className='text-gray-600'> 
        متاح ({props.count}) قطعه
        </p>
        <p className="text-lg  text-blue-800 font-bold">
            {props.price} <span className='text-sm text-gray-600'> ج.م </span>
        </p>  
       
      
        
        <div className={`absolute inset-0 flex flex-col duration-200 rounded ${show ? 'opacity-100 scale-100' :'opacity-0 scale-0'} justify-end items-center p-[20px] gap-[20px] bg-gray-400 bg-opacity-50`}>
             <Buttonpay
        number = {190}
        key={props.id}
        props = {props}
        />
        <Link
        to={`/${props.id}`}
            className="flex justify-center
            items-center text-sm cursor-pointer
            bg-blue-500 hover:bg-black duration-200 
             text-white  p-[10px]
            rounded-lg w-[190px] shadow-lg"
        >
            شاهد تفاصيل المنتج 
        </Link>
        </div>
        
    </div>
  
  )
}
