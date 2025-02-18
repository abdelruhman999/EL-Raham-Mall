import React, { useContext} from 'react'
import { datacontext, totalcontext } from '../pages/Home'
import logo1 from '../assets/image/cart-page.svg'
import { Link } from 'react-router-dom'
import { IoMdArrowDropleft } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import logo2 from '../assets/image/cart-payment-logos.webp'
import { surve } from '../utils/surve';
import Returnhome from './Returnhome';

export default function ShoppingBage() {
    const {data1,setdata1}=useContext(datacontext)
    const {total} = useContext(totalcontext)
    
     

    function deleteitem(index){
     
   setdata1(data1.filter((_,i)=> i !== index))
  
    }
  
  
  return (
    <div className=' flex flex-col     h-screen justify-center items-center'>
      {
      (data1.length === 0)?
       <div className='flex flex-col gap-[20px] items-center'>
        <img src={logo1} /> 
        <p className='font-semibold text-sm'>  عربة التسوق فارغه </p>
        <Link 
        to={'/'}
        className='flex items-center justify-center  bg-green-500
        text-white rounded-lg w-[180px] p-[12px] cursor-pointer
         text-sm font-semibold duration-200 hover:bg-blue-600'>
            العوده للتسوق
        </Link>
        </div> 
        :(
            <div className=' pr-[150px] pl-[150px] gap-[30px] w-full flex flex-col  items-center'>
              < Returnhome text="سله التسوق "/>


                <div className='flex  w-full   flex-col gap-[20px] items-end'>
                    <p className=' text-2xl'> سله التسوق </p>
                    <div className='flex flex-row-reverse gap-[20px] w-full justify-between'>
                    <table className="bg-white h-[150px] w-[70%]  ">
                      <thead className="bg-gray-200 ">
                        <tr>
                          <th className="border  border-gray-300 px-4 py-2">الإجمالي</th>
                          <th className="border border-gray-300 px-4 py-2">الكميّة</th>
                          <th className="border border-gray-300 px-4 py-2">السعر</th>
                          <th className="border border-gray-300 px-4 py-2">سلعة</th>
                        </tr>
                      </thead>
                      <tbody>
                     {
                      data1&&
                      data1.map((el,index)=>{
                        return(
                        <tr key={index} className='text-center'>
                          <td className="border border-gray-300 px-4 py-2">{el.price}</td>
                          <td className="border border-gray-300 px-4 py-2">منتج 1</td>
                          <td className="border border-gray-300 px-4 py-2">{el.price} </td>
                          <td className="border flex  items-center gap-[50px] flex-row-reverse border-gray-300 px-5 py-2">
                            <img src={`${surve(el.img)}`} className=' size-[100px]' />
                            <div className='flex flex-col gap-[10px]'>
                              <p className='font-semibold text-sm'> {el.discription}</p>
                              <div
                              onClick={()=>{deleteitem(index)}}
                              className='flex 
                               text-red-500 cursor-pointer 
                               justify-end gap-[5px] items-center'>
                                <p>
                                احذف المنتج
                                </p>   
                              <MdDelete />
                              </div>
                            </div>
                            
                          </td>
                        </tr>
                        )

                      })
                     }
                       
                      </tbody>
                    </table>

                      <div className='w-[30%] h-[450px] flex gap-[20px]
                       flex-col items-center
                      rounded-lg  bg-gray-300'>
                       <p className='text-xl w-full p-[10px] text-center'>
                        قيمة الفاتوره 
                        </p>
                        <div className='bg-gray-200 w-full h-[0.5px]'></div>
                        <div className='flex items-end text-gray-500 p-[50px] text-sm w-full  flex-col gap-[5px]'>
                          <div className='flex w-full items-center justify-between'>
                            <p>
                           {total} ج.م
                            </p>
                            <p>
                             الاجمالي
                            </p>
                          </div>
                          <div className='flex w-full items-center justify-between '>
                            <p>
                            ج.م 0
                            </p>
                            <p>
                            الشحن (مجاني)
                            </p>
                          </div>
                          <div className='flex w-full items-center justify-between '>
                            <p>
                            {total} ج.م
                            </p>
                            <p>
                            إجمالي الطلب	
                            </p>
                          </div>
                        </div>
                        <div className='bg-gray-200 w-full h-[0.5px]'></div>
                        <Link 
                        to={'/'}
                        className='flex items-center justify-center  bg-green-500
                        text-white rounded-lg w-[90%]  p-[12px] cursor-pointer
                        text-sm font-semibold duration-200 hover:bg-blue-600'>
                             تاكيد الطلب
                        </Link>
                        <img src={logo2} className=' p-2 '/>
                      </div>
                    </div>
                </div>
            </div>
        )  
      } 
        
    </div>
  )
}
