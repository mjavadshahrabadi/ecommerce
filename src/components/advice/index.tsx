import React, { FC, ReactElement } from 'react'
import { AdviceJumbotron } from '@/components/advice/AdviceJumbotron'
import { ServiceType } from '@/components/advice/ServiceType'
import { QA } from '@/components/advice/Q&A'
import { WhyBeautyAdvice } from '@/components/advice/WhyBeautyAdvice'
import { VideoConsultation } from '@/components/advice/VideoConsultation'

export const AdviceSection: FC = (): ReactElement => {
  return (
    <div className="mb-8 lg:mb-24">
      <AdviceJumbotron />
      <ServiceType />
      <QA />
      <WhyBeautyAdvice />
      <VideoConsultation />
    </div>
  )
}
