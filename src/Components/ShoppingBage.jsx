import React, { useContext, useState} from 'react'
import { datacontext, totalcontext } from '../pages/Home'
import logo1 from '../assets/image/cart-page.svg'
import { Link } from 'react-router-dom'
import { IoMdArrowDropleft } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import logo2 from '../assets/image/filtered-payment-logos.png'
import { surve } from '../utils/surve';
import Returnhome from './Returnhome';
import { FiX } from "react-icons/fi";

export default function ShoppingBage() {
    const {data1,setdata1}=useContext(datacontext)
    const {total} = useContext(totalcontext)
    const [hidden , sethedden] =useState(false)
    
     

    function deleteitem(index){
     
   setdata1(data1.filter((_,i)=> i !== index))
  
    }
  
  
  return (
    <div className=' flex flex-col  relative  justify-center items-center'>
      {
      (data1.length === 0)?
       <div className='flex flex-col pt-[50px] justify-center  w-full gap-[20px] items-center'>
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
            <div className=' pr-[150px] xs:pr-0 xs:pl-0
             pl-[150px] gap-[30px] w-full
              flex flex-col  items-center

              '>
              < Returnhome text="سله التسوق"/>
                <div className='flex  w-full  flex-col gap-[20px] items-end'>
                    <p className=' text-2xl xs:pr-[20px]'> سله التسوق </p>
                    <div className='flex flex-row-reverse
                     gap-[20px] xs:flex-col xs:items-center w-full justify-between'>
                    <table className="bg-white h-[150px] w-[70%] xs:hidden ">
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
                              <p className='font-semibold text-sm  '> {el.discription}</p>
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
                    <table className="bg-white w-[90%] hidden xs:block border border-gray-300">
                    <tbody>
                      {data1 &&
                        data1.map((el, index) => (
                          <>
                          <tr key={index} className="border-b border-gray-300">
                            <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">سلعة</td>
                            <td className="border border-gray-300 px-4 py-2 flex flex-col items-center">
                              <img src={`${surve(el.img)}`} className="size-[100px]" />
                              <p className="font-semibold text-sm text-center">{el.discription}</p>
                              <div
                                onClick={() => deleteitem(index)}
                                className="flex text-red-500 cursor-pointer justify-center gap-[5px] items-center mt-2"
                              >
                                <p>احذف المنتج</p>
                                <MdDelete />
                              </div>
                            </td>
                          </tr>

                          <tr className="border-b border-gray-300">
                            <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">السعر</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{el.price} ج</td>
                          </tr>
                          <tr  className="border-b border-gray-300">
                            <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">الكميّة</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">منتج 1</td>
                          </tr>
                          <tr  className="border-b border-gray-300">
                            <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">الإجمالي</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{el.price} ج</td>
                          </tr>
                          </>
                       
                        ))}
                    </tbody>
                  </table>


                      <div className='w-[30%] xs:w-[90%]  flex gap-[20px]
                       flex-col items-center xs:gap-[10px]
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
                        <div 
                        onClick={()=>{
                        sethedden(true)
                    
                        }}  
                        className='flex items-center justify-center  bg-green-500
                        text-white rounded-lg w-[90%]  p-[12px] cursor-pointer
                        text-sm font-semibold duration-200 hover:bg-blue-600'>
                             تاكيد الطلب
                        </div>
                        <img src={logo2} className=' p-2 '/>
                      </div>
                    </div>
                </div>
            </div>
        )  
      } 
        {
         hidden&&
          <div className='p-[50px] flex 
          absolute  flex-col
          w-[700px] xs:w-[350px] bg-white
           rounded-lg  shadow
          items-center '>
           
            <FiX
            onClick={()=>{
              sethedden(false)
            }}
            className="text-black absolute top-2 right-2 cursor-pointer text-2xl"
            />
            <form 
            className='flex flex-col gap-[50px] xs:gap-[20px]  w-full items-end'
            >

              <div className='w-full flex flex-col items-end gap-[15px]'>
              <label className='text-lg font-semibold'>
                 : الاسم     
              </label>
              <input
              placeholder='ادخل الاسم ثنائي'
              className='w-[90%] outline-none h-[40px]  bg-gray-300 text-gray-800 
              rounded text-end pr-[10px]'
              type="text" name="name" required/>
              </div>

              <div className='w-full flex flex-col items-end gap-[15px]'>
              <label className='text-lg font-semibold'> 
              :  رقم الهاتف 
              </label>
              <input
              placeholder='ادخل رقم الهاتف '
              className='w-[90%] outline-none h-[40px]  bg-gray-300 text-gray-800 
              rounded text-end pr-[10px]'
              type="text" name="phone" required/>
              </div>
              
              <div className='w-full flex flex-col items-end gap-[15px]'>
              <label className='text-lg font-semibold'>
              :  (إذا كان هناك توصيل) العنوان
              </label>
              <input
              placeholder='من فضلك ادخل عنوان تفصيلي'
              className='w-[90%] outline-none h-[40px]  bg-gray-300 text-gray-800 
              rounded text-end pr-[10px]'
              type="text" name="address"/>
              </div>

              <div className='flex flex-col gap-[15px] items-end'>
              <label className='text-lg font-semibold'> 
               : طريقة الدفع 
              </label>
              <div className='flex items-center gap-[20px]'>

              <input type="radio" name="payment_method" value="cash" checked/> الدفع عند الاستلام
              <input type="radio" name="payment_method" value="online"/> الدفع أونلاين
              </div>
              </div>

              <input 
                 type='submit'  
                 value={' تاكيد الطلب'}   
                className='flex items-center justify-center self-center  bg-green-500
                text-white rounded-lg w-[90%]  p-[12px] cursor-pointer
                text-sm font-semibold duration-200 hover:bg-blue-600'/>
            </form>
          

          </div>
        }
        
    </div>
  )
}
