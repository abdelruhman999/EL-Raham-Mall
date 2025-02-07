import React, { useContext, useEffect } from 'react'
import { datacontext, ValueContext } from '../pages/Home'
import logo1 from '../assets/image/cart-page.svg'
import { Link } from 'react-router-dom'
import { IoMdArrowDropleft } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import logo2 from '../assets/image/cart-payment-logos.webp'

export default function ShoppingBage() {
    const {value,setValue} = useContext(ValueContext)
    const {data}=useContext(datacontext)
    function deleteitem(){
      setValue(value-1)
    }
  
  return (
    <div className=' flex flex-col items-center '>
      {
      (value === 0)?
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
                <div className='flex self-end flex-row-reverse gap-[10px] items-center'>
                  <div className='flex text-gray-400
                   items-center gap-[5px]'>
                  <IoMdArrowDropleft />
                  <Link
                  className='hover:text-blue-500 hover:border-b-[1px] duration-200 hover:border-blue-400'
                  to={'/'}
                  >
                    الصفحه الرئيسيه
                  </Link>
                  </div>
                  <p className=''>سلة التسوق</p>
                </div>


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
                      data&&
                        <tr className='text-center'>
                          <td className="border border-gray-300 px-4 py-2">{data.price}</td>
                          <td className="border border-gray-300 px-4 py-2">منتج 1</td>
                          <td className="border border-gray-300 px-4 py-2">{data.price} </td>
                          <td className="border flex  items-center gap-[50px] flex-row-reverse border-gray-300 px-5 py-2">
                            <img src={data.img} className=' size-[100px]' />
                            <div className='flex flex-col gap-[10px]'>
                              <p className='font-semibold text-sm'> {data.discription}</p>
                              <div
                              onClick={()=>{deleteitem()}}
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
                     }
                       
                     

                      </tbody>
                    </table>

                      <div className='w-[30%] flex gap-[20px] flex-col items-center
                      rounded-lg  bg-gray-300'>
                       <p className='text-xl w-full p-[10px] text-center'>
                        قيمة الفاتوره 
                        </p>
                        <div className='bg-gray-200 w-full h-[0.5px]'></div>
                        <div className='flex items-end text-gray-500 p-[50px] text-sm w-full  flex-col gap-[5px]'>
                          <div className='flex w-full items-center justify-between'>
                            <p>
                            ج.م 7,599
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
                            ج.م 7,599
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
                        text-white rounded-lg w-[300px] p-[12px] cursor-pointer
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
