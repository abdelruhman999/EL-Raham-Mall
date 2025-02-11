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

export default function Navigation() {
  const {data} = useRequest({
    url:'/api/v1/brands',
    method:'GET'
  })
  return (
    <div className='bg-gray-900 flex
    gap-[20px] flex-col items-center pt-[80px] pr-[80px] pl-[80px]'>
    <div className='
     w-full text-white 
     flex  justify-between
     '>
     <List
     header = 'الفئات الرئيسية'
     texts={[
        
          'تليفزيونات والكترونيات',
          'الأجهزة المنزلية',
          'تكييفات ومنقيات الهواء',
          'منتجات الصحة والعناية الشخصية',
          'ساعات',
          'قطع غيار استهلاكية',
          'منتجات حصرية',
          'عروض وخصومات'   
        ]}
     />

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
         <div className='flex flex-col text-gray-400 gap-[10px] items-end'>
           
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
    <div className='flex w-full justify-between'>
    <img src={logo3} className='size-[100px]' />
    <img src={logo4} className='size-[100px]' />
    <img src={logo5} className='size-[100px]' />
    <img src={logo7} className='size-[100px]' />
    <img src={logo10} className='size-[100px]' />
    <img src={logo11} className='size-[100px]' />
    </div>

    <p className='text-white '>الرحمه جروب 2024 © جميع الحقوق محفوظة</p>
    </div>

  
  )
}
