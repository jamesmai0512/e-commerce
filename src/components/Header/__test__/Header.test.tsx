import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Header', () => {
  it('Should render correctly', () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })

  it('should render brand name', () => {
    const { getByText } = render(<Header />)
    const brandName = getByText('Avion')

    expect(brandName).toBeInTheDocument()
  })
})
