import '../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout'
import { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add('antialiased')
  }, [])

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
