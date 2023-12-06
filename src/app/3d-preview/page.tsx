import { FC, Suspense } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import './_3DPreview.scss'
import { Download } from '@/components'
import { ProductService } from '@/services/product.service'

const ThreeDPreview: FC<IPageProps> = async ({ searchParams }) => {
  // * Get the product preview and files
  const { preview, files } = await ProductService(searchParams.gtin as string)

  if (!searchParams.gtin) {
    redirect('?gtin=0074312345678')
  }

  return (
    <div className='w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-auto dark:text-white'>
      <h1 className='text-3xl text-center mx-auto mb-4 mt-2'>
        Partner&apos;s Website
      </h1>
      <div className='text-center my-2 flex gap-5 justify-center'>
        {/*<input type="text" className="border border-black rounded-md"/>*/}
        <Link
          href={`/3d-preview?gtin=0074312345678`}
          className='border rounded-md px-2 py-1 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500'
        >
          Blue Car
        </Link>
        <Link
          href={`/3d-preview?gtin=3103123683048`}
          className='border rounded-md px-2 py-1 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500'
        >
          Red Car
        </Link>
        <Link
          href={`/3d-preview?gtin=73510100002218`}
          className='border rounded-md px-2 py-1 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500'
        >
          Red Car 2
        </Link>
      </div>
      {preview?.iframeUrl && (
        <iframe
          className='border-0 w-full min-h-[600px]'
          src={preview.iframeUrl}
        />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        {files && <Download files={files} />}
      </Suspense>
    </div>
  )
}

export default ThreeDPreview
