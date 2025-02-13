import React, { useEffect } from 'react';
import useRequest from '../hooks/call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { surve } from '../utils/surve';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function Slidabrand() {
  const { data: branddata } = useRequest({
    url: '/api/v1/brands',
    method: 'GET',
  });

  useEffect(() => {
    console.log(branddata);
  }, [branddata]);

  return (
    <div className=' w-full p-2 bg-white'>
      {branddata && (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={0}
          slidesPerView={5}
          className="w-full "
        >
          {branddata.map(el => (
            <SwiperSlide key={el.id}>
              <div className="pl-[40px]">
                <img src={`${surve(el.image)}`} alt="logo" className="size-[120px] rounded-lg" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
