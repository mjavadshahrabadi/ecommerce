import React, { FC, ReactElement } from 'react'

interface LatestItem {
  title: string
  description: string
  publishDate: string
}

export const LatestItem: FC<LatestItem> = ({
  publishDate,
  description,
  title,
}): ReactElement => {
  return (
    <li className="grid grid-cols-7 gap-5 border-b last:border-b-0 p-4">
      <p className="col-span-2 text-right truncate text-gray-800 text-sm">
        {title}
      </p>
      <p className="col-span-4 text-right truncate text-gray-600 text-sm">
        {description}
      </p>
      <small className="col-span-1 truncatetext-gray-600 text-xs lg:text-sm">
        {publishDate}
      </small>
    </li>
  )
}
