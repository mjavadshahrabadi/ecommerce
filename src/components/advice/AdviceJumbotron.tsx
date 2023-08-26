import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { Chip } from '@/components/ui/Chip'
import { CameraReels, Headphones, Plus } from 'react-bootstrap-icons'

export const AdviceJumbotron: FC = (): ReactElement => {
  return (
    <div className="w-full h-[300px] relative overflow-hidden rounded-bl-[100px] rounded-br-[100px]">
      <Image
        src="/advice/bg.jpg"
        alt="advice-bg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />

      <div className="absolute z-40 inset-0 bg-gradient-to-tl from-pink-700 to-pink-300 opacity-60 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-16">
          <h2 className="text-2xl font-semibold text-white">
            مشاوره رایگان آنلاین بهداشتی آرایشی عطر
          </h2>
          <div className="flex flex-col items-center justify-center space-y-6">
            <h4 className="text-white font-semibold">
              چطور مشاوره آنلاین بگیرم؟
            </h4>
            <div className="flex items-center space-x-4">
              <Chip text="رزرو مشاوره ویدیویی">
                <CameraReels className="text-white w-4 h-4 ml-2" />
              </Chip>
              <Chip text="رزرو مشاوره صوتی">
                <Headphones className="text-white w-5 h-5 ml-2" />
              </Chip>
              <Chip text="ثبت سوال جدید">
                <Plus className="text-white w-6 h-6 ml-1" />
              </Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
