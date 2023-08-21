'use client'
import React, { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import { NewestItem } from '@/components/Newest/NewestItem'
import newestProducts from '../../data/newestProducts.json'

export const NewestList: FC = (): ReactElement => {
  return (
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
      className="mySwiper rounded-md overflow-hidden"
    >
      {newestProducts &&
        newestProducts.map((prod) => (
          <SwiperSlide className="rounded-md">
            <NewestItem
              id={prod.id}
              imgSrc={prod.imgSrc}
              off={prod.off}
              tag={prod.tag}
              price={prod.price}
              title={prod.title}
              offPrice={prod.offPrice}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
