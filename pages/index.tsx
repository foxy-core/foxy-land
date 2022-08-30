import Head from 'next/head'
import Logo from '@/assets/images/logoBig.svg'
import { Phone } from '@/components/Phone/Phone'
import Button from '@/components/Button/Button.component'
import { UnderConstruction } from '@/components/UnderConstruction'
import Image from 'next/image'
import phoneCover from '@/assets/images/phone-cover.png'
import { sendButtonClick } from '@/services/sendButtonClick'

const Home = () => {
  return (
    <>
      <Head>
        <title>Foxy App — Date, chat and make relationships</title>
        <meta
          name='title'
          content='Foxy App — Date, chat and make relationships'
        />
        <meta
          name='description'
          content="Foxy — dating service from Siberia. Join us now, it's easy and free! It's made for people to connect!"
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://talkiiing.ru/' />
        <meta
          property='og:title'
          content='Foxy App — Date, chat and make relationships'
        />
        <meta
          property='og:description'
          content="Foxy — dating service from Siberia. Join us now, it's easy and free! It's made for people to connect!"
        />
        <meta property='og:image' content='https://talkiiing.ru/preview.jpg' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://talkiiing.ru/' />
        <meta
          property='twitter:title'
          content='Foxy App — Date, chat and make relationships'
        />
        <meta
          property='twitter:description'
          content="Foxy — dating service from Siberia. Join us now, it's easy and free! It's made for people to connect!"
        />
        <meta
          property='twitter:image'
          content='https://talkiiing.ru/preview.jpg'
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
      <article className='flex flex-col space-y-6 xl:space-y-0 w-full items-center xl:min-h-[700px] xl:h-[calc(100vh-6rem)] xl:flex-row px-4 xl:px-12'>
        <section className='flex flex-col justify-start xl:justify-start pt-8 lg:pt-16 xl:pt-0 px-4 xl:px-0 items-center xl:items-start'>
          <h3 className='order-2 xl:order-1 tracking-wide text-x-orange-400 pb-4 text-base lg:text-xl xl:text-xl text-center xl:text-left'>
            Присоединяйся&nbsp;сейчас!
          </h3>
          <h1 className='order-1 xl:order-2 pb-6 text-5xl lg:text-5xl xl:text-8xl text-center xl:text-left'>
            Made for&nbsp;people to&nbsp;connect
          </h1>
          <h3 className='order-3 pb-2 text-x-gray-400 text-sm lg:text-xl xl:text-xl text-center xl:text-left'>
            Приложение для&nbsp;знакомств, которое и&nbsp;вправду дает
            больше&nbsp;свободы
          </h3>
          <Button
            onClick={() => {
              window.open('https://t.me/FoxyAuthBot')
              sendButtonClick()
            }}
            className='order-last !mt-8 mb-4'
          >
            <p className='px-7 py-2 font-mont text-lg font-bold'>
              Подписаться на открытие
            </p>
          </Button>
        </section>
        <section className='pb-8 xl:pb-16 xl:px-16 xl:pt-8 rotate-0 xl:rotate-[6deg]'>
          <Phone>
            <div className='w-full h-full overflow-y-hidden'>
              <Image
                src={phoneCover}
                className='w-full h-full select-none'
                alt='foxy'
              />
            </div>
          </Phone>
        </section>
      </article>
      <section className='w-full min-h-[20rem] flex flex-col items-center py-32 px-2'>
        <div className='bg-x-bg max-w-md px-4'>
          <UnderConstruction />
        </div>
      </section>
    </>
  )
}

export default Home
