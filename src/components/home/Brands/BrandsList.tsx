'use client'
import React, { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import brands from '@/data/brands.json'
import { BrandsItem } from '@/components/home/Brands/BrandsItem'

export const BrandsList: FC = (): ReactElement => {
  return (
    <Swiper
      dir="rtl"
      slidesPerView={8}
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
      {brands &&
        brands.map((brand) => (
          <SwiperSlide className="rounded-md" key={brand.id + ''}>
            <BrandsItem title={brand.title} imgSrc={brand.imgSrc} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
