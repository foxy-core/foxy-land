import Head from 'next/head'
import Image from 'next/image'
import iPhone from '@/assets/images/iPhone.png'
import Button from '@/components/Button/Button.component'

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
          content='date, meet new people, make friends, chat new people, flirt'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta name='language' content='en' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article className='flex gap-20'>
        <section className='py-48 pl-24'>
          <h1 className='max-w-3xl pb-6'>
            Made for people to connect
          </h1>
          <h2 className='pb-2 max-w-2xl tracking-wider leading-snug'>
            Brand-new dating app, that really brings you more freedom!
          </h2>
          <h3 className='tracking-wide'>Join us now, it’s free!</h3>
          <div className='pt-16'>
          <Button onClick={() => console.log('Aboba')}>
            <p className='px-7 py-3'>Register</p>
          </Button>

          </div>
        </section>
        <section className='scale-[.7] xl:scale-75 2xl:scale-100 rotate-0 xl:rotate-[6deg]'>
          <Image src={iPhone} alt='iPhone' height={900} width={450} />
        </section>
      </article>
    </>
  )
}

export default Home
