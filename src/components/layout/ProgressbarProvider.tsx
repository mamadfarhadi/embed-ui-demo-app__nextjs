'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { FC, ReactNode } from 'react'

const ProgressBarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ProgressBar
        height='4px'
        color='#000000'
        options={{ showSpinner: true }}
        shallowRouting
      />
      {children}
    </>
  )
}

export default ProgressBarProvider
