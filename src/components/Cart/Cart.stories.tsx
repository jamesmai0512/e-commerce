import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import Cart, { CartProps } from './'

export default {
  title: 'Components/Cart',
  component: Cart,
} as Meta

const Template: Story<CartProps> = (args) => {
  const [quantity, setQuantity] = useState(args.quantity)

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity)
  }

  return <Cart {...args} quantity={quantity} />
}

export const Default = Template.bind({})
Default.args = {
  cartId: '123',
  productId: 456,
  quantity: 1,
}
