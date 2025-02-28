import React, { useEffect, useState } from 'react'
import useRequest from '../hooks/call'
import Loader from './Loader'
import Returnhome from './Returnhome'
import logo from '../assets/image/logopre.png'
import { FiX } from 'react-icons/fi';
import Swal from 'sweetalert2'
import { sendRequest } from '../calls/request'

export default function Previousorders() {


  const [div , setDiv] = useState({
    showDiv:false,
    value:'',
    order_uuid:'',
    paymethodid:0

  })
   

    const {data,loading} = useRequest({
        url:'/api/v1/orders',
        method:'GET'
    })

    function hendlleclickpaymentlick(){
      console.log("salem");
      setDiv((prev)=>({
        ...prev,
        showDiv:true
      }))
      
    }

    const { data:paymethod } = useRequest({
      url: '/api/v1/payment-methods',
      method: 'GET'
  });

  
  async function hendllesubmit(e){
      e.preventDefault();
      console.log(paymethod);
      if(div.value === ''){
        Swal.fire(' يجب اختيار طريقة الدفع  ')
        return
      }

       sendRequest({
                url:`/api/v1/payment-link?order_uuid=${div.order_uuid}&payment_method_id=${div.paymethodid}`,
                method:'GET',
            }).then((res)=>{
                window.open(res.url);

            })
   }


  return (
        <div className='flex relative  flex-col xs:gap-[50px] gap-[70px]'>
        <Returnhome text='الاوردرات السابقه '/>
        {loading ?
          <Loader/>
          :
          data.length>0 ?

          <div className="p-[20px] overflow-x-auto ">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b">رقم الأوردر</th>
                <th className="py-3 px-4 border-b">تاريخ الطلب</th>
                <th className="py-3 px-4 border-b">الحالة</th>
                <th className="py-3 px-4 border-b">طريقة الدفع</th>
                <th className="py-3 px-4 border-b">الإجمالي</th>
                <th className="py-3 px-4 border-b hidden sm:table-cell">المنتجات</th>
                <th className="py-3 px-4 border-b">العنوان</th>
                <th className="py-3 px-4 border-b"> عمليات الدفع </th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => {
              
             
            
                
                
                return (
                  <tr key={el.id} className="border-b">
                    <td className="py-3 px-4 text-center">{el.id}</td>
                    <td className="py-3 px-4 text-center">{new Date(el.order_date).toLocaleString()}</td>
                    <td className="py-3 px-4 text-center text-green-600 font-semibold">
                    {
                      el.is_paid ?
                      <p>
                        مكتمل 
                      </p>
                      :
                        el.is_delivery_paid ?
                        
                        <p>
                          مكتمل
                        </p>
                        :
                        <p
                        onClick={()=>{
                        
                          
                          hendlleclickpaymentlick()
                          setDiv((prev)=>({
                            ...prev,
                            order_uuid:el.order_uuid
                          }))

                        }
                         }
                       className="text-red-500 font-semibold 
                       animate-pulse bg-gray-200 p-2 rounded shadow-lg
                       cursor-pointer text-sm
                        ">أكمل الدفع الآن واستمتع بتجربتك! 💳✨
                        </p>



                    }
                    </td>
                    <td className="py-3 px-4 text-center">{el.payment_method?el.payment_method.name:'-'}</td>
                    <td className="py-3 px-4 text-center">{el.total_price} جـ</td>
                    <td className="py-3 px-4 text-center hidden sm:table-cell">
                      {el.items.map((item) => {
                        return (
                          <div key={item.id}>..{item.product.name.slice(0, 20)}</div>
                        )
                      })}
                    </td>
                    <td className="py-3 px-4 text-center">{el.country.name}</td>
                    <td className="py-3 px-4 text-center text-green-500">
                     {
                      el.is_paid ?
                      <p>
                        تم الدفع
                      </p>
                      :
                        el.is_delivery_paid ?
                        
                        <p className='text-orange-500'>
                          تم دفع قيمة التوصيل 
                        </p>
                      :<p className='text-red-500'>
                        لم يتم الدفع
                      </p>
                    }
                    
                     </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          :
          <div className='w-full flex flex-col items-center justify-center gap-[10px]'>
            <img src={logo} alt="" className='rounded' />
            <h1 className='text-black text-3xl font-semibold'>
           ! لا يوجد منتجات في قائمة مشترياتك
            </h1>
            <p className='text-gray-400  text-end text-wrap w-[300px]'>
        مول الرحمه مكانك الاول لكل احتياجات الالكترونيات والأجهزة. تسوق الأن أكبر تشكيلة منتجات و عروض و تسهيلات فالدفع.
            </p>
          </div>
        
        }
               {
                  div.showDiv &&
              <form
              onSubmit={hendllesubmit}
              className='absolute left-[35%]
              top-[30%] bg-gray-300 shadow-xl
              rounded-lg xs:w-[300px] xs:left-[10%] xs:top-[15%] w-[500px] gap-[40px]
              flex flex-col items-end
              '>
                <div className='relative'>
                <FiX
                        onClick={() => {
                           setDiv((prev)=>({
                            ...prev, 
                            value:'',
                            showDiv:false
                           }))
                        }}
                        className="text-black absolute hover:text-red-500 duration-200 top-2 right-2 cursor-pointer text-2xl"
                    />
         

                </div>
                   
                    <div className='flex flex-col pr-[20px] gap-[25px] items-end'>
                        <p className="text-lg  font-semibold">
                                اختر طريقة الدفع 
                        </p>
                          {
                            paymethod&&
                            paymethod.map((el)=>{
                            return(
                            <div
                            key={el.id}
                              className="flex items-center gap-[20px]">
                              <input
                             onClick={(e)=>{
                              setDiv((prev)=>({
                                ...prev,
                                paymethodid:el.id,
                                value:e.target.value
                              }))
                             }}
                                  type="radio"
                                  name="payment_method"
                                  value="cash"   
                              />
                              <p>
                              {el.name}
                              </p>
                           </div>
                            )
                            })
                          }

                        </div>

                        <div className=' flex justify-center pb-2 w-full '>
                        <input
                                type="submit"
                                value={' تاكيد الطلب'}
                                className="flex items-center justify-center self-center 
                                 bg-green-500
                              text-white rounded-lg w-[90%]  p-[12px] cursor-pointer
                              text-sm font-semibold duration-200 hover:bg-blue-600"
                                />
                            </div>
                  

               </form>
              }


    
        </div>

  )
}
