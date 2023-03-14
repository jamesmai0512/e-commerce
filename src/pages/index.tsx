import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

// Component
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Product from '@/components/Product'
import ProductBanner from '@/components/Product/ProductBannerTop'

// Constant
import {
  iconRoute,
  imageRoute,
  PRODUCTBANNER,
  PRODUCTS,
} from '@/constants/common'

// Styles
import styles from './styles/index.module.css'

// Icons
const DecorImg = imageRoute('Decor')
const Sofa = iconRoute('Sofa')

const HomePage = () => {
  const {
    homepage_content,
    popular_products,
    product_title,
    product_item,
    product_button,
    square_box,
    product_banner,
    product_banner_content,
    product_banner_title,
    product_banner_description,
    product_banner_button,
    product_banner_image,
  } = styles
  const router = useRouter()
  const Chair = imageRoute('Chair')

  const handleViewCollection = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault
    router.push(`/products`)
  }

  return (
    <Layout>
      <div className={homepage_content}>
        <ProductBanner
          title={PRODUCTBANNER.title}
          buttonTheme="dark"
          buttonText={PRODUCTBANNER.buttonText}
          description={PRODUCTBANNER.description}
          imageUrl={Chair}
          onButtonClick={handleViewCollection}
        />

        <h2 className={product_title}>New ceramics</h2>
        <div className={product_item}>
          {PRODUCTS.slice(0, 4).map((i) => (
            <Product
              key={i.id}
              id={i.id}
              imageUrl={i.imageUrl}
              title={i.title}
              price={i.price}
              imageSize="small"
            />
          ))}
        </div>
        <div className={product_button}>
          <Button
            onClick={handleViewCollection}
            background="light"
            text="View collection"
          />
        </div>

        <div className={popular_products}>
          <h2 className={product_title}>Our popular products</h2>
          <div className={product_item}>
            <Product
              id={3}
              imageUrl={Sofa}
              title="The Poplar suede sofa"
              price={980}
              imageSize="large"
            />

            {PRODUCTS.slice(0, 2).map((i) => (
              <Product
                id={i.id}
                key={i.id}
                imageUrl={i.imageUrl}
                title={i.title}
                price={i.price}
                imageSize="small"
              />
            ))}
          </div>

          <div className={product_button}>
            <Button
              onClick={handleViewCollection}
              background="light"
              text="View collection"
            />
          </div>
        </div>
      </div>
      <div className={square_box}></div>
      <div className={product_banner}>
        <div className={product_banner_content}>
          <div>
            <h2 className={product_banner_title}>
              From a studio in London to a global brand with
              <br />
              over 400 outlets
            </h2>
            <p className={product_banner_description}>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
              <br />
              <br />
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>

          <div className={product_banner_button}>
            <Button
              onClick={handleViewCollection}
              background="light"
              text={'Get in touch'}
            />
          </div>
        </div>
        <div className={product_banner_image}>
          <Image
            src={DecorImg}
            alt="product-decor"
            loading="eager"
            width={720}
            height={603}
          />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
