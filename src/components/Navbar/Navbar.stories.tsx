import React from 'react'
import Navbar from './'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta

const Template: Story = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
