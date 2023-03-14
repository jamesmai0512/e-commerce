import Link from 'next/link'

// Styles
import styles from './styles/404.module.css'

const Custom404 = () => {
  const { button_return_home, text_center, text_center_error, text_not_found } =
    styles
  return (
    <div className="flex-container">
      <div className={text_center}>
        <h1 className={text_center_error}>404</h1>
        <h3 className={text_not_found}>PAGE NOT FOUND</h3>
        <button className={button_return_home} type="button" name="button">
          Return To Home
        </button>
      </div>
    </div>
  )
}

export default Custom404
