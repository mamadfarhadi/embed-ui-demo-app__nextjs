import { ReactNode } from 'react'

type IPreferColorScheme = 'light' | 'dark'

interface IPageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

interface ILayoutProps {
  children: ReactNode
}
