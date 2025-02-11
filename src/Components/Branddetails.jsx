import React, { useEffect, useState } from 'react'
import useRequest from '../hooks/call'
import { useParams } from 'react-router-dom'
import ProductShape from './ProductShape'
import Loader from './Loader'
import Returnhome from './Returnhome'

export default function Branddetails() {
  const {id} = useParams()
  const [branddata,setbranddata] = useState([])
 
  const {data ,loading} = useRequest({
    url:'/api/v1/products',
    method:'GET'
  })

  useEffect(()=>{
    if(data){

      setbranddata(data.filter((el)=> el.brand.id == id));

    }
    
  },[data,id])
  return (
    
     
  <div className=' flex gap-[10px] flex-col items-end'>
      <Returnhome text="المنتجات الخاصه بهذا البراند"/>
      <div  className=' p-[10px] self-center justify-center flex flex-wrap gap-[20px]'>
    {
      loading ?
      <Loader/>
      :
      branddata.map((el)=>{
        return(
          <ProductShape key={el.id} props = {el}/>  
        )
      })
      
      
    }
    </div>
  </div>
 
  
  )
}
