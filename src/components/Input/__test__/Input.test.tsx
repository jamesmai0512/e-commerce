import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Input from '../'

describe('Input', () => {
  it('Should render correctly', () => {
    const placeholder = 'Enter your email'

    const component = render(<Input placeholder={placeholder} />)
    expect(component).toMatchSnapshot()
  })
  it('Should renders with a placeholder', () => {
    const placeholder = 'Enter your email'
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />)
    expect(getByPlaceholderText(placeholder).getAttribute('placeholder')).toBe(
      placeholder,
    )
  })

  it('Should renders with a value', () => {
    const onChange = jest.fn()

    const value = 'test@example.com'
    const placeholder = 'Enter your email'
    const { getByDisplayValue } = render(
      <Input placeholder={placeholder} onChange={onChange} value={value} />,
    )
    expect(getByDisplayValue(value)).toBeTruthy()
  })

  it('Should fires onChange event', () => {
    const onChange = jest.fn()
    const placeholder = 'Enter your email'

    const { getByTestId } = render(
      <Input placeholder={placeholder} onChange={onChange} />,
    )
    const input = getByTestId('input-email')
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect(onChange).toHaveBeenCalled()
  })
})
