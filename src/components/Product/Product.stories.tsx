import React from 'react'
import { Meta } from '@storybook/react'
import Product, { ProductProps } from './'

const mockProduct: ProductProps = {
  imageUrl:
    'https://raw.githubusercontent.com/jamesmai0512/image-ecommerce/main/images/Lamp.png',
  title: 'Mock Product',
  price: 9.99,
  imageSize: 'small',
}

export default {
  title: 'Components/Product',
  component: Product,
} as Meta

export const Default = () => <Product {...mockProduct} />
