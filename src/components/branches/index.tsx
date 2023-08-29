import React, { FC, ReactElement } from 'react'
import { BranchesJumbotron } from '@/components/branches/BranchesJumbotron'
import { ShopBranchesList } from '@/components/branches/ShopBranchesList'

export const BranchesSection: FC = () => {
  return (
    <>
      <BranchesJumbotron />
      <ShopBranchesList />
    </>
  )
}
