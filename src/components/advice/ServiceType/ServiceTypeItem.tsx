import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface ServiceTypeItemProps {
  title: string
  imgSrc: string
}
export const ServiceTypeItem: FC<ServiceTypeItemProps> = ({
  title,
  imgSrc,
}): ReactElement => {
  return (
    <section className="shadow-md bg-white p-8 rounded-3xl border flex flex-col space-y-4 items-center justify-center">
      <Image
        src={imgSrc}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[150px] h-auto"
      />
      <h4 className="text-gray-700 font-semibold">{title}</h4>
    </section>
  )
}
