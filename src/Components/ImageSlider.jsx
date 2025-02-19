import logo1 from '../assets/image/Untitled_design_18_800x.webp'
import logo2 from '../assets/image/electronic-device-surrounded-by-nature_23-2150325024.jpg'
import logo4 from '../assets/image/صيانة-توشيبا.jpg'
import { useState } from 'react';

const ImageSlider = () => {
  const [active , setactive] = useState(0)
  const [currentimg , setcurrentimg] = useState(logo4)

  function henddeleclick(index){
    setactive(index)
  }

  return (
   
      <div
      className=' w-full  relative p-[10px]  flex justify-center'
      >
      
        <img src={currentimg} className='w-[1500px] xs:w-[350px] xs:h-[250px]  rounded-lg  h-[500px]' />

    
       <div className='flex gap-[10px] absolute bottom-[20px]'>

        <div
        onClick={()=>{
          henddeleclick(0)
          setcurrentimg(logo4)
        }}
        className='border cursor-pointer xs:size-[20px] size-[30px] flex items-center justify-center
         rounded-full border-gray-500 p-1'>
          <div className={`bg-blue-600 rounded-full size-[80%] duration-200 ${active === 0?'opacity-100 scale-100':'opacity-0 scale-0'}`}></div>
        </div>
        <div
        onClick={()=>{
          henddeleclick(1)
          setcurrentimg(logo2)
        }}
        className='border cursor-pointer xs:size-[20px] size-[30px] flex items-center justify-center
         rounded-full border-gray-500 p-1'>
          <div className={`bg-blue-600 rounded-full size-[80%] duration-200 ${active === 1?'opacity-100 scale-100':'opacity-0 scale-0'}`}></div>
        </div>
        <div
        onClick={()=>{
          henddeleclick(2)
          setcurrentimg(logo1)
        }}
        className='border cursor-pointer xs:size-[20px] size-[30px] flex items-center justify-center
         rounded-full border-gray-500 p-1'>
          <div className={`bg-blue-600 rounded-full size-[80%] duration-200 ${active === 2?'opacity-100 scale-100':'opacity-0 scale-0'}`}></div>

        </div>
       </div>
    </div>

    
  );
};

export default ImageSlider;
