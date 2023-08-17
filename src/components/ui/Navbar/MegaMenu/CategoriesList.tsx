import React, { FC, ReactElement, useMemo } from 'react'
import data from '../../../../data/megaMenuProducts.json'

export const CategoriesList: FC = (): ReactElement => {
  const keys = useMemo(() => Object.keys(data), [data])

  return <ul className="flex flex-col space-y-4"></ul>
}
