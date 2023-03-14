import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import styles from './Layout.module.css'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import NavbarProduct from '../Navbar/NavbarProduct'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  // Get the current path
  const path = router.pathname

  const { layout, main } = styles

  return (
    <>
      <div className={layout}>
        <main className={main}>
          {path === '/products/[productId]' ? <NavbarProduct /> : ''}
          {path === '/products/[productId]' ? '' : <Header />}
          {path === '/products/[productId]' ? '' : <Navbar />}
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Layout
