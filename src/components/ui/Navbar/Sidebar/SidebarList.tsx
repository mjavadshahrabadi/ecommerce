import React, { FC, ReactElement } from 'react'
import { SidebarItem } from '@/components/ui/Navbar/Sidebar/SidebarItem'

export const SidebarList: FC = (): ReactElement => {
  return (
    <ul className="flex flex-col w-full" dir="rtl">
      <SidebarItem title="برند" type="single" />
      <SidebarItem
        title="عطر"
        type="list"
        listData={['عطر و ادکلن', 'خوش بو کننده بدن', 'گیفت ست عطر', 'عطریاب']}
      />
      <SidebarItem
        title="آرایشی"
        type="list"
        listData={['عطر و ادکلن', 'خوش بو کننده بدن', 'گیفت ست عطر', 'عطریاب']}
      />
      <SidebarItem
        title="بهداشتی"
        type="list"
        listData={['عطر و ادکلن', 'خوش بو کننده بدن', 'گیفت ست عطر', 'عطریاب']}
      />
      <SidebarItem
        title="مو"
        type="list"
        listData={['عطر و ادکلن', 'خوش بو کننده بدن', 'گیفت ست عطر', 'عطریاب']}
      />
      <SidebarItem
        title="لوازم برقی"
        type="list"
        listData={['عطر و ادکلن', 'خوش بو کننده بدن', 'گیفت ست عطر', 'عطریاب']}
      />
      <SidebarItem title="کارت هدیه روژا" type="single" />
      <SidebarItem title="مشاوره رایگان" type="single" />
      <SidebarItem title="فروش سازمانی" type="single" />
      <SidebarItem title="وبلاگ روژا" type="single" />
      <SidebarItem title="باشگاه مشتریان" type="single" />
      <SidebarItem title="شعب روژا" type="single" />
    </ul>
  )
}
