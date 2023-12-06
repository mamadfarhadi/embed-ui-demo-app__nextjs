import Link from 'next/link'

const Home = () => {
  return (
    <div className='w-[calc(100%-2rem)] min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center border-2 border-black rounded-sm m-4 dark:text-white dark:border-white'>
      <h1 className='text-3xl text-center mx-auto mb-4 mt-2'>
        Welcome to our standalone application demo
      </h1>
      <div className='w-full max-w-xl text-center mt-4'>
        <Link
          href={`/3d-preview?gtin=0074312345678`}
          className='border border-black rounded-md px-16 py-2 hover:shadow-xl duration-300 dark:border-white dark:hover:shadow-md dark:hover:shadow-gray-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
        >
          3D Preview
        </Link>
      </div>
    </div>
  )
}

export default Home
