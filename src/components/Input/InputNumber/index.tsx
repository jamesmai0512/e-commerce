import { ChangeEvent, memo } from 'react'

// Styles
import styles from '../Input.module.css'

export interface InputNumberProps {
  value?: number
  handleDecrease: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  handleIncrease: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}

const InputNumber = ({
  value,
  handleDecrease,
  handleIncrease,
}: InputNumberProps) => {
  const {
    input_number_amount,
    button_control_left,
    input_number,
    button_control_right,
  } = styles
  return (
    <div className={input_number_amount}>
      <button
        data-testid="button-control-left"
        onClick={handleDecrease}
        className={button_control_left}
      >
        -
      </button>
      <input
        data-testid="cart-input-number"
        min={0}
        max={10}
        readOnly
        className={input_number}
        type="number"
        value={value}
        step="1"
      />
      <button
        data-testid="button-control-right"
        onClick={handleIncrease}
        className={button_control_right}
      >
        +
      </button>
    </div>
  )
}

export default memo(InputNumber)
