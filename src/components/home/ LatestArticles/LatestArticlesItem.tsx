import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { ArrowLeft } from 'react-bootstrap-icons'

interface LatestArticlesItemProps {
  imgSrc: string
  title: string
}

export const LatestArticlesItem: FC<LatestArticlesItemProps> = ({
  title,
  imgSrc,
}): ReactElement => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-md space-y-2 relative">
      <Image
        src={imgSrc}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />

      <div className="absolute p-1 right-0 left-0 bottom-0 h-10 py-1 px-2 bg-primary flex items-center justify-between">
        <h3 className="text-white font-semibold text-[13px]">{title}</h3>
        <button
          className="bg-white text-primary p-1 rounded-md text-[12px] flex items-center"
          type="button"
        >
          <span> بخوانید</span>
          <i>
            <ArrowLeft className="w-3 h-3 text-primary mr-1" />
          </i>
        </button>
      </div>
    </div>
  )
}
