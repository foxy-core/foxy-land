import Link from 'next/link'
import Image from 'next/image'
import twitter from '@/assets/images/twitter.svg'
import github from '@/assets/images/github.svg'

export const Footer = () => {
  return (
    <footer className='bg-x-gray-300 bg-opacity-[.05]'>
      <div className='w-fit mx-auto'>
        <Link href='#b'>
          <p className='cursor-pointer text-center py-4'>Terms of Use</p>
        </Link>
        <div className='flex gap-8 justify-center py-4'>
          <div className='cursor-pointer scale-150'>
            <Link href='#b'>
              <Image src={twitter} alt='twitterIcon' />
            </Link>
          </div>
          <div className='cursor-pointer scale-150'>
            <Link href='#b'>
              <Image src={github} alt='githubIcon' />
            </Link>
          </div>
        </div>
      </div>
      <p className='text-x-gray-400 text-right pr-12'>Foxy Core, 2022</p>
    </footer>
  )
}
