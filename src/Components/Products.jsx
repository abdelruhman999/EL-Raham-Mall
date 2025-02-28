import React, { useEffect } from 'react';
import useRequest from '../hooks/call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import ProductShape from './ProductShape';
import ImageSlider from './ImageSlider';
import Slidabrand from './Slidabrand';

export default function Products() {
    const { data, loading } = useRequest({
        url: '/api/v1/home-products',
        method: 'GET'
    });
   

   

    return (
        <div className='flex flex-col items-center gap-[50px]'>
            <div className=' xs:p-0 p-[50px] flex w-full justify-center'>
                <ImageSlider />
            </div>
            {
                loading ?
                 <Loader/> 
                 : 
                  data &&
                      data.map(el => {
                 
                        
                          return (
                              <div
                                  key={el.id}
                                  className="flex flex-col w-full  gap-[20px]  items-end "
                              >
                                <div className=' pr-2 pl-2 w-full items-end flex justify-between'>
                                    <Link 
                                    to={`cutogry/${el.id}`}
                                    className='text-gray-500 hover:text-blue-500 border-blue-500 hover:border-b-[0.5px]'
                                    >
                                    شاهد المزيد 
                                    </Link>
                                  <h1 className="text-3xl text-gray-800 ">
                                      {el.name}
                                  </h1>

                                    </div>
                                  <div className="bg-gray-300 w-full h-[1px]"></div>
                                  
                                  <Swiper
                                      modules={[Navigation, Autoplay]}
                                      navigation
                                      autoplay={{ delay: 3000 }}
                                      loop
                                      spaceBetween={0}
                                      slidesPerView={5}
                                      breakpoints={{
                                        0: { slidesPerView: 2 }, 
                                        1024: { slidesPerView: 5 }, 
                                      }}
                                      className="w-full "
                                  >
                                      {el.products &&
                                          el.products.map(el => {
                                              return (
                                                  <SwiperSlide key={el.id}>
                                                      <div className="pl-[40px]  xs:p-[10px] ">
                                                          <ProductShape 
                                                          props = {el}/>
                                                      </div>
                                                  </SwiperSlide>
                                              );
                                          })
                                          }
                                  </Swiper>
                              </div>
                          );
                  })
             }
              <Slidabrand/>
        </div>
    );
}
