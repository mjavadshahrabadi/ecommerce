'use client'
import React, { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import { LatestArticlesItem } from '@/components/home/ LatestArticles/LatestArticlesItem'
import articlesData from '@/data/LastestArticles.json'

export const LatestArticlesList: FC = (): ReactElement => {
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
      className="mySwiper rounded-md"
    >
      {articlesData &&
        articlesData.map((article) => (
          <SwiperSlide className="rounded-md" key={article.id + ''}>
            <LatestArticlesItem imgSrc={article.imgSrc} title={article.title} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
