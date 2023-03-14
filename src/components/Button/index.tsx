import { memo } from 'react'
// Styles
import styles from './Button.module.css'

export interface ButtonProps {
  text: string
  background: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ onClick, type, background, text }: ButtonProps) => {
  const { button, light, dark, purple } = styles

  return (
    <button
      type={type}
      data-testid="button-component"
      className={`${styles.button} ${styles[background]}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default memo(Button)
