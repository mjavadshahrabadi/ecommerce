'use client'
import React, { FC, ReactElement, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import data from '@/data/shopSuggest.json'

import { SuggestItem } from '@/components/home/ShopSuggest/SuggestItem'

export const SuggestList: FC = (): ReactElement => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // When window width is >= 1024px
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      dir="rtl"
      freeMode={true}
      spaceBetween={10}
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
      className="mySwiper rounded-md"
    >
      {data &&
        data.map((product) => (
          <SwiperSlide className="rounded-md">
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
  )
}
