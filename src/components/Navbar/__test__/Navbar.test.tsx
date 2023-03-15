import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Components
import Navbar from '../'

// Constant
import { NAVBAR } from '../../../constants/common'

describe('Navbar component', () => {
  it('Should renders the navbar correctly', () => {
    const component = render(<Navbar />)
    expect(component).toMatchSnapshot()
  })

  it('Should renders a list of navbar links', () => {
    render(<Navbar />)
    const navLinks = screen.getAllByRole('link')
    expect(navLinks.length).toBe(NAVBAR.length)
  })

  it('Should renders the correct labels and URLs for each navbar link', () => {
    render(<Navbar />)
    const navLink = screen.getByRole('link', { name: NAVBAR[1].label })
    expect(navLink).toHaveAttribute(
      'href',
      `/products?category=${encodeURIComponent(NAVBAR[1].query)}`,
    )
  })
})
