import React, { FC, ReactElement } from 'react'
import { NavLinksItem } from '@/components/blog/navbar/NavLinksItem'

export const NavLinksList: FC = (): ReactElement => {
  return (
    <ul className="lg:flex flex-row-reverse items-center space-x-4 hidden">
      <NavLinksItem title="آرایشی و زیبایی" />
      <NavLinksItem title="پوست" />
      <NavLinksItem title="عطر" />
      <NavLinksItem title="مو" />
      <NavLinksItem title="مژه و ابرو" />
      <NavLinksItem title="ناخن" />
      <NavLinksItem title="مراقبت و سلامتی" />
    </ul>
  )
}
