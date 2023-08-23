import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { ArrowLeft } from 'react-bootstrap-icons'

interface CategoriesItemProps {
  title: string
  imgSrc: string
}
export const CategoriesItem: FC<CategoriesItemProps> = ({
  title,
  imgSrc,
}): ReactElement => {
  return (
    <li className="relative rounded-md overflow-hidden">
      <Image
        src={imgSrc}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-md"
      />
      <div className="absolute inset-0 bottomShadow" />
      <div className="flex items-center justify-between absolute right-2 left-2 bottom-2">
        <h4 className="text-white text-[13px] font-semibold">{title}</h4>
        <button
          type="button"
          className="py-1 px-2 bg-primary text-white text-[12px]  w-fit rounded-md  font-semibold flex items-center active:scale-90"
        >
          مشاهده همه
          <i className="mr-1">
            <ArrowLeft className="w-4 h-4 text-white" />
          </i>
        </button>
      </div>
    </li>
  )
}
