import React, { useContext, useEffect, useState } from 'react';
import {
    datacontext,
    delivery_pricecontext,
    hiddencontext,
    totalcontext
} from '../pages/Home';
import logo1 from '../assets/image/cart-page.svg';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import logo2 from '../assets/image/filtered-payment-logos.png';
import { surve } from '../utils/surve';
import Returnhome from './Returnhome';
import Create_order from './Create_order';
import { AUTH_KEY } from '../utils/constants';
import Swal from 'sweetalert2';

export default function ShoppingBage() {
    const { data1, setdata1 } = useContext(datacontext);
    const { delivery_price,setdelivery_price } = useContext(delivery_pricecontext);
    const { total, settotal } = useContext(totalcontext);
    const { sethedden } = useContext(hiddencontext);
    const navigate = useNavigate();

    function deleteitem(index) {
        setdata1(data1.filter((_, i) => i !== index));
    }
    function henddelequantity(e, i) {
        setdata1(prev =>
            prev.map((el, index) =>
                index === i
                    ? {
                          ...el,
                          totalproduct: el.price * e.target.value,
                          quantity: e.target.value
                      }
                    : el
            )
        );
    }

    function henddeleclick() {
        const token = localStorage.getItem(AUTH_KEY);
        if (token) {
            sethedden(true);
        } else {
            console.log('nono');
            Swal.fire('يرجى تسجيل الدخول');
            navigate('/login');
        }
    }

    useEffect(() => {
        if (data1) {
            const newtotal = data1.reduce(
                (sum, el) => sum + el.totalproduct,
                0
            );
            settotal(newtotal);
        }
    }, [data1, total]);

    return (
        <div className=" flex flex-col  relative  justify-center items-center">
            {data1.length === 0 ? (
                <div className="flex flex-col pt-[50px] justify-center  w-full gap-[20px] items-center">
                    <img src={logo1} />
                    <p className="font-semibold text-sm"> عربة التسوق فارغه </p>
                    <Link
                        to={'/'}
                        className="flex items-center justify-center  bg-green-500
        text-white rounded-lg w-[180px] p-[12px] cursor-pointer
         text-sm font-semibold duration-200 hover:bg-blue-600"
                    >
                        العوده للتسوق
                    </Link>
                </div>
            ) : (
                <div
                    className=" pr-[150px] xs:pr-0 xs:pl-0
             pl-[150px] gap-[30px] w-full
              flex flex-col  items-center
            "
                >
                    <Returnhome text="سله التسوق" />
                    <div className="flex  w-full  flex-col gap-[20px] items-end">
                        <p className=" text-2xl xs:pr-[20px]"> سله التسوق </p>
                        <div
                            className="flex flex-row-reverse
                     gap-[20px] xs:flex-col xs:items-center w-full justify-between"
                        >
                            <table className="bg-white h-[150px] w-[70%] xs:hidden ">
                                <thead className="bg-gray-200 ">
                                    <tr>
                                        <th className="border  border-gray-300 px-4 py-2">
                                            الإجمالي
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2">
                                            الكميّة
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2">
                                            السعر
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2">
                                            سلعة
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data1 &&
                                        data1.map((el, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="text-center"
                                                >
                                                    <td className="border border-gray-300 px-4 py-2">
                                                        {' '}
                                                        {el.totalproduct.toFixed(
                                                            2
                                                        )}{' '}
                                                    </td>
                                                    <td className="border border-gray-300 px-4 py-2">
                                                        <input
                                                            type="number"
                                                            onChange={e => {
                                                                henddelequantity(
                                                                    e,
                                                                    index
                                                                );
                                                            }}
                                                            className="outline-none text-lg w-[70px] rounded
                            h-[50px] border-[2px] border-gray-300
                            text-gray-500 pl-1"
                                                            value={el.quantity}
                                                            min={1}
                                                            max={el.count}
                                                        />
                                                    </td>
                                                    <td className="border border-gray-300 px-4 py-2">
                                                        {el.price}{' '}
                                                    </td>
                                                    <td className="border flex  items-center gap-[50px] flex-row-reverse border-gray-300 px-5 py-2">
                                                        <img
                                                            src={`${surve(
                                                                el.img
                                                            )}`}
                                                            className=" size-[100px]"
                                                        />
                                                        <div className="flex flex-col gap-[10px]">
                                                            <p className="font-semibold text-sm  ">
                                                                {' '}
                                                                {el.discription}
                                                            </p>
                                                            <div
                                                                onClick={() => {
                                                                    deleteitem(
                                                                        index
                                                                    );
                                                                }}
                                                                className="flex 
                               text-red-500 cursor-pointer 
                               justify-end gap-[5px] items-center"
                                                            >
                                                                <p>
                                                                    احذف المنتج
                                                                </p>
                                                                <MdDelete />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                            <table className="bg-white w-[90%] hidden xs:block border border-gray-300">
                                <tbody>
                                    {data1 &&
                                        data1.map((el, index) => (
                                            <React.Fragment key={index}>
                                                <tr className="border-b border-gray-300">
                                                    <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
                                                        سلعة
                                                    </td>
                                                    <td className="border border-gray-300 px-4 py-2 flex flex-col items-center">
                                                        <img
                                                            src={`${surve(
                                                                el.img
                                                            )}`}
                                                            className="size-[100px]"
                                                        />
                                                        <p className="font-semibold text-sm text-center">
                                                            {el.discription}
                                                        </p>
                                                        <div
                                                            onClick={() =>
                                                                deleteitem(
                                                                    index
                                                                )
                                                            }
                                                            className="flex text-red-500 cursor-pointer justify-center gap-[5px] items-center mt-2"
                                                        >
                                                            <p>احذف المنتج</p>
                                                            <MdDelete />
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-gray-300">
                                                    <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
                                                        السعر
                                                    </td>
                                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                                        {el.price} ج
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-300">
                                                    <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
                                                        الكميّة
                                                    </td>
                                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                                        <input
                                                            type="number"
                                                            onChange={e =>
                                                                henddelequantity(
                                                                    e,
                                                                    index
                                                                )
                                                            }
                                                            className="outline-none text-lg w-[70px] rounded h-[50px] border-[2px] border-gray-300 text-gray-500 pl-1"
                                                            value={el.quantity}
                                                            min={1}
                                                            max={el.count}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-300">
                                                    <td className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
                                                        الإجمالي
                                                    </td>
                                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                                        {el.totalproduct.toFixed(
                                                            2
                                                        )}
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        ))}
                                </tbody>
                            </table>

                            <div
                                className=" w-[30%] h-[500px] xs:w-[90%]  flex gap-[20px]
                       flex-col items-center xs:gap-[10px]
                      rounded-lg  bg-gray-300"
                            >
                                <p className="text-xl w-full p-[10px] text-center">
                                    قيمة الفاتوره
                                </p>
                                <div className="bg-gray-200 w-full h-[0.5px]"></div>
                                <div className="flex items-end text-gray-500 p-[50px] text-sm w-full  flex-col gap-[5px]">
                                    <div className="flex w-full items-center justify-between">
                                        <p>{total} ج.م</p>
                                        <p>الاجمالي</p>
                                    </div>
                                    <div className="flex w-full items-center justify-between ">
                                        <p>ج.م {delivery_price}</p>
                                        <p>الشحن</p>
                                    </div>
                                    <div className="flex w-full items-center justify-between ">
                                        <p>{+delivery_price + total}ج.م</p>
                                        <p>إجمالي الطلب</p>
                                    </div>
                                </div>
                                <div className="bg-gray-200 w-full h-[0.5px]"></div>
                                <div
                                    onClick={henddeleclick}
                                    className="flex items-center justify-center  bg-green-500
                        text-white rounded-lg w-[90%]  p-[12px] cursor-pointer
                        text-sm font-semibold duration-200 hover:bg-blue-600"
                                >
                                    تاكيد الطلب
                                </div>
                                <img src={logo2} className=" p-2 " />
                                <p className="self-end  w-auto text-center font-semibold textlg text-green-500 animate-pulse">
                                    استمتعوا بتوصيل مجاني عند الشراء بقيمة
                                    100,000 جنيه أو أكثر 😊
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Create_order />
        </div>
    );
}
