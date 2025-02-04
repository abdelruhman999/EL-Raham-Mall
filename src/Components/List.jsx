import React from 'react'
import { Link } from 'react-router-dom'

export default function List(props) {
  return (
    <div className='flex flex-col items-end gap-[20px]'>
    <h1 className='text-xl text-white'>{props.header}</h1>
    <div className='flex flex-col text-gray-400 gap-[10px] items-end'>
    <Link>
    {props.text1}
    </Link>
    <Link>
    {props.text2}
    </Link>
    <Link>
    {props.text3}
   </Link>
    <Link>
    {props.text4}
   </Link>
    <Link>
    {props.text5}
   </Link>
    <Link>
    {props.text6}
   </Link>
    <Link>
    {props.text7}
   </Link>
    <Link>
    {props.text8}
   </Link>
    </div>
 </div>
  )
}
