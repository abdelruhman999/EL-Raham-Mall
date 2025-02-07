import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import logo3 from '../assets/image/alahly-en.svg'
import logo4 from '../assets/image/etisalatcash-en.svg'
import logo5 from '../assets/image/cib.svg'
import logo7 from '../assets/image/master-card.svg'
import logo10 from '../assets/image/vcash-en.svg'
import logo11 from '../assets/image/visa-en.svg'
import List from './List';
import { Link } from 'react-router-dom';
export default function Navigation() {
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
         'المدونة ',
         'فروعنا الرئيسية  ',
         'مراكز خدمة الرحمه   ',
         'تطبيقاتنا',
         'خريطة الموقع  ',
         'وظائف '

     ]}
     />

     <List
     header = 'خدمة العملاء '
     texts={[
        ' الشروط والأحكام ',
        'سياسة الخصوصية ',
        ' سياسة البيع ',
        ' سياسة الإستبدال و الإرجاع ',
        'الدعم والمساعدة',
        'اتصل بنا   ' 
     ]}
     />

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
