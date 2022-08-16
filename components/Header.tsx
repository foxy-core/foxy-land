import logoBig from '@/assets/images/logoBig.svg'
import Image from 'next/image'
import Button from './Button/Button.component'

export const Header = () => {
  return (
    <header className='flex justify-between items-center py-12 px-8 xl:px-24'>
      <Image src={logoBig} />
      <Button onClick={() => console.log('Amogus')}>
        <p className='px-7 py-3'>Register</p>
      </Button>
    </header>
  )
}
