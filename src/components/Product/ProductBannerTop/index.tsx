import Image, { StaticImageData } from 'next/image'
import { memo } from 'react'

// Components
import Button from '../../Button'

// Styles
import styles from './ProductBannerTop.module.css'

// Types
export type ProductBannerTopProps = {
  title: string
  buttonTheme: string
  buttonText: string
  description: string
  imageUrl: string
  onButtonClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}

const ProductBannerTop = ({
  title,
  buttonTheme,
  buttonText,
  description,
  imageUrl,
  onButtonClick,
}: ProductBannerTopProps) => {
  const {
    product_banner,
    product_banner_content,
    product_banner_title,
    product_banner_description,
  } = styles
  return (
    <div className={product_banner}>
      <div className={product_banner_content}>
        <div>
          <h2 className={product_banner_title}>{title}</h2>
          <Button
            onClick={onButtonClick}
            background={buttonTheme}
            text={buttonText}
          />
        </div>

        <p className={product_banner_description}>{description}</p>
      </div>
      <div className="product_banner_image">
        <Image
          src={imageUrl}
          alt="product-banner"
          loading="eager"
          width={520}
          height={584}
        />
      </div>
    </div>
  )
}

export default memo(ProductBannerTop)
