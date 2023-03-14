import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Component
import InputSearch from '../../Input/InputSearch'

// Constant
import { NAVBAR } from '../../../constants/common'

// Styles
import styles from '../Navbar.module.css'

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const NavbarProduct = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleFormSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/products?search=${query}`)
  }

  return (
    <div className={styles.navbar_product}>
      <Link className={styles.brand_name} href="/">
        Avion
      </Link>

      <nav>
        <ul className={styles.navbar}>
          {NAVBAR.map((i) => (
            <li key={i.label}>
              <Link
                href={{
                  pathname: '/products',
                  query: { category: i.query },
                }}
                passHref
                className={styles.nav_link}
                aria-label="navbar"
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.cart_button}>
        <InputSearch
          onChange={handleSearch}
          handleFormSubmit={handleFormSubmitSearch}
          position="right"
        />
        <Link href="/carts" aria-label="shopping cart">
          <ShoppingCartIcon style={{ color: 'black' }} />
        </Link>

        <Link href="/carts" aria-label="account">
          <AccountCircleIcon style={{ color: 'black' }} />
        </Link>
      </div>
    </div>
  )
}

export default NavbarProduct
