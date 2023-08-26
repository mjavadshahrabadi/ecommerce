'use client'
import React, { FC, ReactElement, useState } from 'react'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'

interface FilterSwitchItemProps {
  title: string
}
export const FilterSwitchItem: FC<FilterSwitchItemProps> = ({
  title,
}): ReactElement => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <h4 className="text-gray-700 font-semibold text-sm">{title}</h4>
      <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
    </div>
  )
}
