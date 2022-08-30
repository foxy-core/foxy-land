import Logo from '@/assets/images/logo-dark.svg'
import Button from '@/components/Button/Button.component'
import { $fetch } from 'ohmyfetch'
import { sendButtonClick } from '@/services/sendButtonClick'

export const UnderConstruction = () => {
  return (
    <div className='w-full h-full pt-12 pb-2 px-4 flex flex-col space-y-8 items-center bg-x-white rounded-2xl shadow-3xl shadow-black'>
      <Logo className='h-12' />
      <span className=' font-mont text-center text-xl px-2'>
        Мы{' '}
        <b>
          все еще разрабатываем{' '}
          <span className='text-x-orange-400 tracking-wide'>🦊&nbsp;Foxy</span>
        </b>
        , но <b>уже сейчас ты&nbsp;можешь написать</b> нашему&nbsp;боту в&nbsp;
        <span className='text-[#0088cc] tracking-wide font-bold'>Telegram</span>
        , чтобы&nbsp;он прислал напоминалку, когда&nbsp;мы&nbsp;откроемся!
      </span>

      <Button
        onClick={() => {
          window.open('https://t.me/FoxyAuthBot')
          sendButtonClick()
        }}
      >
        <p className='px-7 py-2 font-mont text-lg font-bold'>
          Перейти в Telegram
        </p>
      </Button>

      <span className='text-zinc-600 font-mont text-center text-sm pt-2 pb-8 px-4'>
        А еще этот бот при открытии подарит вам пару крутых фишек 😉
      </span>
    </div>
  )
}
