import React, { FC, ReactElement } from 'react'
import { HairArticleItem } from '@/components/blog/hair/HairArticleItem'

export const HairArticleList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ماسک مو، معجزه نوینی برای حفظ زیبایی و سلامت مو است. اگر دوست دارید در کمترین زمان ممکن موهای آسیب د..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/hair/img-1.jpg"
        author="روژا"
      />
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ماسک مو، معجزه نوینی برای حفظ زیبایی و سلامت مو است. اگر دوست دارید در کمترین زمان ممکن موهای آسیب د..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/hair/img-2.jpg"
        author="روژا"
      />
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ماسک مو، معجزه نوینی برای حفظ زیبایی و سلامت مو است. اگر دوست دارید در کمترین زمان ممکن موهای آسیب د..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/hair/img-3.jpg"
        author="روژا"
      />
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ماسک مو، معجزه نوینی برای حفظ زیبایی و سلامت مو است. اگر دوست دارید در کمترین زمان ممکن موهای آسیب د..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/hair/img-4.jpg"
        author="روژا"
      />
    </ul>
  )
}
