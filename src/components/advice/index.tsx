import React, { FC, ReactElement } from 'react'
import { AdviceJumbotron } from '@/components/advice/AdviceJumbotron'

export const AdviceSection: FC = (): ReactElement => {
  return (
    <section>
      <AdviceJumbotron />
    </section>
  )
}
