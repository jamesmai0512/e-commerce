import { Story } from '@storybook/react'
import React from 'react'
import NavbarProduct from './'

export default {
  title: 'Components/NavbarProduct',
  component: NavbarProduct,
}

const Template: Story = (args) => <NavbarProduct {...args} />

export const Default = Template.bind({})
Default.args = {}
