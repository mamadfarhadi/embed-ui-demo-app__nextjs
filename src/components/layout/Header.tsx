import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'

const Header = () => {
  return (
    <div className='text-center mt-4 mb-2 flex gap-5 justify-center'>
      {/*<input type="text" className="border border-black rounded-md"/>*/}
      <Link
        href={`/`}
        className='flex justify-center items-center border rounded-md px-2 py-1 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500'
      >
        <IoArrowBack />
      </Link>
      <Link
        href={`/product?gtin=19520000000001`}
        className='border rounded-md px-2 py-1 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500'
      >
        Blue Car
      </Link>
      <Link
        href={`/product?gtin=19520000000018`}
        className='border rounded-md px-2 py-1 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500'
      >
        Red Car
      </Link>
      <Link
        href={`/product?gtin=19520000000025`}
        className='border rounded-md px-2 py-1 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500'
      >
        Red Car 2
      </Link>
    </div>
  )
}

export default Header
