import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface IDownloadProps {
  files: ReadonlyArray<FilesType>
}

const Download: FC<IDownloadProps> = ({ files }) => {
  return (
    <div className='flex flex-col gap-4 mt-8 mb-4'>
      {files.map(({ name, downloadLink }, index) => (
        <div key={index} className='flex items-center justify-between'>
          <div className='bim-text'>
            <div className='ml-2'>{name}</div>
          </div>
          <div className='flex flex-col gap-1'>
            <Link
              className='bim-button dark:border-white'
              href={downloadLink.url}
              download
              target='_blank'
            >
              <Image
                src='bimobject-logo.svg'
                alt='BIM Object'
                width={16}
                height={16}
              />
              Download
            </Link>
            <p className='bim-text'>Powered by BIMobject</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Download
