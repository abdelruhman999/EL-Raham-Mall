import React, { useContext , useEffect , useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import {datacontext , totalcontext , valuecontext} from '../pages/Home'
import { FaListUl } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { FiX } from "react-icons/fi";
import 'animate.css';
import useRequest from '../hooks/call';
import { surve } from '../utils/surve';
import Searchresult from './Searchresult';
import logo1 from '../assets/image/logoelrahama.png'


export default function Navpar() {
 
  const [Bool , setBool] =useState(false)
  const [Correct , setCorrect] =useState(false)
  const {data1}=useContext(datacontext)
  const {total,settotal} = useContext(totalcontext)
  const {value , setvalue} = useContext(valuecontext)

  const {data} = useRequest({
    url:'/api/v1/brands',
    method:'GET'
  })
  const {data:catogryname} = useRequest({
    url:'/api/v1/categories',
    method:'GET'
  })

   useEffect(()=>{
        if(data1){
            const total = data1.reduce((sum,el)=> sum + el.price ,0)
            settotal(total);     
        }
      },[data1,total])

  

  return (
    <div>
     <div className='bg-gray-800  text-gray-50
      p-[10px] flex flex-row-reverse items-center
       justify-between 
       '>
      <div className='flex flex-row-reverse gap-5 items-center'>
      <p className='pr-[100px] xs:pr-2 font-semibold text-xs '>
        العربيه 
      </p>
      <div className='bg-gray-400 w-[0.5px] opacity-50 h-[12px]'></div>
      </div>
      <div className='flex flex-row-reverse
       text-xs items-center xs:gap-[10px] gap-[20px]
        pl-[100px] font-semibold
        xs:pl-3'>
          <p>
          اتصل بنا 
          </p>
        <div className='bg-gray-400 w-[0.5px] opacity-50 h-[12px]'></div>
        <p>01102840567</p>
       
      </div>
      
      </div> 
     <div className='bg-gray-600 flex
      justify-between flex-row-reverse
      items-center p-[20px]  xs:flex-col
      xs:gap-[20px]
      '>
        <div className='flex   xs:w-full flex-row-reverse items-center gap-[200px]
       xs:gap-0 xs:justify-between'>
     
        <Link to={'/'}
        className='pr-[50px] xs:pr-0 '
        >
        <img src={logo1} className='w-[70px] xs:w-[50px]' />
        </Link>
   
      <div className='relative'>
      <input
      onChange={(e)=>{
        setvalue(e.target.value)
      }}
      className='w-[350px] xs:w-[250px]
      text-sm text-right pr-1 h-[37px] rounded outline-none 
      xs:text-xs'
       type="search" 
       placeholder="...ابحث فى المتجر بالكامل هنا"/>
       <FaSearch className='absolute text-xl xs:text-sm xs:top-3 top-2 text-blue-700 left-4' />
       {value&&
       <div className='absolute z-20 p-[10px] bg-white rounded w-full'>
        <Searchresult/>
       </div>
        }
      </div>
    </div>

      <div className='flex xs:pl-0 
      pl-[90px] gap-[20px] 
       '>
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
       shadow flex  xs:text-xs
       justify-center 
       '>
        <ul className='flex
         text-blue-800
         flex-row-reverse
         gap-[70px] xs:gap-[0px]
         xs:justify-between xs:w-full
         items-center
         font-bold  '
         >
          <li className='relative p-2
           bg-opacity-50  bg-blue-400'>
            <div
            
            onClick={()=>{
              setCorrect(!Correct)
            }}
            className="flex w-[320px]
              xs:w-auto xs:justify-start
              justify-end items-center
               gap-2 cursor-pointer"
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
            </div>
             <ul 
              className={`absolute text-black 
              ${Correct?'block':'hidden'} 
               left-0 top-[43px] p-[10px]
              bg-white shadow z-10
              xs:left-[-115px] `}>
                { catogryname&&
                  catogryname.map((el)=>{
                    return(
                      <li key={el.id}>
                      <Link
                      to={`cutogry/${el.id}`}
                       className='flex items-center
                      justify-between xs:w-[200px] w-[317px] 
                      p-[10px] cursor-pointer
                      '>
                        <IoMdArrowDropleft />
                           {el.name}
                      </Link>
                        <div className='bg-gray-200 h-[1px]'></div>
                      </li>
                    )
                  })
                }
               
            </ul>
          </li>


          <li className='xs:w-auto '>
            <Link
            to={"sale"}
            className='flex items-center  gap-2'>
            عروض وخصومات
            <BiSolidOffer className='text-blue-400 text-xl'/>
            </Link>
          </li>
          <li className=' xs:w-[30%]'>
            <Link
              onMouseEnter={()=>{
                setBool(true)
              }}
             
            className='flex  
            items-center xs:w-auto xs:pl-[10px] gap-2'>
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
      gap-[20px] z-[10] w-[500px] 
       bg-white shadow top-[45px]
        left-0 duration-200 xs:w-[300px]
        ${Bool?'scale-100 opacity-100':'scale-0 opacity-0'}
        `}
        >
          {
            data&&
            data.map((el)=>{
            return(
              <Link
              to={`prand/${el.id}`}
              key={el.id}>
                <img src={`${surve(el.image)}`} className='w-[100px] xs:w-[50px]' />
              </Link>
            )
              
            })
          }
      </div>
     
      </div>
    </div>
  )
}

