import Head from 'next/head'
import Link from 'next/link'

const TermsOfUse = () => {
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

      <section className='w-full min-h-screen flex flex-col items-center py-8 xl:py-32 px-4'>
        <div className='max-w-4xl w-full px-4 flex flex-col space-y-4 bg-x-white rounded-2xl shadow-3xl shadow-black py-8 font-mont'>
          <Link href='/' className='cursor-pointer'>
            <span className='px-4 py-1 mx-auto text-center text-x-orange-400 underline underline-offset-4 cursor-pointer select-none'>
              На главную
            </span>
          </Link>
          <span className='text-3xl'>Положения об использовании</span>
          <span>
            Ближе к запуску проекта здесь вы сможете найти условия
            использования, обработки, и хранения данных.
          </span>
        </div>
      </section>
    </>
  )
}

export default TermsOfUse
