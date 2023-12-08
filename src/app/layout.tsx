import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { DarkMode, ProgressbarProvider } from '@/components'
import { ILayoutProps } from '@/types/common'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BIM objects',
  description:
    'Download free BIM objects from over 2 000 manufacturers. Choose among BIM objects for SketchUp, Autodesk, Revit, Vectorworks or ArchiCAD.',
}

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen flex flex-col dark:bg-black`}
      >
        <ProgressbarProvider>
          <main>{children}</main>
          <DarkMode />
        </ProgressbarProvider>
      </body>
    </html>
  )
}
