import React, { useContext, useEffect } from 'react'
import Productsdetails from './Productsdetails'
import useRequest from '../hooks/call';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { surve } from '../utils/surve';
import { datacontext, ValueContext } from '../pages/Home';


export default function Products() {
      const {data1,setdata1}=useContext(datacontext)
      const {value,setValue} = useContext(ValueContext)
    

    const {data,error,loading}= useRequest({
          url:'/api/v1/home-products',
          method:'GET',
          
      })

    //   useEffect(()=>{
    //     if(data){

    //         console.log(data);
    //     }      
    // },[data])
   
  return (
    <>
    {data && 

      data.map((el)=>{
      
  return(

    <div key={el.id}  className='flex flex-col gap-[20px]  items-end '>
    
       <h1 className='text-3xl text-gray-800 p-2'>{el.name}</h1>
        <div className='bg-gray-300 w-full h-[1px]'></div>
        
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={0} 
          slidesPerView={5} 
          className="w-full"
        >
      {el.products &&
       
      el.products.map((el)=>{   
        return(
          <SwiperSlide key={el.id}> 
              <div className='pl-[40px]'>
                  <div className='bg-white
                  h-[300px] justify-between gap-[10px] w-[200px]
                rounded-lg flex flex-col
                  items-center p-[15px]'>
                        <img className='size-[100px] rounded' src={surve(`${el.image_1}`)} />
                        <p className='text-sm text-gray-500 w-full
                         font-semibold  text-end'>{el.description}</p>
                        <p className='text-lg text-gray-800 font-bold'>{el.price} ج.م</p>
                        <div
                         onClick={()=>{
                                setdata1([ 
                                   ...data1,
                                {
                                  id:el.id,
                                  img:el.image_1,
                                  discription:el.description,
                                  price:el.price
                                }
                                 ])
                                setValue(value+1)
                                }}
                        className='flex justify-center
                        items-center text-sm cursor-pointer
                        bg-green-500 text-white p-[10px]
                          rounded-lg w-[180px] shadow-lg'>
                            اضف الى عربة التسوق 
                        </div>
                  </div>
                </div>
      
          </SwiperSlide>
        )
       
      })
  
      
      }
        
          
    
      
        </Swiper>
  
    </div>
          
         
         )
     
       })
       }
    </>
    
  )
}
