import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppProps } from 'next/app'
import App from './_app'

describe('App', () => {
  it('renders the component with pageProps', () => {
    const mockPageProps = {
      data: {
        title: 'Sample title',
        content: 'Sample content',
      },
    } as AppProps['pageProps']

    const { getByText } = render(
      <App
        Component={() => <h1>Hello, world!</h1>}
        pageProps={mockPageProps}
      />,
    )

    expect(getByText('Hello, world!')).toBeInTheDocument()
  })
})
