import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import logo3 from '../assets/image/alahly-en.svg'
import logo4 from '../assets/image/etisalatcash-en.svg'
import logo10 from '../assets/image/vcash-en.svg'
import logo5 from '../assets/image/cib.svg'
import logo7 from '../assets/image/master-card.svg'
import logo11 from '../assets/image/visa-en.svg'
import List from './List';
import { Link } from 'react-router-dom';
import useRequest from '../hooks/call';
import { IoMdArrowDropleft } from "react-icons/io";

export default function Navigation() {

  const {data} = useRequest({
    url:'/api/v1/brands',
    method:'GET'
  })
  const {data:catogryname} = useRequest({
    url:'/api/v1/categories',
    method:'GET'
  })
  return (
    <div className='pt-[100px]'>

    <div className='bg-gray-900 flex
    gap-[20px] flex-col items-center xs:pr-[40px] pt-[80px] pr-[80px] pl-[80px]'>
    <div className='
     w-full text-white 
     flex xs:flex-col xs:gap-[50px] justify-between
     
     '>
<div className='flex flex-col  items-end gap-[20px]'>
         <h1 className='text-xl text-white'>الاقسام الرئيسيه</h1>
         <div className='flex flex-wrap gap-[10px] w-[170px] xs:w-[50px] text-gray-400  justify-end'>
         { catogryname&&
                catogryname.map((el)=>{
                  return(
                    <Link
                    key={el.id}
                    to={`cutogry/${el.id}`}
                      className='flex items-center
                    justify-between xs:w-[200px]
                    p-[10px] cursor-pointer
                    '>
                          {el.name}
                    </Link>
                  
                  )
                })
              }      
           
        
         </div>
      </div>
     

     <List
     header = 'عن الرحمه'
     texts={[
         'من نحن ',
         'الفرع الرئيسي',
         'تطبيقاتنا',
         'عنوانا',

     ]}
     />

        <div className='flex flex-col items-end gap-[20px]'>
         <h1 className='text-xl text-white'>جميع البراندات</h1>
         <div className='flex flex-wrap  w-[120px] gap-[20px] text-gray-400  justify-end'>
           
           {data&&
            data.map((el)=>{
               return(
                 <Link 
                     to={`prand/${el.id}`}
                     key={el.id}
                     >
                       {el.name}
                 </Link>
               )
           })
           }
           
        
         </div>
      </div>

     

    <div className='flex  items-center gap-[30px] 
        justify-end w-[280px] '>
            <Link
            to={"https://www.facebook.com/elrahmamall?locale=ar_AR"}
            >
            <FaFacebook className='text-white duration-200 hover:text-blue-900 text-2xl'/> 
            </Link>
            <Link>
            <IoLogoInstagram className='text-white duration-200 hover:text-blue-900 text-2xl'/> 
            </Link>
            <Link>
            <FaTiktok className='text-white duration-200 hover:text-blue-900 text-2xl'/> 
            </Link>
        </div>


    </div>
    <div className='flex w-full xs:flex-wrap justify-between'>
    <img src={logo3} className='size-[100px] xs:size-[70px]' />
    <img src={logo4} className='size-[100px] xs:size-[70px]' />
    <img src={logo5} className='size-[100px] xs:size-[70px]' />
    <img src={logo7} className='size-[100px] xs:size-[70px]' />
    <img src={logo10} className='size-[100px] xs:size-[70px]' />
    <img src={logo11} className='size-[100px] xs:size-[70px]' />
    </div>

    <p className='text-white xs:text-xs'>الرحمه جروب 2024 © جميع الحقوق محفوظة</p>
    </div>
    </div>

  
  )
}
