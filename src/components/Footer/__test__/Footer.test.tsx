import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../'

describe('Footer component', () => {
  it('Should render snapshot correctly', () => {
    const component = render(<Footer />)

    expect(component).toMatchSnapshot()
  })

  it('Should render an Input component', () => {
    render(<Footer />)
    const input = screen.getByPlaceholderText('your@email.com')
    expect(input).toBeInTheDocument()
  })

  it('Should contain the correct company name', () => {
    render(<Footer />)
    const companyName = screen.getByText('Copyright 2022 Avion LTD')
    expect(companyName).toBeInTheDocument()
  })
})
