import React, { FC, ReactElement, useRef, useState } from 'react'

interface TimerProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}
export const Timer: FC<TimerProps> = ({
  minutes,
  seconds,
  hours,
  days,
}): ReactElement => {
  return (
    <div className="flex items-center justify-between">
      <p className="bg-gray-200 py-1 px-4 rounded-md text-sm">{seconds}</p>
      <span className="text-gray-700 mx-1">:</span>
      <p className="bg-gray-200 py-1 px-4 rounded-md text-sm">{minutes}</p>
      <span className="text-gray-700 mx-1">:</span>
      <p className="bg-gray-200 py-1 px-4 rounded-md text-sm">{hours}</p>
      <span className="text-gray-700 mx-1"></span>
      <p className="bg-gray-200 py-1 px-4 rounded-md text-sm">{days}</p>
    </div>
  )
}
