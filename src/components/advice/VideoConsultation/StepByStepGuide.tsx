import React, { FC, ReactElement } from 'react'
import { CheckCircle } from 'react-bootstrap-icons'
import Image from 'next/image'

interface StepByStepGuideProps {
  steps: string[]
  imgSrc: string
  subtitle: string
}
export const StepByStepGuide: FC<StepByStepGuideProps> = ({
  steps,
  subtitle,
  imgSrc,
}): ReactElement => {
  return (
    <div className="flex flex-col space-y-5">
      <h5 className="text-sm text-gray-700 font-semibold text-[15px]">
        {subtitle}
      </h5>
      <div className="bg-white p-10 rounded-2xl shadow-md grid grid-cols-2 gap-5 border">
        <div className="flex flex-col space-y-4 justify-center">
          {steps &&
            steps.map((step, _i) => (
              <div className="flex items-center">
                <i>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </i>
                <span className="text-md text-gray-600 mr-2">{step}</span>
              </div>
            ))}
        </div>
        <div>
          <Image
            src="/advice/guide/guide.png"
            alt="guide"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
