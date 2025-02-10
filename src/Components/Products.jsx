import React, { useContext } from 'react';
import useRequest from '../hooks/call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { surve } from '../utils/surve';
import { datacontext } from '../pages/Home';
import Swal from 'sweetalert2';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Buttonpay from './Buttonpay';

export default function Products() {
    const { data, loading } = useRequest({
        url: '/api/v1/home-products',
        method: 'GET'
    });

    //   useEffect(()=>{
    //     if(data){
    //         console.log(data);
    //     }
    // },[data])

    return (
        <>
            {
                loading ?
                 <Loader/> 
                 : 
                  data &&
                      data.map(el => {
                          return (
                              <div
                                  key={el.id}
                                  className="flex flex-col gap-[20px]  items-end "
                              >
                                  <h1 className="text-3xl text-gray-800 p-2">
                                      {el.name}
                                  </h1>
                                  <div className="bg-gray-300 w-full h-[1px]"></div>
                                  
                                  <Swiper
                                      modules={[Navigation, Autoplay]}
                                      navigation
                                      autoplay={{ delay: 3000 }}
                                      loop
                                      spaceBetween={0}
                                      slidesPerView={4}
                                      className="w-full h-[500px] "
                                  >
                                      {el.products &&
                                          el.products.map(el => {
                                              return (
                                                  <SwiperSlide key={el.id}>
                                                      <div className="pl-[40px]">
                                                          <div
                                                              className="bg-white
                                                                justify-between  gap-[10px] 
                                                              rounded-lg flex  flex-col
                                                                items-center h-[480px]
                                                                 w-[260px] p-[10px]"
                                                          >
                                                              <img
                                                                  className="size-[230px] rounded"
                                                                  src={surve(
                                                                      `${el.image_1}`
                                                                  )}
                                                              />
                                                              <p
                                                                  className="text-sm text-gray-500 w-full
                                                                    font-semibold  text-center"
                                                              >
                                                                  {el.name}
                                                              </p>
                                                              <p
                                                                  className="text-sm text-gray-500 w-full
                                                                    font-semibold  text-end"
                                                              >
                                                                  {el.description}
                                                              </p>
                                                              <p className="text-lg text-gray-800 font-bold">
                                                                  {el.price} <span className='text-sm text-gray-600'> ج.م </span>
                                                              </p>
                                                            <Buttonpay
                                                             number = {230}
                                                             key={el.id}
                                                              props = {el}/>
                                                              <Link
                                                                to={`/${el.id}`}
                                                                  className="flex justify-center
                                                                  items-center text-sm cursor-pointer
                                                                  bg-blue-500 text-white p-[10px]
                                                                    rounded-lg w-[230px] shadow-lg"
                                                              >
                                                                    شاهد تفاصيل المنتج 
                                                              </Link>
                                                          </div>
                                                      </div>
                                                  </SwiperSlide>
                                              );
                                          })}
                                  </Swiper>
                              </div>
                          );
                  })
             }
        </>
    );
}
