import React, { FC, ReactElement } from 'react'
import { ShopBranchesItem } from '@/components/branches/ShopBranchesItem'

export const ShopBranchesList: FC = (): ReactElement => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="relative w-full h-1 border-t-2 border-gray-300 z-10 flex items-center justify-center mt-8">
        <h4 className="absolute -top-4 rounded-md z-20 w-fit bg-gray-50 px-4 text-primary font-semibold">
          فروشگاه های روژا
        </h4>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
        <ShopBranchesItem
          name="روژا نیایش مال"
          phoneNumbers={['(+۹۸) ۹۳۶۱۲۳۴۵۶۵', '(+۹۸) ۹۳۶۱۲۳۴۵۶۵']}
          atWorkTime="( ساعت کاری از ۱۰ الی ۲۲ )"
        />
      </ul>
    </div>
  )
}
