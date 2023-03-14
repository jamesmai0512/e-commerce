import React from 'react'
import { Meta, Story } from '@storybook/react'
import BoxInfo, { BoxInfoProps } from './'
import { ORDERSTEPS } from '../../../constants/common'

export default {
  title: 'Components/BoxInfo',
  component: BoxInfo,
} as Meta

const Template: Story<BoxInfoProps> = (args) => <BoxInfo {...args} />

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: ORDERSTEPS[1].icon,
  title: 'Title',
  description: 'Description',
}
