'use client'
import React, { FC, ReactElement, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

export const Slider: FC = (): ReactElement => {
  return (
    <div className="h-[200px] md:h-auto">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },

          768: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
        direction="horizontal"
        effect="flip"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
        dir="rtl"
      >
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-1.jpg"
            alt="slider-1"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md object-right md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-2.jpg"
            alt="slider-2"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md object-right md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-3.jpg"
            alt="slider-2"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md object-right md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-4.jpg"
            alt="slider-4"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md object-right md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-5.gif"
            alt="slider-5"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md object-right md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-6.jpg"
            alt="slider-6"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md object-right md:object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
