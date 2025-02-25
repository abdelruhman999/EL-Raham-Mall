import React, { useContext, useEffect, useState } from 'react'
import useRequest from '../hooks/call'
import { valuecontext } from '../pages/Home'
import { Link } from 'react-router-dom'
import Buttonpay from './Buttonpay'
import { surve } from '../utils/surve'
import Loader from './Loader'

export default function Searchresult() {
    const {value} = useContext(valuecontext)
      const [show,setshow] = useState(null)
     
    
    const {data,loading} = useRequest({
        url:`/api/v1/products?search=${value}`,
        method:'GET',
        // params:{
        //     value
        // }
       
        
    },[value])

 
  
  return (
    <div className='flex flex-wrap  w-full gap-[10px]  justify-center'>
     {
     loading?
     <Loader/>
     :
     data ?
     data.map(el => {
        return (
          <div
            key={el.id} 
            onMouseEnter={()=>{
                setshow(el.id)
            }}
            onMouseLeave={()=>{
                setshow(null)
            }}
            className="bg-gray-200
            justify-between  gap-[5px] 
            rounded-lg flex  flex-col
            items-center relative
            w-[100px] h-fit p-[10px]"
         >
        <img
            className="size-[100px] rounded"
            src={surve(
                `${el.image_1}`
            )}
        />
        <p
            className="text-xs  text-gray-500 w-full
            font-semibold  text-center"
        >
            {el.name.slice(0,5)}
        </p>
      

        <p className='text-gray-600 text-xs'> 
        متاح ({el.count}) قطعه
        </p>
        <p className="text-xs   text-blue-800 font-bold">
            {el.price} <span className='text-sm text-gray-600'> ج.م </span>
        </p>  
       
      
        
        <div className={`absolute inset-0 flex flex-col duration-200 rounded ${show === el.id ? 'opacity-100 scale-100' :'opacity-0 scale-0'} justify-end items-center p-[10px] gap-[20px] bg-gray-400 bg-opacity-50`}>
             <Buttonpay
                font={10}
                number = {100}
                height={50}
                key={el.id}
                props = {el}
                />
        <Link
        to={`/${el.id}`}
        onClick={()=>{window.scrollTo(0,0)}}
            className="flex justify-center
            items-center text-xs cursor-pointer
            bg-blue-500 hover:bg-black duration-200 
             text-white  p-[10px]
            rounded-lg w-[90px] text-center shadow-lg"
        >
            شاهد تفاصيل المنتج 
        </Link>
        </div>
        
         </div>
        )

        })
      :''
    }
    </div>
  )
}
