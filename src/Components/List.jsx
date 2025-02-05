import React from 'react'
import { Link } from 'react-router-dom'




export default function List(props) {
  return (
    <div className='flex flex-col items-end gap-[20px]'>
    <h1 className='text-xl text-white'>{props.header}</h1>
    <div className='flex flex-col text-gray-400 gap-[10px] items-end'>
    {
      props.texts.map((value,index,arr)=>
      <Link key={index} >
        {value}
      </Link>
      )
    }
    </div>
 </div>
  )
}
