import React, { useContext, useEffect, useState } from 'react';
import {
    datacontext,
    delivery_pricecontext,
    hiddencontext,
    totalcontext
} from '../pages/Home';
import { FiX } from 'react-icons/fi';
import { sendRequest } from '../calls/request';
import Swal from 'sweetalert2';
import useRequest from '../hooks/call';


export default function Create_order() {
    const { hidden, sethedden } = useContext(hiddencontext);
    const { delivery_price, setdelivery_price } = useContext(delivery_pricecontext);
    const { data1 } = useContext(datacontext);
    const { total } = useContext(totalcontext);

    const [product, setproduct] = useState({
        active:0,
        idcountry: '',
        district: '',
        apartment: '',
        street: '',
        building: '',
        floor: '',
        delivery_price: '',
        raw_address: '',
        value:'',
        text:'',
        paymethod:'',
        paymethodid:0,
        is_online_payment:false,
        is_cash_payment:false,
        items: []
    });
    function henddeleclick(index) {
        setproduct((prev)=>({
            ...prev,
            active:index
        }))
    
        
      

        if(product.active === 0){
            setproduct((prev)=>({
                ...prev,
                is_cash_payment:true,
                is_online_payment:false,
            }))
            
      }
      else if(product.active === 1){
        setproduct((prev)=>({
            ...prev,
            is_cash_payment:false,
            is_online_payment:true,
        }))
      }
        

    }

   
    useEffect(() => {
      
        console.log(product.active);
    }, [product.active]);
    useEffect(() => {
      
        if (data1) {
            setproduct(prev => ({
                ...prev,
                items: data1.map(el => ({
                    product: el.id,
                    quantity: el.quantity
                }))
            }));
        }
    }, [data1]);

    

    const { data } = useRequest({
        url: '/api/v1/goves',
        method: 'GET'
    });
    const { data:paymethod } = useRequest({
        url: '/api/v1/payment-methods',
        method: 'GET'
    });

   

    async function henddelesubmit(e) {
        e.preventDefault();

        if (
            !product.district ||
            !product.apartment ||
            !product.street ||
            !product.building ||
            !product.floor ||
            !product.raw_address 
        ) {
            Swal.fire('يجب ملئ جميع الحقول');
            return;
         }

        if (isNaN(Number(product.floor))) {
            Swal.fire('يجب ان يكون رقم الدور رقما');
            return;
        }
        if (isNaN(Number(product.building))) {
            Swal.fire('يجب ان يكون رقم العماره رقما');
            return;
        }
        if(product.active === null ){
            Swal.fire ('يجب اختيار طريقة الدفع')
            return
        }
        if(product.idcountry === '' ){
            Swal.fire ('يجب اختيار المحافظه ')
            return
        }
        if(product.paymethod === '' ){
            Swal.fire (' حدد طريقة الدفع: محفظة، بطاقة، أو كاش ..... ')
            return
        }

        await sendRequest({
            url: '/api/v1/create-order',
            method: 'POST',
            data: JSON.stringify({
                country: product.idcountry,
                district: product.district,
                apartment: product.apartment,
                street: product.street,
                building: product.building,
                floor: product.floor,
                note: product.text,
                raw_address: product.raw_address,
                is_cash_payment: product.is_cash_payment,
                is_online_payment: product.is_online_payment,
                delivery_price: delivery_price,
                total_price: +delivery_price + total,
                items: product.items
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                 sendRequest({
                    url:`/api/v1/payment-link?order_uuid=${data.order_uuid}&payment_method_id=${product.paymethodid}`,
                    method:'GET',
                }).then((res)=>{
                    console.log(res);
                    sethedden(false)
                    window.open(res.url, '_blank');

                })
            })
            .catch(error => {
                console.log(`حدث خطأ ${error.detail}`);
            });
            
            
    }

    



    return (
        <>
            {hidden && (
                <div
                    className="p-[50px] flex 
                    absolute  top-0 flex-col
                    w-[700px] xs:w-[350px] bg-white
                    rounded-lg  shadow
                    items-center "
                >
                    <FiX
                        onClick={() => {
                            sethedden(false);
                        }}
                        className="text-black absolute hover:text-red-500 duration-200 top-2 right-2 cursor-pointer text-2xl"
                    />
                    <form
                        onSubmit={henddelesubmit}
                        className="flex flex-col gap-[30px] xs:gap-[20px]  w-full items-end"
                    >
                        <div className="flex  xs:self-center xs:w-[330px] w-full justify-between  items-center">
                            <div className=" flex  flex-col items-end gap-[15px]">
                                <label className=" font-semibold text-lg xs:text-sm">: الحي</label>
                                <input
                                    onChange={e => {
                                        setproduct(prev => ({
                                            ...prev,
                                            district: e.target.value
                                        }));
                                    }}
                                    placeholder="ادخل الحي "
                                    className=" outline-none h-[40px] 
                                    pr-[10px] bg-gray-300
                                    w-[120px] text-gray-800 
                                    rounded text-end "
                                    type="text"
                                    name="name"
                                    required
                                />
                            </div>

                            <div className=" flex  flex-col  items-end gap-[15px]">
                                <div className="text-lg xs:text-sm font-semibold">
                                    : المحافظه
                                </div>
                                <select
                                    onChange={e => {
                                        const selectedItem = data.find(
                                            el => el.name === e.target.value
                                        );
                                        setproduct(prev => ({
                                            ...prev,
                                            idcountry: selectedItem?.id,
                                            delivery_price: selectedItem?.price
                                        }));
                                        if(total > 100000){
                                            setdelivery_price(0)
                                        }else{

                                            setdelivery_price(selectedItem?.price);
                                        }
                                    }}
                                    className="outline-none 
                                    w-[100px] h-[40px]  bg-gray-300
                                    text-gray-800 rounded
                                    text-end "
                                >
                                    <option className='xs:text-xs' value="المحافظه">المحافظه</option>
                                    {data &&
                                        data.map(el => {
                                            return (
                                                <option
                                                    onClick={() =>
                                                        console.log(el.id)
                                                    }
                                                    key={el.id}
                                                    value={el.name}
                                                     className='xs:text-xs font-semibold'
                                                >
                                                    {el.name}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>

                            <div className=" flex flex-col items-end gap-[15px]">
                                <label className=" font-semibold xs: text-sm">
                                    : كود المدينه
                                </label>
                                <input
                                    disabled
                                    value={product.idcountry}
                                    className=" outline-none text-center
                                     w-[50px] h-[40px]  bg-gray-300 text-gray-500 
                                        rounded  "
                                    type="text"
                                    name="address"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-300 h-[0.5px] w-full"></div>

                        <div className="flex w-full justify-between  items-center">
                            <div className=" flex flex-col items-end gap-[15px]">
                                <label className=" font-semibold">
                                    : الشقه
                                </label>
                                <input
                                    onChange={e => {
                                        setproduct(prev => ({
                                            ...prev,
                                            apartment: e.target.value
                                        }));
                                    }}
                                    className=" outline-none h-[40px] 
                                    pr-[10px] bg-gray-300
                                    text-gray-800 
                                    rounded text-end w-[50px]  "
                                    type="text"
                                    name="name"
                                    required
                                />
                            </div>

                            <div className=" flex  flex-col  items-end gap-[15px]">
                                <label className=" font-semibold">
                                    : الدور
                                </label>
                                <input
                                    placeholder="رقم ال"
                                    onChange={e => {
                                        setproduct(prev => ({
                                            ...prev,
                                            floor: e.target.value
                                        }));
                                    }}
                                    className=" outline-none w-[50px] h-[40px]  bg-gray-300 text-gray-800 
                                     rounded text-end pr-[10px]"
                                    type="text"
                                    name="address"
                                />
                            </div>

                            <div className=" flex flex-col items-end gap-[15px]">
                                <label className=" font-semibold">
                                    : العماره
                                </label>
                                <input
                                    placeholder="رقم ال"
                                    onChange={e => {
                                        setproduct(prev => ({
                                            ...prev,
                                            building: e.target.value
                                        }));
                                    }}
                                    className=" outline-none w-[50px] h-[40px]  bg-gray-300 text-gray-800 
                                     rounded text-end pr-[10px]"
                                    type="text"
                                    name="address"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-300 h-[0.5px] w-full"></div>

                        <div className=" flex flex-col w-full items-end gap-[15px]">
                            <label className=" font-semibold">: الشارع</label>
                            <input
                                placeholder="اسم الشارع"
                                onChange={e => {
                                    setproduct(prev => ({
                                        ...prev,
                                        street: e.target.value
                                    }));
                                }}
                                className=" outline-none  h-[40px] w-full  bg-gray-300 text-gray-800 
                                     rounded text-end pr-[10px]"
                                type="text"
                                name="address"
                            />
                        </div>

                        <div className="bg-gray-300 h-[0.5px] w-full"></div>

                        <div className=" flex flex-col w-full items-end gap-[15px]">
                            <label className=" font-semibold">
                                : العنوان تفصيلي
                            </label>
                            <input
                                placeholder="
              مثال (عماره رقم 3 شارع احمد عبد الكريم ,تقسيم المعلمين , حدائق حلوان ,القاهره)"
                                onChange={e => {
                                    setproduct(prev => ({
                                        ...prev,
                                        raw_address: e.target.value
                                    }));
                                }}
                                className=" outline-none h-[40px] w-full bg-gray-300 text-gray-800 
              rounded text-end pr-[10px]"
                                type="text"
                                name="address"
                            />
                        </div>

                        <div className="bg-gray-300 h-[0.5px] w-full"></div>

                        <div className=" flex flex-col items-end gap-[15px]">
                            <label className=" font-semibold">
                                : قيمة التوصيل
                            </label>
                            <input
                                disabled
                                value={`${delivery_price} ج`}
                                className=" outline-none h-[40px] w-[100px] text-center bg-gray-300 text-gray-800 
              rounded  "
                                type="text"
                                name="address"
                            />
                        </div>

                        <div className="bg-gray-300 h-[0.5px] w-full"></div>

                     

                       <textarea
                       onChange={(e)=>{
                        setproduct((prev)=>({
                            ...prev,
                            text:e.target.value
                        }))
                       }}
                       placeholder='اكتب ملاحظه'
                       className='bg-gray-300
                      text-end w-full h-[200px] rounded p-2 outline-none'/>

                        <div className="flex flex-col gap-[15px] items-end">
                            <label className="text-lg font-semibold">
                                : طريقة الدفع
                            </label>
                            <div className="flex items-center gap-[30px]">
                                {
                                total <= 30000 &&
                                <>
                                    <div 
                                    className='flex items-center 
                                    w-[150px]  gap-2  flex-row-reverse
                                    justify-between '
                                    >
                                        <p 
                                        className='font-semibold w-fit  text-sm 
                                        text-end  text-gray-400 '> 
                                    الدفع عند الاستلام
                                        </p>
                                        <div
                                        onClick={()=>
                                            {
                                              henddeleclick(0)  
                                            }
                                            }    
                                        className='size-[22px]
                                        cursor-pointer rounded-full 
                                         text-center border border-gray-400
                                        flex justify-center  items-center '
                                        > 
                                        <div className={`bg-blue-500  duration-200 size-[90%] rounded-full ${product.active === 0 ?'opacity-100 scale-100':'opacity-0 scale-0'}`}></div>
                                        </div>
                                    </div>
                                 </>
                                }
                                 <div 
                                    className='flex items-center 
                                    w-[120px]  flex-row-reverse
                                    justify-between '>
                                        <p 
                                        className='font-semibold text-sm  text-gray-400'> 
                                          الدفع اونلاين 
                                        </p>
                                        <div
                                       onClick={()=>
                                        {
                                          henddeleclick(1)  
                                        }
                                        }        
                                        className='size-[22px]
                                        cursor-pointer rounded-full 
                                         text-center border border-gray-400
                                        flex justify-center items-center '
                                        > 
                                        <div className={`bg-blue-500 duration-200 size-[90%] rounded-full ${product.active === 1 ?'opacity-100 scale-100':'opacity-0 scale-0'}`}></div>
                                        </div>
                                    </div>
                                 </div>
                        </div>
                        {product.active === 0 &&
                        <div className='flex flex-col w-full gap-4 items-center'>

                        <div className="bg-gray-100 self-center  p-4 animate-pulse rounded-2xl shadow-md text-center max-w-md mx-auto mt-6">
                            <p className="text-lg font-medium text-gray-800">
                                يُرجى التكرم بالعلم بأنه يتم سداد قيمة التوصيل عبر الدفع الإلكتروني.
                            </p>
                        </div>

                        <div className='self-end flex'>
                            <div className="flex flex-col gap-[15px] items-end">
                            <p className="text-lg font-semibold">
                                    اختر طريقة الدفع 
                            </p>
                            {paymethod&&
                            paymethod.map((el)=>{
                                return(
                                    <div
                                    key={el.id}
                                    className="flex items-center gap-[20px]">
                                    <input
                                       onClick={(e)=>{
                                        setproduct((prev)=>({
                                            ...prev,
                                            paymethodid:el.id,
                                            paymethod:e.target.value
                                        }))
                                       }}
                                        type="radio"
                                        name="payment_method"
                                        value={el.name}   
                                    />
                                    <p>
                                    {el.name}
                                    </p>
                                </div>
                                )
                                
                            })

                            }
                           

                             </div>
                        </div>
                        </div>
                        }
                        {
                        product.active === 1 && 
                        <div className='self-end flex'>
                        <div className="flex flex-col gap-[15px] items-end">
                        <p className="text-lg font-semibold">
                                اختر طريقة الدفع 
                        </p>
                        {paymethod&&
                        paymethod.map((el)=>{
                            return(
                                <div
                                key={el.id}
                                className="flex items-center gap-[20px]">
                                <input
                                onClick={(e)=>{
                                    setproduct((prev)=>({
                                        ...prev,
                                    paymethodid:el.id,
                                    paymethod:e.target.value
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
                        </div>
                        }

                        <input
                            type="submit"
                            value={' تاكيد الطلب'}
                            className="flex items-center justify-center self-center  bg-green-500
                text-white rounded-lg w-[90%]  p-[12px] cursor-pointer
                text-sm font-semibold duration-200 hover:bg-blue-600"
                        />
                    </form>
                </div>
            )}
        </>
    );
}