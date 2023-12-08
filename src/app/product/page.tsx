import { FC, Suspense } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import './_product.scss'
import { Download } from '@/components'
import { ProductService } from '@/services/product.service'
import { IPageProps } from '@/types/common'

const ThreeDPreview: FC<IPageProps> = async ({ searchParams }) => {
  // * Get the product preview and files
  const { preview, files } = await ProductService(searchParams.gtin as string)

  if (!searchParams.gtin) {
    redirect('?gtin=0074312345678')
  }

  return (
    <div className='w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-auto dark:text-white'>
      {preview?.iframeUrl && (
        <>
          <h1 className='flex border-b text-xl'>Preview</h1>
          <iframe
            className='border-0 w-full min-h-[600px]'
            src={preview.iframeUrl}
          />
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        {files && <Download files={files} />}
      </Suspense>
    </div>
  )
}

export default ThreeDPreview
