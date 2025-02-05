import React from 'react'
import { Link } from 'react-router-dom'
import FacebookCurd from './FacebookCurd';
import Googlecurd from './Googlecurd';
import axios from 'axios';

export default function Login() {
  
async  function henddellsubmit(){
    e.preventDefault();

    try{
      const res = await axios.post("/api/v1/login/",{
        email_or_phone:"01111111111",
        password:"963215"        
      })
      console.log(`تم تسجيل البيانات بنجاح ${res.data}`);  
    }
      catch(error){
      console.error("حدث خطأ:", error.res?.data || error.message);
      }

  }
  return (
    <div className=' flex flex-col gap-[50px] items-center'>
        
      <div className='flex gap-[20px]'> 
      <FacebookCurd/>
      <Googlecurd/>
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

        <form 
        onSubmit={henddellsubmit}
        className='bg-white
        shadow-lg shadow-gray-200 
        rounded  flex flex-col gap-[30px]
        items-end p-[40px]'>
            <h1 className='font-bold text-3xl'>الأعضاء المسجلين</h1>
            <div className='flex flex-col items-end gap-[20px]'>
                <input
                required
                 type="text"
                 placeholder='ادخل الايميل / رقم الموبايل'
                 className='text-gray-400 text-end pr-2
                 outline-none  w-[450px]
                 border rounded h-[55px] 
                 '
                 />
                 <p className='text-sm text-gray-400'>رقم الموبايل بدون كود الدولة مثال: 01155555555</p>
                 <input
                 required
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
            <input
            type='submit'
            className='bg-blue-800 flex 
            items-center justify-center
            rounded-lg font-semibold shadow cursor-pointer
            text-white text-lg w-full h-[55px]'/>
                تسجيل الدخول
        
        </form>


      </div>

    </div>
  )
}
