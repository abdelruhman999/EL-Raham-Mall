import React, { useContext, useEffect, useState } from 'react'
import logo1 from '../assets/image/mic.jpg'
import { datacontext, ValueContext } from '../pages/Home';

export default function Productsdetails() {
    const {data,setdata}=useContext(datacontext)
    const {value,setValue} = useContext(ValueContext)
    useEffect(()=>{
        if(data){

            console.log(data);
        }      
    },[data])
  return (
    <div className='bg-white gap-[10px] w-[200px] rounded-lg flex flex-col items-center p-[15px]'>
        <img src={logo1} alt="" />
        <p>هذا الميكرويف يتحمل سخونه سبعه حصان واتنين حمار قهقهقه</p>
        <p>450جنيه مصري</p>
        <div
        onClick={()=>{
            setdata({
                ...data,
                img:logo1,
                discription:"هذا الميكرويف يتحمل سخونه سبعه حصان واتنين حمار",
                price:550
                
            })
            setValue(value+1)
        }}
        className='flex justify-center
         items-center text-sm cursor-pointer
         bg-green-500 text-white p-[10px]
          rounded-lg w-[180px] shadow-lg'>
            اضف الى عربة التسوق 
        </div>
    </div>
  )
}
