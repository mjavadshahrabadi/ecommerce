import React, { FC, ReactElement } from 'react'
import { MenuItem } from '@/components/ui/Navbar/Menu/MenuItem'
import { People } from 'react-bootstrap-icons'
import Link from 'next/link'

export const CClubAndBranch: FC = (): ReactElement => {
  return (
    <div className="flex items-center space-x-3">
      <Link href="/customer-club">
        <MenuItem title="باشگاه مشتریان">
          <People className="w-5 h-5 text-primary" />
        </MenuItem>
      </Link>
      <div className="border-r border-gray-200 h-6" />
      <Link href="/branches">
        <MenuItem title="شعب روژا">
          <People className="w-5 h-5 text-primary" />
        </MenuItem>
      </Link>
    </div>
  )
}
