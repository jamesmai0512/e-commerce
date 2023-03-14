import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { useRouter } from 'next/router'
import Product, { ProductProps } from '../'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Product', () => {
  const mockRouterPush = jest.fn()
  const props: ProductProps = {
    imageUrl: 'https://example.com/image.jpg',
    title: 'Test Product',
    price: 9.99,
    imageSize: 'small',
    id: 123,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    })
  })

  it('Should renders the product correctly', () => {
    const component = render(<Product {...props} />)
    expect(component).toMatchSnapshot()
  })

  it('Should renders the product with the correct props', () => {
    const { getByText, getByAltText } = render(<Product {...props} />)
    expect(getByAltText('product-image')).toBeInTheDocument()
    expect(getByText('Test Product')).toBeInTheDocument()
    expect(getByText('$9.99')).toBeInTheDocument()
  })
})
