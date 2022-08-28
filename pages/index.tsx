import Head from 'next/head'
import Logo from '@/assets/images/logoBig.svg'
import { Phone } from '@/components/Phone/Phone'
import Button from '@/components/Button/Button.component'
import { UnderConstruction } from '@/components/UnderConstruction'

const Home = () => {
  return (
    <>
      <Head>
        <title>Foxy 🔥</title>
        <meta
          name='description'
          content='Foxy Dating. Local service for people to connect'
        />
        <meta
          name='keywords'
          content='foxy, фокси, фокс, знакомства, сервис, date, meet new people, make friends, chat new people, flirt'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta name='language' content='ru' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article className='flex flex-col space-y-6 xl:space-y-0 w-full items-center xl:h-screen xl:flex-row px-4 xl:px-12 overflow-y-hidden'>
        <section className='flex flex-col justify-start xl:justify-start xl:pb-40 pt-20 xl:pt-0  px-4 items-center xl:items-start'>
          <h3 className='tracking-wide text-x-orange-400 pb-4 text-lg lg:text-xl xl:text-2xl text-center xl:text-left'>
            Присоединяйся сейчас, это очень просто!
          </h3>
          <h1 className='pb-6 text-4xl lg:text-3xl xl:text-8xl text-center xl:text-left'>
            Made for&nbsp;people to&nbsp;connect
          </h1>
          <h3 className='pb-2 text-x-gray-400 text-lg lg:text-xl xl:text-2xl text-center xl:text-left'>
            Приложение для&nbsp;знакомств, которое и&nbsp;вправду дает
            больше&nbsp;свободы
          </h3>
        </section>
        <section className='pb-8 xl:p-16 rotate-0 xl:rotate-[6deg]'>
          <Phone>
            <iframe
              src='https://foxy.talkiiing.ru'
              className='w-full h-full bg-white py-2'
            />
          </Phone>
        </section>
      </article>
      <section className='w-full min-h-[20rem] bg-x-orange-300 flex flex-col items-center py-16 px-2'>
        <div className='bg-x-bg max-w-md px-4'>
          <UnderConstruction />
        </div>
      </section>
    </>
  )
}

export default Home
