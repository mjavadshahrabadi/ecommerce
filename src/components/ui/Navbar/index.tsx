import React, { FC, ReactElement } from 'react'
import { Logo } from '@/components/ui/Navbar/Logo'

export const Navbar: FC = (): ReactElement => {
  return (
    <nav className="max-w-8xl mx-auto h-200 py-5 flex flex-col space-y-4">
      <div className="flex flex-row-reverse items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>2</div>
          <Logo />
        </div>
        <div className="flex items-center space-x-4">
          <div>3</div>
          <div>4</div>
        </div>
      </div>
      <div>2</div>
    </nav>
  )
}
