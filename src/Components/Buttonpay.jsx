import React, { useContext } from 'react'
import { datacontext } from '../pages/Home';
import Swal from 'sweetalert2';
import { FaCartShopping } from "react-icons/fa6";

export default function Buttonpay({props,number,height,font}) {
     const { data1, setdata1 } = useContext(datacontext);
  return (
     <div
        onClick={() => {
            Swal.fire(
                'شاهد عربة تسوقك'
            );
            setdata1([
                ...data1,
                {
                    id: props.id,
                    img: props.image_1,
                    discription:props.description,
                    price: +props.price
                }
            ]);
        }}
        className="flex justify-center
        items-center gap-5 text-sm cursor-pointer
        bg-green-500 hover:bg-black duration-200  text-white p-[10px]
        rounded-lg shadow-lg"
        style = 
        {{
         width:`${number}px `,
         height:`${height}px`,
        fontSize:`${font}px`
        }}
    >
        <FaCartShopping />
        <p>
        اضف الى عربة التسوق
        </p>

    </div>
  )
}
