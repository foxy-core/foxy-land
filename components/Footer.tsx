import Link from 'next/link'
import Image from 'next/image'
import Twitter from '@/assets/images/twitter.svg'
import Github from '@/assets/images/github.svg'

export const Footer = () => {
  return (
    <footer className='w-full bg-x-gray-300 bg-opacity-[.05] py-4'>
      <div className='flex flex-col space-y-6 items-center pt-4'>
        <Link href='terms-of-use/'>
          <p className='cursor-pointer text-center'>Terms of Use</p>
        </Link>
        <div className='flex space-x-6 items-center'>
          <div className='cursor-pointer'>
            <Link
              href='https://github.com/foxy-core'
              className='cursor-pointer'
            >
              <Github className='h-6 w-6' />
            </Link>
          </div>
        </div>
        <p className='text-x-gray-400 text-center text-sm'>
          Foxy Core, 2022
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
