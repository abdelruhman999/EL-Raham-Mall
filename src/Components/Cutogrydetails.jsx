import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRequest from '../hooks/call';
import ProductShape from './ProductShape';
import PriceFilter from './PriceFilter ';
import Loader from './Loader';
import { maxcontext } from '../pages/Home';
import Cheakboxfilter from './Cheakboxfilter';

export default function Cutogrydetails() {
  const {maxandmin,setmaxandmin} = useContext(maxcontext)
    const {id} = useParams()

   
    const {data:productdetails,loading} = useRequest({
        url:`/api/v1/products`,
        method:'GET',
        params:{category:id}

    },[id])
    useEffect(()=>{
      if(productdetails){
        setmaxandmin(productdetails) 
      }
    },[productdetails])
  
  return (
    <>
    {
      loading ?
      <Loader/>
    :
    <div className='flex p-[10px] xs:flex-col  justify-between gap-[10px]'>

      <div className='flex flex-col gap-[10px]'>
      <div className='bg-white 
      h-fit rounded items-end flex flex-col
      p-[20px] gap-[30px]'>
          <p className='text-3xl text-gray-600 '>
           : اختر البراند 
          </p>
        <Cheakboxfilter/>
      </div>
     <div className='bg-white
      h-fit rounded items-end flex flex-col
      p-[20px] gap-[30px]'>
          <p className='text-3xl text-gray-600 '>
           : سعر المنتج
          </p>
          <PriceFilter/>
      </div>
      </div>

      <div className=' gap-[10px] flex-wrap 
       xs:justify-center justify-start 
        w-full  flex'>

        {   
       maxandmin &&
       maxandmin.map((el) => {
              return ( 
                <div className=' xs:w-[48%]'>

                  <ProductShape key={el.id}  props = {el}/>       
                </div>
                   );
          })
        }
      </div>
     
    </div>
    }
    </>
  )
}
