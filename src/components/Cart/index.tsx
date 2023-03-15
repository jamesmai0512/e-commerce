import { memo, useCallback, useState } from 'react'

// Styles
import styles from './Cart.module.css'
import Image from 'next/image'
import InputNumber from '../Input/InputNumber'
import { useRouter } from 'next/router'

export interface CartProps {
  cartId: string
  productId: number
  quantity: number
  price: number
  updateCartItemQuantity: (cartItemId: string, newQuantity: number) => void
  deleteCartItem: (cartItemId: string) => void
}

const API = 'https://63f72caee40e087c9588cb02.mockapi.io/carts'

const Cart = ({
  quantity,
  cartId,
  productId,
  price,
  updateCartItemQuantity,
  deleteCartItem,
}: CartProps) => {
  const [value, setValue] = useState(quantity)
  const router = useRouter()
  // Image
  const cartImageUrl =
    'https://raw.githubusercontent.com/jamesmai0512/image-ecommerce/main/images/CartItem.png'

  const {
    cart_layout,
    cart_layout_info,
    cart_layout_info_product,
    cart_layout_info_product_title,
    cart_layout_info_product_description,
    cart_layout_info_product_price,
    cart_layout_info_quantity,
    cart_layout_info_product_price_total,
  } = styles

  const updateShoppingCart = useCallback(
    async (newQuantityCart: number) => {
      updateCartItemQuantity(cartId, newQuantityCart)
      const response = await fetch(`${API}/${cartId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity: newQuantityCart,
          productId: productId,
          id: cartId,
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to update shopping cart')
      }

      return await response.json()
    },
    [cartId, productId],
  )

  const deleteCart = useCallback(async () => {
    const response = await fetch(`${API}/${cartId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    deleteCartItem(cartId)
    return data
  }, [cartId])

  const handleIncrease = useCallback(() => {
    if (value < 10) {
      const newValue = value + 1
      setValue(newValue)
      updateShoppingCart(newValue)
    }
  }, [value, updateShoppingCart])

  const handleDecrease = useCallback(async () => {
    const newValue = value - 1
    if (newValue === 0) {
      if (confirm('Are you sure you want to delete?')) {
        await deleteCart()
        router.push(`/carts`)
      }
    } else {
      setValue(newValue)
      updateShoppingCart(newValue)
    }
  }, [value, updateShoppingCart, deleteCart])

  return (
    <div className={cart_layout}>
      <div className={cart_layout_info}>
        <Image
          src={cartImageUrl}
          alt="product-image"
          width={109}
          height={134}
          loading="eager"
        />
        <div className={cart_layout_info_product}>
          <h2
            data-testid="cart-title"
            className={cart_layout_info_product_title}
          >
            Graystone vase
          </h2>
          <p className={cart_layout_info_product_description}>
            A timeless ceramic vase with a tri color grey glaze.
          </p>
          <h3
            data-testid="cart-price"
            className={cart_layout_info_product_price}
          >
            £{price}
          </h3>
        </div>
      </div>
      <div className={cart_layout_info_quantity}>
        <InputNumber
          value={value}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </div>
      <h3 className={cart_layout_info_product_price_total}>£{value * price}</h3>
    </div>
  )
}

export default memo(Cart)
