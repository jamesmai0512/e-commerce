import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import Layout, { LayoutProps } from '../'

describe('Layout', () => {
  it('Should render snapshot correctly', () => {
    const component = render(
      <Layout>
        <p>Test content</p>
      </Layout>,
    )
    expect(component).toMatchSnapshot()
  })

  it('Should renders the children and the Footer', () => {
    const props: LayoutProps = {
      children: <p>Test content</p>,
    }

    const { getByText } = render(<Layout {...props} />)

    expect(getByText('Test content')).toBeInTheDocument()
    expect(getByText('Copyright')).toBeInTheDocument()
  })

  // it('Should renders the NavbarProduct and the children when the path is /products/[productId]', () => {
  //   const props: LayoutProps = {
  //     children: <p>Test content</p>,
  //   }

  //   const { getByText } = render(
  //     <MemoryRouter initialEntries={['/products/[productId]']}>
  //       <Layout {...props} />
  //     </MemoryRouter>,
  //   )

  //   expect(getByText('Test content')).toBeInTheDocument()
  //   expect(getByText('Product Navigation')).toBeInTheDocument()
  //   expect(getByText('Copyright')).toBeInTheDocument()

  //   expect(() => getByText('Header')).toThrow()
  //   expect(() => getByText('Navbar')).toThrow()
  // })
})
