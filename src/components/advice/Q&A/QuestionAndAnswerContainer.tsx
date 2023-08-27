import React, { FC, ReactElement } from 'react'
import { QuestionAndAnswerList } from '@/components/advice/Q&A/QuestionAndAnswerList'
import { Latest } from '@/components/advice/Q&A/Latest'

export const QuestionAndAnswerContainer: FC = (): ReactElement => {
  return (
    <div className="max-w-5xl mx-auto p-5 bg-white shadow-md rounded-3xl border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <QuestionAndAnswerList />
        <div className="flex flex-col items-end space-y-6">
          <p className="text-sm text-gray-600 text-right">
            اگر شرایط مشاوره ویدئویی رو ندارید یا وقت خالی برای رزرو وجود نداره
            میتونی از مشاوره متنی روژا استفاده کنی. شاید هم سوالی که داری قبلا
            پرسیده شده. پیشنهاد میکنم قبل از اینکه سوالت رو مطرح کنی جستجو کن
          </p>
          <div className="flex items-center w-full">
            <input
              type="text"
              className="p-2 bg-gray-100 text-sm rounded-tl-md rounded-bl-md w-full focus:outline-0 text-right"
              placeholder="...جستجو در میان سوالات"
            />

            <button
              className="text-sm text-gray-600 p-2 border rounded-tr-md rounded-br-md"
              type="button"
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
      <Latest />
    </div>
  )
}
