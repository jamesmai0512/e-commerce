import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LoadingIndicator from '..'

describe('LoadingIndicator component', () => {
  it('Should render snapshot correctly', () => {
    const component = render(<LoadingIndicator />)

    expect(component).toMatchSnapshot()
  })
})
