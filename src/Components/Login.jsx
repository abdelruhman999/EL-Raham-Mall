import React from 'react'
import logo1 from '../assets/image/unnamed.png'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
  return (
    <div className=' flex flex-col gap-[50px] items-center'>
        
      <div className='flex gap-[20px]'> 
        <Link className='bg-blue-900 h-[45px] 
         flex items-center gap-[50px]  justify-between 
         hover:scale-105 duration-200  shadow shadow-gray-500'>
            <div className='flex items-center gap-[20px]'>
            <FaFacebookF className='text-white pl-4  text-3xl ' />
            <div className='bg-gray-500 w-[1px] h-[45px]'></div>
            </div>
           
            <p className='text-white pr-2  w-full'>تسجيل الدخول بأستخدام فيسبوك</p>
           
          
        </Link>
        <Link className='bg-white h-[45px] 
         flex items-center gap-[50px] justify-between 
         hover:scale-105 duration-200  shadow shadow-gray-500'>
             <div className='flex items-center '>
            <img src={logo1} className='size-[50px]  p-[10px]  ' />
            <div className='bg-gray-400 w-[1px] h-[45px]'></div>
             </div>
            <p className='text-black pr-2'>تسجيل الدخول بأستخدام جوجل</p>
        </Link>    
      </div>

      

      <div className='flex gap-[10px]'>

      <div className='bg-white
        shadow-lg shadow-gray-200 
        rounded-lg  flex flex-col gap-[30px]
        items-end p-[40px] h-[200px] w-[500px]'>

        <h1 className='font-bold text-3xl'>عضو جديد</h1>
        <Link 
        to={'/EL-Raham-Moll/login/Register'}
        className=' flex items-center
            justify-center rounded-lg
            font-semibold border border-blue-600
            cursor-pointer text-lg
             w-full h-[55px] text-blue-500'>
                 انشاء حساب
        </Link>
       </div>

        <div className='bg-white
        shadow-lg shadow-gray-200 
        rounded  flex flex-col gap-[30px]
        items-end p-[40px]'>
            <h1 className='font-bold text-3xl'>الأعضاء المسجلين</h1>
            <div className='flex flex-col items-end gap-[20px]'>
                <input
                 type="text"
                 placeholder='ادخل الايميل / رقم الموبايل'
                 className='text-gray-400 text-end pr-2
                 outline-none  w-[450px]
                 border rounded h-[55px] 
                 '
                 />
                 <p className='text-sm text-gray-400'>رقم الموبايل بدون كود الدولة مثال: 01155555555</p>
                 <input
                 type="text"
                 placeholder='كلمة المرور'
                 className='text-gray-400 w-[450px] outline-none
                 border rounded h-[55px] text-end pr-2'
                 />
                 <div className='flex    w-full justify-between'>
                  
                    <p className='text-gray-400'>
                    ليس لديك حساب؟  
                    <span>
                        <Link className='text-blue-600'>
                           تسجيل حساب
                        </Link>
                    </span>
                    </p>

                    <Link className='text-blue-600'>
                    نسيت كلمة السر؟
                    </Link>
                 </div>
            </div>
            <div className='bg-blue-800 flex 
            items-center justify-center
            rounded-lg font-semibold shadow cursor-pointer
            text-white text-lg w-full h-[55px]'>
                تسجيل الدخول
            </div>
        </div>
      </div>

    </div>
  )
}
