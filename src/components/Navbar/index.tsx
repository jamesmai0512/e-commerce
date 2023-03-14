import React from 'react'
import Link from 'next/link'

// Constant
import { NAVBAR } from '../../constants/common'

// Styles
import styles from './Navbar.module.css'

const Navbar = () => {
  const { navbar, nav_link } = styles
  return (
    <nav>
      <ul className={navbar}>
        {NAVBAR.map((i) => (
          <li key={i.label}>
            <Link
              href={{
                pathname: '/products',
                query: { category: i.query },
              }}
              passHref
              className={nav_link}
              aria-label="navbar"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
