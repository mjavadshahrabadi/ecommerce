'use client'
import React, { FC, ReactElement, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import data from '../../../data/shopSuggest.json'

import 'swiper/css'
import 'swiper/css/free-mode'
import { SuggestItem } from '@/components/home/ShopSuggest/SuggestItem'

export const SuggestList: FC = (): ReactElement => {
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {data &&
          data.map((product) => (
            <SwiperSlide
              style={{ width: '250x', height: '300px' }}
              className="rounded-md"
            >
              <SuggestItem
                id={product.id}
                imgSrc={product.imgSrc}
                off={product.off}
                price={product.price}
                offPrice={product.offPrice}
                title={product.title}
                key={product.id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
