import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Component
import InputSearch from '../Input/InputSearch'

// Styles
import styles from './Header.module.css'

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const { header, header_input_search, brand_name, cart_button } = styles

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleFormSubmitSearch = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      router.push(`/products?search=${query}`)
    },
    [query, router],
  )

  return (
    <header>
      <div className={header}>
        <div className={header_input_search}>
          <InputSearch
            onChange={handleSearch}
            handleFormSubmit={handleFormSubmitSearch}
          />
        </div>

        <Link className={brand_name} href="/" aria-label="logo">
          Avion
        </Link>

        <div className={cart_button}>
          <Link href="/carts" aria-label="shopping cart">
            <ShoppingCartIcon style={{ color: 'black' }} />
          </Link>

          <Link href="/carts" aria-label="account">
            <AccountCircleIcon style={{ color: 'black' }} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
