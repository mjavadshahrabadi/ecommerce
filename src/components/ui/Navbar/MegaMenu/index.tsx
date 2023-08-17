'use client'
import React, { FC, ReactElement, useState, useCallback } from 'react'
import { ChevronDown } from 'react-bootstrap-icons'
import { MegaMenuContainer } from '@/components/ui/Navbar/MegaMenu/MegaMenuContainer'
export const MegaMenu: FC = (): ReactElement => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<number>(1)

  const hoverHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      switch (e.type) {
        case 'mouseenter':
          setHovered(true)
          break
        case 'mouseleave':
          setHovered(false)
          setSelectedCategory(1)
          break
      }
    },
    [],
  )

  return (
    <div
      className="flex items-center cursor-pointer h-10"
      onMouseEnter={(e) => hoverHandler(e)}
      onMouseLeave={(e) => hoverHandler(e)}
    >
      <ChevronDown className="text-primary w-3 h-3" />
      <h4 className="text-[13px] ml-1.5 text w-24 text-right text-primary font-semibold">
        دسته بندی کالاها
      </h4>

      <MegaMenuContainer
        hovered={hovered}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  )
}
