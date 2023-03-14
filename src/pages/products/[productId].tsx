import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

// Component
import Button from '@/components/Button'
import InputNumber from '@/components/Input/InputNumber'
import Input from '@/components/Input'
import Layout from '@/components/Layout'

// Types
import { imageRoute, ORDERSTEPS, TProduct } from '@/constants/common'

// Image
const BigChair = imageRoute('BigChair')

// Styles
import styles from './Product.module.css'
import BoxInfo from '@/components/Box/BoxInfo'
import LoadingIndicator from '@/components/LoadingIndicator'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Props {
  product: TProduct
}

const ProductDetailPage = ({ product }: Props) => {
  const {
    product_detail,
    product_detail_content,
    product_detail_content_title,
    product_detail_content_price,
    product_detail_content_description,
    product_detail_content_description_content,
    product_detail_content_description_list_content,
    product_detail_content_dimensions,
    product_detail_content_dimensions_size,
    cart_function_item,
    input_amount,
    introduce_brand,
    order_step,
    email_form,
    form_text,
    form_text_title,
    form_text_description,
    form_email_submit,
  } = styles
  const router = useRouter()
  const [value, setValue] = useState(1)

  const addProductToCart = async (
    newValue: number,
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    const API = 'https://63f72caee40e087c9588cb02.mockapi.io/carts'
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        productId: product.id,
        quantity: newValue,
      }),
    })

    if (!response.ok) {
      throw new Error('Unable to add product to cart')
    }

    return await response.json()
  }

  const handleIncrease = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      if (value < 10) {
        const newValue = value + 1
        setValue(newValue)
      }
    },
    [value],
  )

  const handleDecrease = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()

      if (value > 0) {
        const newValue = value - 1
        setValue(newValue)
      }
    },
    [value],
  )

  if (router.isFallback) {
    return <LoadingIndicator />
  }

  return (
    <Layout>
      <div className={product_detail}>
        <div>
          <Image
            src={BigChair}
            alt="product-image"
            loading="eager"
            width={721}
            height={759}
          />
        </div>
        <div className={product_detail_content}>
          <h1 className={product_detail_content_title}>{product.title}</h1>
          <h3 className={product_detail_content_price}>£{product.price}</h3>
          <h4 className={product_detail_content_description}>Description</h4>
          <div className={product_detail_content_description_content}>
            <p>
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className={product_detail_content_description_list_content}>
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>
          <h4>Dimensions</h4>
          <div className={product_detail_content_dimensions}>
            <div className={product_detail_content_dimensions_size}>
              Height <br />
              110cm
            </div>
            <div className={product_detail_content_dimensions_size}>
              Width <br />
              75cm
            </div>
            <div className={product_detail_content_dimensions_size}>
              Depth <br />
              50px
            </div>
          </div>
          <form
            onSubmit={(event) => addProductToCart(value, event)}
            className={cart_function_item}
          >
            <div className={input_amount}>
              <h4>Amount</h4>
              <InputNumber
                value={value}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
              />
            </div>

            <Button type="submit" background="purple" text="Add to cart" />
          </form>
        </div>
      </div>
      <h1 className={introduce_brand}>What makes our brand different</h1>
      <div className={order_step}>
        {ORDERSTEPS.map((i) => (
          <BoxInfo
            key={i.id}
            icon={i.icon}
            title={i.title}
            description={i.description}
          />
        ))}
      </div>

      <div className={email_form}>
        <div className={form_text}>
          <h1 className={form_text_title}>
            Join the club and get the benefits
          </h1>
          <p className={form_text_description}>
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <form className={form_email_submit}>
            <Input theme="light" placeholder="your@email.com" />
            <Button background="purple" text="Sign Up" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  const API = 'https://63f72caee40e087c9588cb02.mockapi.io'

  const product = await fetcher(`${API}/products/${params.productId}`)

  return {
    props: {
      product,
    },
  }
}

export default ProductDetailPage
