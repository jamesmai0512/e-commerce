import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Document from './_document'

describe('Document component', () => {
  it('renders the HTML document', () => {
    const { getByText, getByRole } = render(<Document />)

    // Assert that the title and meta description are rendered
    expect(getByText('E Commerce')).toBeInTheDocument()
    expect(getByRole('heading', { name: 'E Commerce' })).toBeInTheDocument()
    expect(getByRole('meta', { name: 'E Commerce app' })).toBeInTheDocument()

    // Assert that the main and next script components are rendered
    expect(getByRole('main')).toBeInTheDocument()
    expect(getByRole('script', { name: 'NextScript' })).toBeInTheDocument()
  })
})
