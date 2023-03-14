import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import NavbarProduct from '../'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Navbar', () => {
  it('renders the brand name', () => {
    const { getByText } = render(<NavbarProduct />)
    expect(getByText('Avion')).toBeInTheDocument()
  })

  it('Should renders the navigation links', () => {
    const { getByText } = render(<NavbarProduct />)
    expect(getByText('Plant Pots')).toBeInTheDocument()
    expect(getByText('Ceramics')).toBeInTheDocument()
  })

  it('Should renders the navbar correctly', () => {
    const component = render(<NavbarProduct />)
    expect(component).toMatchSnapshot()
  })
})
