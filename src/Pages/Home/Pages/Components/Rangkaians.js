import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Rangkaian from './Rangkaian';
import { getAllAgenda } from "../../../../Data/Agenda";

import "swiper/css";
import "swiper/css/pagination";
import '../Page5.css'

const swiperClass ='w-auto mx-1 mx-lg-3';

export default function App() {
    const dataRangkaian = getAllAgenda();
    const sliderItem = dataRangkaian.map(data=>
        <SwiperSlide key={data.id} className={swiperClass}><Rangkaian {...data}/></SwiperSlide>
    )
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper d-flex">
            {sliderItem}
            </Swiper>
        </>
    );
}
