type IPreferColorScheme = 'light' | 'dark'

interface IPageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
