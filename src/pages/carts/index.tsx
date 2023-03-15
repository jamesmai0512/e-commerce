import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Cart from '@/components/Cart'

// Styles
import styles from './Carts.module.css'
import { useCallback, useState } from 'react'

const {
  shopping_cart,
  shopping_cart_title,
  shopping_cart_info,
  shopping_cart_info_product,
  shopping_cart_list,
  shopping_cart_total,
  shopping_cart_total_content,
  shopping_cart_list_detail,
  shopping_cart_list_subtotal,
  shopping_cart_list_price,
  shopping_carts_list,
  none_product,
  text_alert_info,
  text_alert,
} = styles

export interface CartItem {
  id: string
  quantity: number
  productId: number
  price: number
}

interface Props {
  carts: CartItem[]
}

const Carts = ({ carts }: Props) => {
  const [cartItems, setCartItems] = useState(carts)

  const updateCartItemQuantity = useCallback(
    (cartItemId: string, newQuantity: number) => {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === cartItemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem,
      )
      setCartItems(updatedCartItems)
    },
    [cartItems],
  )

  const deleteCartItem = useCallback(
    (cartItemId: string) => {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== cartItemId,
      )
      setCartItems(updatedCartItems)
    },
    [cartItems],
  )

  const totalPrice = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * 85,
    0,
  )

  return (
    <Layout>
      {cartItems && cartItems.length ? (
        <div className={shopping_cart}>
          <h1 className={shopping_cart_title}>Your shopping cart</h1>

          <div className={shopping_cart_info}>
            <p className={shopping_cart_info_product}>Product</p>
            <p className="table_name">Quantity</p>
            <p className="table_name">Total</p>
          </div>
          <div className={shopping_cart_list}>
            {cartItems.map((cartItem) => (
              <Cart
                key={cartItem.id}
                productId={cartItem.productId}
                cartId={cartItem.id}
                quantity={cartItem.quantity}
                price={cartItem.price}
                updateCartItemQuantity={updateCartItemQuantity}
                deleteCartItem={deleteCartItem}
              />
            ))}
          </div>
          <div className={shopping_cart_total}>
            <div className={shopping_cart_total_content}>
              <div className={shopping_cart_list_detail}>
                <h3 className={shopping_cart_list_subtotal}>Subtotal</h3>
                <h2 className={shopping_cart_list_price}>£{totalPrice}</h2>
              </div>
              <p className={shopping_carts_list}>
                Taxes and shipping are calculated at checkout
              </p>
              <Button background="purple" text="Go to checkout" />
            </div>
          </div>
        </div>
      ) : (
        <div className={none_product}>
          <div className={text_alert_info}>
            <h1 className={text_alert}>There are no carts!!</h1>
          </div>
        </div>
      )}
    </Layout>
  )
}

export const getServerSideProps = async () => {
  try {
    const API = 'https://63f72caee40e087c9588cb02.mockapi.io/carts'
    const res = await fetch(API)
    const carts = await res.json()
    return {
      props: {
        carts,
      },
    }
  } catch (error) {
    return {
      props: {
        carts: [],
      },
    }
  }
}

export default Carts
