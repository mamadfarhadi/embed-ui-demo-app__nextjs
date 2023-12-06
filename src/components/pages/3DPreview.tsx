import { ProductService } from '@/services/product.service'
import '../../app/3d-preview/_3DPreview.scss'
import Download from '@/components/pages/Download'
import { FC } from 'react'

interface IThreeDPreviewProps {
  gtin: string
}
const ThreeDPreview: FC<IThreeDPreviewProps> = async ({ gtin }) => {
  const { preview, files } = await ProductService(gtin)

  return (
    <div>
      {preview?.iframeUrl && (
        <iframe
          className='border-0 w-full min-h-[600px]'
          src={preview.iframeUrl}
        />
      )}
      <Download files={files} />
    </div>
  )
}

export default ThreeDPreview
