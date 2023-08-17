import React, { FC, ReactElement } from 'react'
import { MenuItem } from '@/components/ui/Navbar/Menu/MenuItem'
import { People } from 'react-bootstrap-icons'

export const CClubAndBranch: FC = (): ReactElement => {
  return (
    <div className="flex items-center space-x-3">
      <MenuItem title="باشگاه مشتریان">
        <People className="w-5 h-5 text-primary" />
      </MenuItem>
      <div className="border-r border-gray-200 h-6" />
      <MenuItem title="شعب روژا">
        <People className="w-5 h-5 text-primary" />
      </MenuItem>
    </div>
  )
}
