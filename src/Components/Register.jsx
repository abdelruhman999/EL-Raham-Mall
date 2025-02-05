import React, { useState } from 'react'
import FacebookCurd from './FacebookCurd'
import Googlecurd from './Googlecurd'
import Swal from "sweetalert2";
import axios from 'axios';

export default function Register() {
    const [Firstname ,setFirstname] =useState('')
    const [Secondname ,setSecondname] =useState('')
    const [Email ,setEmail] =useState('')
    const [Firstsecurity ,setFirstsecurity] =useState()
    const [Secondsecurity ,setSecondsecurity] =useState()
    const [Phone ,setPhone] =useState()

   async function Hendellsubmited(e){
    e.preventDefault();
    if(!Firstname || 
      !Secondname || 
      !Email || 
      !Firstsecurity || 
      !Secondsecurity || 
      !Phone){
        Swal.fire('يرجى ملء جميع الحقول');
        console.log('يرجى ملء جميع الحقول');
        return
    }
    if(isNaN(Number(Phone))){
        Swal.fire("يجب ان يكون الهاتف رقما")        
        return
    }
    if(Phone.length < 11 || Phone.length > 11){
        Swal.fire("يجب ان يكون رقم الهاتف مكون من 11 رقم")
        return
    }
    try{
       const response = await axios.post("/api/v1/register/",{
        email:Email,
        phone_number: Phone,
        password: Firstsecurity,
        })
        console.log("تم التسجيل بنجاح:", response.data);
    }
    catch(error){
        console.error("حدث خطأ:", error.response?.data || error.message);
    }


    }
  return (
    <div className='flex flex-col items-center gap-[20px]'>
        <div className='flex gap-[20px]'> 
            <FacebookCurd/>
            <Googlecurd/>
        </div>
        <form
        onSubmit={Hendellsubmited}
        className='bg-white p-[30px] items-end gap-[20px] shadow flex flex-col  rounded-lg'>
            <h1 className='text-2xl font-semibold'>المعلومات الشخصيه</h1>
            <div className='flex flex-row-reverse gap-[20px]'>
                <div className='flex flex-col gap-1 items-end'>
                    <label htmlFor="الإسم الأول">الإسم الأول</label>
                    <input
                    onChange={(e)=>{
                        setFirstname(e.target.value);
                        
                    }}
                    required
                    className='w-[250px] h-[50px] text-end pr-[10px] rounded-lg outline-none border'
                    id='الإسم الأول' 
                    type="text" />
                </div>
                <div className='flex flex-col gap-1 items-end'>
                    <label htmlFor="اسم العائلة">اسم العائلة</label>
                    <input
                      onChange={(e)=>{
                        setSecondname(e.target.value);
                        
                    }}
                    required
                    className='w-[250px] h-[50px] text-end pr-[10px] rounded-lg outline-none border'
                     id='اسم العائلة'
                      type="text" />
                </div>     
            </div>
                <h1 className='text-2xl font-semibold'> بيانات الدخول</h1>
                <div className='flex  w-full flex-col gap-1 items-end'>
                    <label htmlFor="البريد">البريد الألكتروني</label>
                    <input
                     onChange={(e)=>{
                        setEmail(e.target.value);
                        
                    }}
                    required
                    className='w-full h-[50px] text-end pr-[10px] rounded-lg outline-none border'
                    id='البريد'
                     type="email" />
                </div>
                <div className='flex  w-full flex-col gap-1 items-end'>
                    <label htmlFor="كلمه">كلمه المرور</label>
                    <input
                      onChange={(e)=>{
                        setFirstsecurity(e.target.value);
                        
                    }}
                    required
                    className='w-full h-[50px] text-end pr-[10px] rounded-lg outline-none border'
                    id='كلمه'
                     type="password" />
                </div>
                <div className='flex  w-full flex-col gap-1 items-end'>
                    <label htmlFor="تأكيد">تأكيد كلمة المرور</label>
                    <input
                     onChange={(e)=>{
                        setSecondsecurity(e.target.value);
                        
                    }}
                    required
                    className='w-full h-[50px] text-end pr-[10px] rounded-lg outline-none border'
                    id='تأكيد'
                     type="password" />
                </div>
                <h1 className='text-2xl font-semibold'>  التحقق من الهاتف المحمول</h1>
                <div className='flex  w-full flex-col gap-1 items-end'>
                    <label htmlFor="رقم الموبايل">رقم الموبايل</label>
                    <input
                     onChange={(e)=>{
                        setPhone(e.target.value);
                        
                    }}
                    required
                    className='w-full h-[50px] text-end pr-[10px] rounded-lg outline-none border'
                    id='رقم الموبايل'
                     type="text" />
                </div>

                <input 
                value={" انشاء حساب"}
                type='submit'
                className=' flex items-center
                    justify-center rounded-lg
                    font-semibold border bg-blue-800
                    cursor-pointer text-lg
                    w-full h-[55px] text-white'   
                    />               
        </form>
    </div>
  )
}
