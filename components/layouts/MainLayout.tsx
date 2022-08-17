import { FC, PropsWithChildren } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='px-10'>
      <div className='flex flex-col justify-between min-h-screen'>
        <Header />
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
