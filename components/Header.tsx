import logoBig from '@/assets/images/logoBig.svg'
import Image from 'next/image'
import Button from './Button/Button.component'

export const Header = () => {
  return (
    <header className='flex justify-between items-center pt-12 px-12'>
      <div className='scale-125'>
        <Image src={logoBig} alt='logoBig' />
      </div>
      <Button onClick={() => console.log('Amogus')}>
        <p className='px-7 py-3 font-syne text-xl'>Register</p>
      </Button>
    </header>
  )
}
