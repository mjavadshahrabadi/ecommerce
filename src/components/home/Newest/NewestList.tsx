'use client'
import React, { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import { NewestItem } from '@/components/home/Newest/NewestItem'
import newestProducts from '@/data/newestProducts.json'

export const NewestList: FC = (): ReactElement => {
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
      spaceBetween={10}
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
          <SwiperSlide className="rounded-md" id={prod.id + ''}>
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
