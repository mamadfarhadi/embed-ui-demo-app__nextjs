import React, { FC } from 'react'
import { Header } from '@/components'
import { ILayoutProps } from '@/types/common'

const layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <h1 className='text-3xl text-center mx-auto mb-4 mt-2'>
        Partner&apos;s Website
      </h1>
      <Header />
      {children}
    </div>
  )
}

export default layout
