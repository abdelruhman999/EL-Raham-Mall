import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Resultpaymentdetails() {
    const [words ,setwords] = useState('')
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const success = queryParams.get("success")
   const pending =  queryParams.get("pending")
   const id =  queryParams.get("id")
   const source_data =  queryParams.get("source_data.type")
   const sub_type =  queryParams.get("source_data.sub_type")
   const amount_cents =  queryParams.get("amount_cents")
   const created_at =  queryParams.get("created_at")
   
   
   
   useEffect(()=>{
       
       if(pending === 'true'){
        setwords('قيد الانتظار')
      }
    else{
        if(success){
            setwords('ناجحه')
        }else{
            setwords('فاشله')
        }
    }

   },[words,pending])

  return (
    <div className='flex justify-center items-center' >
        <div className='bg-white rounded-lg 
        flex w-[450px] flex-col items-center
           gap-[50px] p-[20px]'>
          <h1 className='text-4xl'>
            تفاصيل الدفع 
          </h1>
          <div className='w-full flex flex-col  gap-[25px]'>

            <div className='flex items-center w-full  justify-between '>
            <p  className='text-xl 
              font-semibold text-green-500'>
                العمليه  {words} 
            </p>
            <p className='text-xl '>
              :  حالة الدفع 
            </p>
            </div>
            <div className='bg-gray-300 w-full h-[0.5px]'></div>

            <div className='flex items-center   w-full  justify-between'>
            <p  className='text-xl 
              font-semibold text-green-500'>
                  {id} 
            </p>
            <p className='text-xl '>
              :   رقم العمليه 
            </p>
            </div>
            <div className='bg-gray-300 w-full h-[0.5px]'></div>

            <div className='flex items-center   w-full  justify-between'>
            <p  className='text-xl 
              font-semibold text-green-500'>
            { new Date(created_at).toLocaleString()}
            </p>
            <p className='text-xl '>
              :   تاريخ الدفع  
            </p>
            </div>
            <div className='bg-gray-300 w-full h-[0.5px]'></div>

            <div className='flex items-center   w-full  justify-between'>
            <p  className='text-xl 
              font-semibold text-green-500'>
                  {source_data} 
            </p>
            <p className='text-xl '>
              :    طريقة الدفع 
            </p>
            </div>
            <div className='bg-gray-300 w-full h-[0.5px]'></div>
            <div className='flex items-center  w-full  justify-between'>
            <p  className='text-xl 
              font-semibold text-green-500'>
                  {sub_type} 
            </p>
            <p className='text-xl '>
              :     نوع البطاقة 
            </p>
            </div>
            <div className='bg-gray-300 w-full h-[0.5px]'></div>
            <div className='flex items-center   w-full  justify-between'>
            <p  className='text-xl 
              font-semibold text-green-500'>
                  {amount_cents/100} Eg
            </p>
            <p className='text-xl '>
              :     المبلغ المدفوع   
            </p>
            </div>
          </div>

        </div>
      
    </div>
  )
}
