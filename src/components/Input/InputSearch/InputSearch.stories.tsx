import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import InputSearch, { InputSearchProps } from './'

export default {
  title: 'Components/InputSearch',
  component: InputSearch,
} as Meta

const Template: Story<InputSearchProps> = (args) => <InputSearch {...args} />

export const Default = Template.bind({})
Default.args = {
  position: 'left',
  handleFormSubmit: action('form submitted'),
  onChange: action('input changed'),
}
