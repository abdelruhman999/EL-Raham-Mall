import React, { useEffect, useState } from 'react'
import useRequest from '../hooks/call'
import Returnhome from './Returnhome'
import Loader from './Loader'
import ProductShape from './ProductShape'

export default function Saledetails() {
    const [prosuct , setproduct] = useState([])
    const {data,loading} = useRequest({
        url:'/api/v1/products',
        method:'GET'
    })
    useEffect(()=>{
        if(data){
           
            
            setproduct(data.filter((el)=> el.categories.map((el)=>{
             el.is_sale == true
            })));
            
        }
    },[data])
  return (
    <div className=' flex gap-[10px] flex-col items-end'>
    <Returnhome text="العروض والخصومات"/>
    <div  className=' p-[10px] self-center justify-center flex flex-wrap gap-[20px]'>
  {
    loading ?
    <Loader/>
    :
    prosuct.map((el)=>{
      return(
        <div className='xs:w-[45%]'>
        <ProductShape key={el.id} props = {el}/>  
        </div>
      )
    })
    
    
  }
  </div>
</div>
  )
}
