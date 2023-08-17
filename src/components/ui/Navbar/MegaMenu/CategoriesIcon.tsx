import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface CategoriesIconProps {
  id: number
}
export const CategoriesIcon: FC<CategoriesIconProps> = ({
  id,
}): ReactElement | null => {
  if (id === 1) {
    return (
      <Image src="/icons/perfume.png" width={30} height={30} alt="perfume" />
    )
  } else if (id === 2) {
    return (
      <Image src="/icons/health.png" width={30} height={30} alt="sanitary" />
    )
  } else if (id === 3) {
    return (
      <Image src="/icons/lipstick.png" width={30} height={30} alt="lipstick" />
    )
  } else if (id === 4) {
    return <Image src="/icons/hair.png" width={30} height={30} alt="hair" />
  } else if (id === 5) {
    return (
      <Image
        src="/icons/smart-plug.png"
        width={30}
        height={30}
        alt="smart-plug"
      />
    )
  }

  return null
}
