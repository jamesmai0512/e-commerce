import { Meta, Story } from '@storybook/react'
import { imageRoute } from '../../../constants/common'
import ProductBannerTop, { ProductBannerTopProps } from './'

const bigChair = imageRoute('BigChair')
export default {
  title: 'Components/ProductBannerTop',
  component: ProductBannerTop,
  argTypes: {
    buttonTheme: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
} as Meta

const Template: Story<ProductBannerTopProps> = (args) => (
  <ProductBannerTop {...args} />
)

export const Default = Template.bind({})

Default.args = {
  title: 'Product Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, arcu eget hendrerit auctor, leo quam tristique sapien, vel blandit lacus felis sed eros.',
  buttonText: 'Buy Now',
  buttonTheme: 'light',
  imageUrl: bigChair,
}

export const WithoutButton = Template.bind({})
WithoutButton.args = {
  title: 'Product Title',
  buttonText: 'Buy Now',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, arcu eget hendrerit auctor, leo quam tristique sapien, vel blandit lacus felis sed eros.',
  imageUrl: bigChair,
}
