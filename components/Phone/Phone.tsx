import { FC, PropsWithChildren } from 'react'
import iPhone from '@/assets/images/iPhone.png'
import Image from 'next/image'

export const Phone: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='relative shrink-0 h-[42rem] w-[21rem] select-none'>
      <Image
        src={iPhone}
        className='absolute top-0 left-0 h-[42rem] select-none'
        alt='Foxy on iPhone'
        height={672}
        width={336}
      />
      <div className='absolute top-0 w-full h-full px-[1rem] py-[1rem] select-auto'>
        <div className='rounded-[36px] w-full h-full transform-translate translate-y-[-2px] overflow-x-hidden'>
          {children}
        </div>
      </div>
    </div>
  )
}
