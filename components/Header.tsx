import Button from './Button/Button.component'
import Logo from '@/assets/images/logoBig.svg'

export const Header = () => {
  return (
    <header className='flex justify-center lg:justify-between items-center pt-8 lg:pt-12 px-8 lg:px-12'>
      <div>
        <Logo className='h-10 lg:h-12 xl:h-16' />
      </div>
      {/*<Button onClick={() => console.log('Sorry, no registration(')}>
        <p className='px-8 font-syne text-lg lg:text-xl'>Register</p>
      </Button>*/}
    </header>
  )
}
