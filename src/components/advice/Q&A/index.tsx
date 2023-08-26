import React, { FC, ReactElement } from 'react'
import { QuestionAndAnswerContainer } from '@/components/advice/Q&A/QuestionAndAnswerContainer'

export const QA: FC = (): ReactElement => {
  return (
    <div className="max-w-5xl mx-auto px-4 2xl:px-0 mt-14 flex flex-col space-y-8">
      <h4 className="text-gray-700 font-semibold text-2xl text-center">
        پرسش و پاسخ
      </h4>
      <QuestionAndAnswerContainer />
    </div>
  )
}
