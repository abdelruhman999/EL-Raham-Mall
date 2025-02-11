import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRequest from '../hooks/call';
import ProductShape from './ProductShape';
import PriceFilter from './PriceFilter ';
import Loader from './Loader';
import { maxcontext } from '../pages/Home';

export default function Cutogrydetails() {
  const {maxandmin} = useContext(maxcontext)
    const {id} = useParams()

    const {loading} = useRequest({
        url:`/api/v1/products?category=${id}`,
        method:'GET'
    })

  return (
    <>
    {
      loading ?
      <Loader/>
    :

    <div className='flex p-[10px] justify-between gap-[10px]'>
     <div className='bg-white
      h-fit rounded items-end flex flex-col
      p-[20px] gap-[30px]'>
          <p className='text-4xl text-gray-600 '>
           : سعر المنتج
          </p>
          <PriceFilter/>
      </div>

      <div className=' gap-[10px] flex-wrap justify-start  w-full  flex'>

        {
       
       maxandmin &&
       maxandmin.map((el,index) => {
              return ( 
                    <ProductShape key={index}  props = {el}/>       
              );
          })
        }
      </div>
     
    </div>
    }
    </>
  )
}
