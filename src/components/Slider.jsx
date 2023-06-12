import React from 'react';
import TestiCard from './TestiCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = ({ slideData }) => {
    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            speed={400}
            loop={true}
            spaceBetween={100}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {
                slideData.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <TestiCard {...item} />
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};

export default Slider;
