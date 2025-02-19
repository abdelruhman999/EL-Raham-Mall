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
        items-center gap-5 text-xs cursor-pointer
        bg-green-500 xs:text-xs hover:bg-black duration-200 p-[7px] text-white   
        rounded-lg  shadow-lg"
        style = 
        {{
         width:`${number}% `,
         height:`${height}px`,
        fontSize:`${font}px`
        }}
    >   

        <FaCartShopping className='text-xl ' />
       
        اضف الى عربة التسوق
     

    </div>
  )
}
