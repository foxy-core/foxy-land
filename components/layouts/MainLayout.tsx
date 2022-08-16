import { Footer } from '../Footer'
import { FC, PropsWithChildren } from 'react'
import { Header } from '../Header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <div className='flex flex-col justify-between min-h-screen'>
        <Header />
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
