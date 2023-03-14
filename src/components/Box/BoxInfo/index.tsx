import { memo } from 'react'
import Image, { StaticImageData } from 'next/image'

// Styles
import styles from './Box.module.css'

export interface BoxInfoProps {
  icon?: StaticImageData | string
  title: string
  description: string
}
const BoxInfo = ({ icon = '', title, description }: BoxInfoProps) => {
  const { box_info_title, box_info_description } = styles
  return (
    <div className={styles.box_info}>
      <Image src={icon} alt="box-icon" width={24} height={24} loading="eager" />
      <h1 data-testid="box-title" className={box_info_title}>
        {title}
      </h1>
      <p className={box_info_description}>{description}</p>
    </div>
  )
}

export default memo(BoxInfo)
