import { fireEvent, getByText, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InputNumber from '../'

describe('InputNumber', () => {
  const handleDecreaseMock = jest.fn()
  const handleIncreaseMock = jest.fn()

  afterEach(() => {
    handleDecreaseMock.mockClear()
    handleIncreaseMock.mockClear()
  })

  it('should render with a default value of 0', () => {
    const { getByTestId } = render(
      <InputNumber
        value={0}
        handleDecrease={handleDecreaseMock}
        handleIncrease={handleIncreaseMock}
      />,
    )

    expect(getByTestId('cart-input-number')).toBeTruthy()
  })

  it('should increase the value by 1 when the plus button is clicked', () => {
    const { getByText } = render(
      <InputNumber
        value={0}
        handleDecrease={handleDecreaseMock}
        handleIncrease={handleIncreaseMock}
      />,
    )

    const plusButton = getByText('+')
    fireEvent.click(plusButton)

    expect(handleIncreaseMock).toBeCalled()
  })

  it('should decrease the value by 1 when the minus button is clicked', () => {
    const { getByText } = render(
      <InputNumber
        value={2}
        handleDecrease={handleDecreaseMock}
        handleIncrease={handleIncreaseMock}
      />,
    )

    const minusButton = getByText('-')
    fireEvent.click(minusButton)

    expect(handleDecreaseMock).toBeCalled()
  })

  it('should not decrease the value below the minimum value of 0', () => {
    const { getByText, findByDisplayValue } = render(
      <InputNumber
        value={0}
        handleDecrease={handleDecreaseMock}
        handleIncrease={handleIncreaseMock}
      />,
    )

    const minusButton = getByText('-')
    fireEvent.click(minusButton)

    expect(findByDisplayValue('0')).toBeTruthy()
  })

  it('should not increase the value above the maximum value of 10', () => {
    const { getByText, findByDisplayValue } = render(
      <InputNumber
        value={10}
        handleDecrease={handleDecreaseMock}
        handleIncrease={handleIncreaseMock}
      />,
    )

    const plusButton = getByText('+')
    fireEvent.click(plusButton)

    expect(findByDisplayValue('10')).toBeTruthy()
  })
})
