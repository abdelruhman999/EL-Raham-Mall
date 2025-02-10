import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import {datacontext, totalcontext} from '../pages/Home'
import { FaListUl } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import ALBA from '../assets/image/ALBA.webp'
import CANDY from '../assets/image/CANDY.webp'
import FastForward from '../assets/image/FastForward.webp'
import Grandseiko from '../assets/image/Grandseiko.webp'
import Hionelogo from '../assets/image/Hionelogo.webp'
import SharpLogo from '../assets/image/SharpLogo.webp'
import Sonylogo from '../assets/image/Sonylogo.webp'
import tigerlogo from '../assets/image/tigerlogo.webp'
import ToshibaLogo from '../assets/image/ToshibaLogo.webp'
import Hellenlogo from '../assets/image/Hellenlogo.webp'
import TORNADOLogo from '../assets/image/TORNADOLogo.webp'
import { IoMdArrowDropleft } from "react-icons/io";
import { FiX } from "react-icons/fi";
import 'animate.css';


export default function Navpar() {
 
  const [Bool , setBool] =useState(false)
  const [Correct , setCorrect] =useState(false)
  const {data1}=useContext(datacontext)
  const {total,settotal} = useContext(totalcontext)

   useEffect(()=>{
        if(data1){

          console.log(data1); 
          data1.map((el=>{
            console.log(typeof( el.price));
            const total = data1.reduce((sum,el)=> sum + el.price ,0)
            settotal(total);     
          }))
        }
      },[data1])


  return (
    <div>
     <div className='bg-gray-800  text-gray-50
      p-[10px] flex flex-row-reverse items-center
       justify-between 
       '>
      <div className='flex flex-row-reverse gap-5 items-center'>
      <p className='pr-[100px] font-semibold text-xs '>
        العربيه 
      </p>
      <div className='bg-gray-400 w-[0.5px] opacity-50 h-[12px]'></div>
      </div>
      <div className='flex flex-row-reverse
       text-xs items-center gap-[20px] pl-[100px] font-semibold'>
          <Link>
          اتصل بنا 
          </Link>
        <div className='bg-gray-400 w-[0.5px] opacity-50 h-[12px]'></div>
        <p>01102840567</p>
       
      </div>
      
      </div> 
     <div className='bg-gray-600 flex
      justify-between flex-row-reverse
      items-center p-[20px]'>
        <div className='flex  flex-row-reverse items-center gap-[100px]'>
      <div>
        <Link to={'/'} className='poppins-light  text-white'>ELRAHAM-MaLL</Link>
      </div>
      <div className='relative'>
      <input
      className='w-[350px] 
      text-sm text-right pr-1 h-[37px] rounded outline-none '
       type="search" 
       placeholder="...ابحث فى المتجر بالكامل هنا"/>
       <FaSearch className='absolute text-xl top-2 text-blue-700 left-4' />
      </div>
    </div>

      <div className='flex pl-[90px] gap-[20px]'>
        <div className='flex 
        text-gray-50
         items-center gap-[20px]
        '>
          <Link
          to={'/ShoppingBage'}
           className='text-end '><span className='text-xs'>سلة التسوق</span> <br />{total} ج.م</Link>
          <div className='relative'>
          <CiShoppingCart  className='text-3xl'/>
          <div className='bg-blue-500
          flex justify-center
           items-center size-[20px]
            rounded-full
            absolute top-[-5px] left-[-10px]
            text-xs
           '>
            {data1.length}
           </div>
          </div>
        </div>

        <div className='flex 
        text-gray-50
         items-center gap-2
          '>
          <Link
          to={'/login'}
          className='text-end text-sm'>
            <span className='text-xs'>مرحبا</span><br/>تسجيل الدخول
            </Link>
          <GoPerson className='text-3xl'/>
        </div>
      </div>
      </div> 
      <div className=' relative bg-white
       shadow 
       flex 
       justify-center
       '>
        <ul className='flex
         text-blue-800
         flex-row-reverse
         gap-[70px]  items-center
         font-bold '
         >

          <li className='relative p-2
           bg-opacity-50 bg-blue-400'>
            <Link
            onClick={()=>{
              setCorrect(!Correct)
            }}
            className="flex w-[320px]
              justify-end items-center
               gap-2"
               > 
            جميع الاقسام  
            <div className={`duration-500 ${Correct?'rotate-90':''}`}>
            {Correct?
                <FiX className="text-blue-400  text-2xl"/>
              :(
                <FaListUl className='text-blue-400 text-xl'/>
              )
            }
            </div>
            </Link>
             <ul  className={`absolute text-black 
              ${Correct?'block':'hidden'}  left-0 top-[43px] p-[10px]
              bg-white shadow z-10`}>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                   تليفونات والكترونيات 
                </li>
                <div className='bg-gray-200   h-[1px]'></div>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                   الاجهزة المنزليه 
                </li>
                <div className='bg-gray-200 w-full h-[1px]'></div>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                  تكييفات و منقيات الهواء
                </li>
                <div className='bg-gray-200   h-[1px]'></div>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                   منتجات الصحه والعنايه الشخصيه
                </li>
                <div className='bg-gray-200 w-full h-[1px]'></div>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                   قطع غيار استهلاكيه
                </li>
                <div className='bg-gray-200   h-[1px]'></div>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                   منتجات حصريه
                </li>
                <div className='bg-gray-200 w-full h-[1px]'></div>
                <li className='flex items-center
                 justify-end w-[px] 
                 p-[10px] cursor-pointer
                 '>
                    عروض وخصومات 
                </li>
                <div className='bg-gray-200 w-full h-[1px]'></div>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                  الاكثر مبيعا 
                </li>
                <div className='bg-gray-200 w-full h-[1px]'></div>
                <li className='flex items-center
                 justify-between w-[317px] 
                 p-[10px] cursor-pointer
                 '>
                  <IoMdArrowDropleft />
                   ماركت الرحمه  
                </li>
            </ul>
          </li>


          <li>
            <Link className='flex items-center gap-2'>
            عروض وخصومات
            <BiSolidOffer className='text-blue-400 text-xl'/>
            </Link>
          </li>
          <li >
            <Link
              onMouseEnter={()=>{
                setBool(true)
              }}
             
            className='flex items-center gap-2'>
            <IoIosArrowDown/>
              جميع الموديلات 
            </Link>
          </li>
        </ul>

     {/* صور العلامات التجاريه  */}
      <div
      onMouseLeave={()=>{
        setBool(false)
      }}
      className={`absolute flex 
      flex-wrap p-[20px]
      gap-[20px]  w-[500px] 
       bg-white shadow top-[45px]
        left-0
        ${Bool?'block':'hidden'}
        `}>
        <Link>
          <img src={ALBA} className='w-[100px]' />
        </Link>
        <Link>
          <img src={FastForward} className='w-[100px]' />
        </Link>
        <Link>
          <img src={Grandseiko} className='w-[100px]' />
        </Link>
        <Link>
          <img src={Hionelogo} className='w-[100px]' />
        </Link>
        <Link>
          <img src={SharpLogo} className='w-[100px]' />
        </Link>
        <Link>
          <img src={Sonylogo} className='w-[100px]' />
        </Link>
        <Link>
          <img src={tigerlogo} className='w-[100px]' />
        </Link>
        <Link>
          <img src={ToshibaLogo} className='w-[100px]' />
        </Link>
        <Link>
          <img src={Hellenlogo} className='w-[100px]' />
        </Link>
        <Link>
          <img src={TORNADOLogo} className='w-[100px]' />
        </Link>
        <Link>
          <img src={CANDY} className='w-[100px]' />
        </Link>
      </div>
     
      </div>
    </div>
  )
}

