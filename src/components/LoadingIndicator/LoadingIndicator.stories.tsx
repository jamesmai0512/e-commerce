import React from 'react'
import { Meta, Story } from '@storybook/react/'

import LoadingIndicator from './'

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
} as Meta

const Template: Story = () => <LoadingIndicator />

export const Default = Template.bind({})
