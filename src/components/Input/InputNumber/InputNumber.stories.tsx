import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import InputNumber, { InputNumberProps } from './'

export default {
  title: 'Components/InputNumber',
  component: InputNumber,
} as Meta

const Template: Story<InputNumberProps> = (args) => <InputNumber {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 1,
  handleDecrease: action('handleDecrease'),
  handleIncrease: action('handleIncrease'),
}

export const MaxValue = Template.bind({})
MaxValue.args = {
  value: 10,
  handleDecrease: action('handleDecrease'),
  handleIncrease: action('handleIncrease'),
}

export const MinValue = Template.bind({})
MinValue.args = {
  value: 0,
  handleDecrease: action('handleDecrease'),
  handleIncrease: action('handleIncrease'),
}
