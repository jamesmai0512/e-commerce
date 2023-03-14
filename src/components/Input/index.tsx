import { ChangeEvent, memo } from 'react'

// Styles
import styles from './Input.module.css'

export interface InputProps {
  placeholder: string
  theme?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, theme = '', value, onChange }: InputProps) => {
  return (
    <input
      data-testid="input-email"
      type="email"
      value={value}
      onChange={onChange}
      className={`${styles.input_email} ${styles[theme]}`}
      placeholder={placeholder}
    />
  )
}

export default memo(Input)
