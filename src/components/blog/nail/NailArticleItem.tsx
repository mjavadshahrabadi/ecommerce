import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { Clock, Person } from 'react-bootstrap-icons'

interface NailArticleItem {
  imgSrc: string
  title: string
  description: string
  date: string
  author: string
}
export const NailArticleItem: FC<NailArticleItem> = ({
  date,
  author,
  title,
  description,
  imgSrc,
}): ReactElement => {
  return (
    <li className="w-full h-[300px] overflow-hidden rounded-md shadow-md bg-white">
      <div className="w-full h-[150px]">
        <Image
          src={imgSrc}
          alt={title}
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </div>
      <div className="py-8 px-5 flex flex-col space-y-4">
        <h4 className="text-gray-600 text-center text-sm">{title}</h4>
        <div className="border-t w-full" />
        <p className="text-xs text-gray-500 text-center">{description}</p>
        <div className="flex items-center" dir="rtl">
          <div className="flex items-center">
            <Clock className="w-3 h-3 text-gray-500 ml-1" />
            <small className="text-gray-500">{date}</small>
          </div>
          <div className="flex items-center mr-2">
            <Person className="w-3 h-3 text-gray-500 ml-1" />
            <small className="text-gray-500">{author}</small>
          </div>
        </div>
      </div>
    </li>
  )
}
