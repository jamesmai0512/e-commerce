import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Light = Template.bind({})
Light.args = {
  text: 'Light Button',
  background: 'light',
}

export const Dark = Template.bind({})
Dark.args = {
  text: 'Dark Button',
  background: 'dark',
}
