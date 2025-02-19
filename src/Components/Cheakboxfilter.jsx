import React, { useContext, useEffect, useState } from 'react'
import useRequest from '../hooks/call'
import { useParams } from 'react-router-dom';
import { maxcontext } from '../pages/Home';

export default function Cheakboxfilter() {
    const {setmaxandmin} = useContext(maxcontext)
    const [product,setproduct] = useState([])
    const [active,setactive] = useState("all")
    const { id } = useParams();

     

    const {data:productsData} = useRequest({
        url:`//api/v1/products?category=${id}`,
        method:'GET',
    
    },[id])

   
    const {data:brandsData } = useRequest({
        url:`/api/v1/brands`,
        method:'GET'
    })

   useEffect(()=>{
    if(productsData){
        setproduct(productsData)
    }
   },[productsData])

    function henddeleclick(index,name){
        setactive(index)   
       if(index === "all"){
        setmaxandmin(product)
       }else{
        setmaxandmin(product.filter((el)=>el.brand.name == name))
       }
    }
  
  return (
      <div className=' w-full  flex gap-[10px] flex-col items-end'>
          <div
                
                className='flex items-center 
                  w-full flex-row-reverse
                   justify-between gap-[50px]'>
                    <p 
                    className='font-semibold text-lg text-gray-400'> 
                      الكل  
                    </p>
        
                    <div
                    onClick={()=>{
                      henddeleclick("all")  
                    }}
                    className='size-[25px]
                    cursor-pointer rounded-full 
                    p-[3px] border border-gray-400
                    flex justify-center items-center '
                    > 
                        <div className={`bg-blue-500 duration-200 size-[90%] rounded-full
                             ${active === "all" ?'opacity-100 scale-100':'opacity-0 scale-0'}`}></div>
                    </div>
                </div>
    {
        brandsData&&
        brandsData.map((el,index)=>{
            
            return(
              
                <div
                key={el.id}
                className='flex items-center 
                  w-full flex-row-reverse
                   justify-between gap-[50px]'>
                    <p 
                    className='font-semibold text-lg text-gray-400'> 
                        {el.name}  
                    </p>
        
                    <div
                    onClick={()=>{
                      henddeleclick(index,el.name)  
                    }}
                    className='size-[25px]
                    cursor-pointer rounded-full 
                    p-[3px] border border-gray-400
                    flex justify-center items-center '
                    > 
                        <div className={`bg-blue-500 duration-200 size-[90%] rounded-full
                             ${active === index ?'opacity-100 scale-100':'opacity-0 scale-0'}`}></div>
                    </div>
                </div>
            
            ) 
        })
    }
        </div>
  )
}

