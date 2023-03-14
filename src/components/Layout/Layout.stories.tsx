import React from 'react'
import { Story, Meta } from '@storybook/react/'
import Layout, { LayoutProps } from './'

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <div>
      <h1>Example content</h1>
      <p>This is some example content.</p>
    </div>
  ),
}
