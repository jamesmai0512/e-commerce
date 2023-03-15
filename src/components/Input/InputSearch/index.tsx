import { ChangeEvent, memo } from 'react'

// Styles
import styles from '../Input.module.css'

// Icons
import SearchIcon from '@mui/icons-material/Search'

export interface InputSearchProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  position?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputSearch = ({
  position = '',
  onChange,
  handleFormSubmit,
}: InputSearchProps) => {
  const { search_input, search_btn, search_btn_icon } = styles
  return (
    <form
      data-test="search-form"
      className={`${styles.search_box} ${styles[position]}`}
      onSubmit={handleFormSubmit}
    >
      <input
        role="textbox"
        data-test="textbox"
        onChange={onChange}
        className={search_input}
        placeholder="Search"
      />
      <button type="submit" className={search_btn}>
        <SearchIcon className={search_btn_icon} />
      </button>
    </form>
  )
}

export default memo(InputSearch)
