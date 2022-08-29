import '../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { $fetch } from 'ohmyfetch'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add('antialiased')
  }, [])

  useEffect(() => {
    const timer = setTimeout(
      () =>
        $fetch('https://foxy.s.talkiiing.ru/api/metrics/landingOpenEvent', {
          method: 'POST',
          body: {
            ua: navigator.userAgent,
          },
        }),
      3000,
    )
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
