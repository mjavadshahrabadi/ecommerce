import React, { FC, ReactElement } from 'react'
import { HairArticleItem } from '@/components/blog/hair/HairArticleItem'

export const NailArticleList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ناخن‌های بلند و کشیده، می‌توانند ظاهر بسیار زیبا و چشمگیری برای دستانتان خلق نمایند. با این حال، بس..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/nail/img-1.jpg"
        author="روژا"
      />
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ناخن‌های بلند و کشیده، می‌توانند ظاهر بسیار زیبا و چشمگیری برای دستانتان خلق نمایند. با این حال، بس..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/nail/img-2.jpg"
        author="روژا"
      />
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ناخن‌های بلند و کشیده، می‌توانند ظاهر بسیار زیبا و چشمگیری برای دستانتان خلق نمایند. با این حال، بس..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/nail/img-3.jpg"
        author="روژا"
      />
      <HairArticleItem
        title="معرفی بهترین ماسک موهای داخل حمام ایرانی"
        description="ناخن‌های بلند و کشیده، می‌توانند ظاهر بسیار زیبا و چشمگیری برای دستانتان خلق نمایند. با این حال، بس..."
        date="۲۲ مرداد ۱۴۰۲"
        imgSrc="/blog/nail/img-4.jpg"
        author="روژا"
      />
    </ul>
  )
}
