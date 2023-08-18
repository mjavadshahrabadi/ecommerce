'use client'
import React, { FC, ReactElement, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

export const Slider: FC = (): ReactElement => {
  return (
    <div className="w-[100vw] h-[500px]">
      <Swiper
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
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-2.gif"
            alt="slider-2"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-3.gif"
            alt="slider-2"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-4.jpg"
            alt="slider-4"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-5.jpg"
            alt="slider-5"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <Image
            src="/sliders/slider-6.jpg"
            alt="slider-6"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
