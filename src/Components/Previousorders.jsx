import React from 'react'
import useRequest from '../hooks/call'
import Loader from './Loader'
import Returnhome from './Returnhome'
export default function Previousorders() {



    const {data,loading} = useRequest({
        url:'/api/v1/orders',
        method:'GET'
    })


   
  return (
        <div className='flex flex-col xs:gap-[50px] gap-[70px]'>
     

        <Returnhome text='الاوردرات السابقه '/>

        
        {loading ?
          <Loader/>
          :
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
                <th className="py-3 px-4 border-b">حالة التوصيل</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((el) => {
                return (
                  <tr key={el.id} className="border-b">
                    <td className="py-3 px-4 text-center">{el.id}</td>
                    <td className="py-3 px-4 text-center">{new Date(el.order_date).toLocaleString()}</td>
                    <td className="py-3 px-4 text-center text-green-600 font-semibold">مكتمل</td>
                    <td className="py-3 px-4 text-center">بطاقة</td>
                    <td className="py-3 px-4 text-center">{el.total_price} جـ</td>
                    <td className="py-3 px-4 text-center hidden sm:table-cell">
                      {el.items.map((item) => {
                        return (
                          <div key={item.id}>..{item.product.name.slice(0, 20)}</div>
                        )
                      })}
                    </td>
                    <td className="py-3 px-4 text-center">{el.country.name}</td>
                    <td className="py-3 px-4 text-center text-green-500">تم التوصيل</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        }
        </div>

  )
}
