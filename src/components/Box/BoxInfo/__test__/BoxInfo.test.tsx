import { render } from '@testing-library/react'
import { StaticImageData } from 'next/image'
import BoxInfo from '../'

describe('BoxInfo component', () => {
  const mockIcon: StaticImageData = {
    src: 'https://raw.githubusercontent.com/jamesmai0512/image-ecommerce/main/i%1Dcons/ShoppingCart.png',
    height: 100,
    width: 100,
  }

  const BoxInfoProps = {
    icon: mockIcon,
    title: 'Test Title',
    description: 'Test description',
  }

  it('should render correctly', () => {
    const component = render(<BoxInfo {...BoxInfoProps} />)
    expect(component).toMatchSnapshot()
  })
})
