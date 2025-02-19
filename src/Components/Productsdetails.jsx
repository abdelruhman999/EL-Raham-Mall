import React, { useEffect, useState } from 'react'
import logo1 from '../assets/image/cart-page.svg'
import { Link, useParams } from 'react-router-dom';
import useRequest from '../hooks/call';
import logo4 from '../assets/image/download.png'
import logo10 from '../assets/image/خدمة-فودافون-كاش.jpg'
import logo7 from '../assets/image/mastercard.png'
import Buttonpay from './Buttonpay';
import { surve } from '../utils/surve';
import Returnhome from './Returnhome';
import Loader from './Loader';

export default function Productsdetails() {
  const {id} = useParams()
  const [currentimg , setcurrentimg] = useState('')
  const [active,setactive] = useState(0)
  const{data,loading} =  useRequest ({
    url:`/api/v1/products?id=${id}`,
    method:'GET'  
  })
 function henddeleactive(index){
  setactive(index)
 }
  useEffect(()=>{
    if(data){
      data.map((el)=>{
        setcurrentimg(`${surve(el.image_1)}`)
      })
    }
  },[data])
  
  return (
    <div className='p-[20px] flex flex-col gap-[50px]' >
      <Returnhome text="تفاصيل المنتج"/>
   
   {
    loading?
     <Loader/>
     :
      data&&
       data.map((el)=>{
       
         
         return(
           <div className='bg-white  items-center p-[50px] flex justify-center gap-[100px] rounded-lg  shadow-lg' key={el.id}>
         <div className='flex flex-col items-center gap-[20px]'>
         
         <img src={currentimg} className='size-[400px]' />
         <div className='flex gap-[20px]'>
         <img
         onClick={()=>{
           setcurrentimg(`${surve(el.image_1)}`)
           henddeleactive(0)
         }
         }
         src={`${surve(el.image_1)}`} className={`size-[100px] ${active === 0 ? 'border-blue-700': ''} cursor-pointer border p-[10px]`} />
         <img
         onClick={()=>{
           henddeleactive(1)
           setcurrentimg(`${surve(el.image_2)}`)}
         }
         src={`${surve(el.image_2)}`} className={`size-[100px] ${active === 1 ? 'border-blue-700': ''} cursor-pointer border p-[10px]`} />
         <img
         onClick={()=>{
           henddeleactive(2)
           setcurrentimg(`${surve(el.image_3)}`)}
         }
         src={`${surve(el.image_3)}`} className={`size-[100px] ${active === 2 ? 'border-blue-700': ''} cursor-pointer border p-[10px]`} />
         </div>
 
         </div>
         <div className='flex items-center  flex-col gap-[100px]'>
 
          <h1 className='text-2xl font-semibold  text-center'>{el.name} </h1>

          <div className='flex flex-col  gap-[50px]'>

         <div className='flex  w-full justify-between gap-[50px]'>
         
           < div className='flex  items-start flex-col gap-[20px]'>
             <img src={`${surve(el.brand.image)}`} className='w-[120px]' alt="logo prand" />
             <p className='text-xl text-blue-600 font-semibold'>
               
              {el.price} <span className='text-sm text-gray-600'> ج.م </span>
 
             </p>
             <Link
             className='hover:text-blue-600 
              hover:border-b-[0.5px] 
               border-blue-600 text-gray-500 text-sm text-nowrap duration-200'
             >
               شاهد المزيد من  <span className='text-blue-600'>{el.categories[0].name} </span> |  <span className='text-blue-600 '>{el.brand.name}</span>
            </Link>
          
           </div>
 
           <div className='flex  gap-[10px] items-end flex-col '>
            <p className='text-green-600 font-semibold text-lg'>
             متوفر
            </p>
           
            <p className=' text-wrap text-gray-600 text-end  text-sm font-semibold w-[300px]'>
             {el.description}
            </p>
           
            </div>
 
         </div>
         <div className='bg-gray-300 w-full h-[0.2px]'></div>
         <div className='self-end flex flex-col gap-[20px]'>
             <p className='self-end text-gray-600 text-lg'>
               : ادفع من خلال بوابات الدفع الالكترونيه 
             </p>
            <div className='flex  justify-center   gap-[50px]'>
             <img src={logo10} alt="logo" className='w-[100px] h-[50px] rounded' />
             <img src={logo7} alt="logo" className='w-[130px] h-[50px] ' />
             <img src={logo4} alt="logo" className='w-[100px] h-[50px] rounded' />
            </div>
           </div>
           <div className='bg-gray-300 w-full h-[0.2px]'></div>
 
          </div>
           <Buttonpay
           font={18}
            number = {90}
            height = {50}
            key={el.id} 
            props = {el}
            />
         </div>
     
 
     </div>
        )
   
     })
     

   }
</div>
  )
}
