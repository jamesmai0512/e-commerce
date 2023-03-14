import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input, { InputProps } from './'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter your email',
  theme: 'dark',
}

export const Light = Template.bind({})
Light.args = {
  placeholder: 'Enter your email',
  theme: 'light',
}
