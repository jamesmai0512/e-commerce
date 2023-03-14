import { StaticImageData } from 'next/image'

export const imageRoute = (name: string) =>
  `https://raw.githubusercontent.com/jamesmai0512/image-ecommerce/main/images/${name}.png`

export const iconRoute = (icon: string) =>
  `https://raw.githubusercontent.com/jamesmai0512/image-ecommerce/main/i%1Dcons/${icon}.png`

// Icons
const Card = iconRoute('Card')
const Bus = iconRoute('Bus')
const CheckMart = iconRoute('CheckMart')
const Sprout = iconRoute('Sprout')
const SmallChair = iconRoute('SmallChair')

// Images
const Bottle = imageRoute('Bottle')
const Cup = imageRoute('Cup')
const Lamp = imageRoute('Lamp')

type Navbar = {
  label: string
  query: string
}

export type TProduct = {
  id: number
  imageUrl: string
  title: string
  price: number
  category: string
  type?: string
}

type ProductBanner = {
  title: string
  buttonText: string
  description: string
}

export const NAVBAR: Navbar[] = [
  { label: 'Plant Pots', query: 'PlantPots' },
  { label: 'Ceramics', query: 'Ceramics' },
  { label: 'Tables', query: 'Table' },
  { label: 'Chairs', query: 'Chair' },
  { label: 'Crockery', query: 'Crockery' },
  { label: 'Tableware', query: 'Tableware' },
  { label: 'Cutlery', query: 'Cutlery' },
]

export const PRODUCTS: TProduct[] = [
  {
    id: 0,
    imageUrl: Lamp,
    title: 'The Dandy Lamp',
    price: 399,
    category: 'Table',
  },
  {
    id: 1,
    imageUrl: SmallChair,
    title: 'The Dandy chair',
    price: 250,
    category: 'Table',
  },
  {
    id: 2,
    imageUrl: Bottle,
    title: 'Rustic Vase Set',
    price: 165,
    category: 'Table',
  },
  {
    id: 3,
    imageUrl: Cup,
    title: 'The Silky Vase',
    price: 125,
    category: 'Table',
  },
  {
    id: 4,
    imageUrl: Lamp,
    title: 'The Lucy Lamp',
    price: 399,
    category: 'Table',
  },
]

export const PRODUCTBANNER: ProductBanner = {
  title: 'The furniture brand for the future, with timeless designs',
  buttonText: 'View collection',
  description:
    'A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.',
}

export const MENU = [
  'New arrivals',
  'Best sellers',
  'Recently viewed',
  'Popular this week',
  'All products',
]

export const CATEGORIES = [
  'Crockery',
  'Furniture',
  'Homeware',
  'Plant pots',
  'Chairs',
  'Crockerare',
]

export const OURCOMPANY = [
  'About us',
  'Vacancies',
  'Contact us',
  'Privacy',
  'Returns policy',
]

export const DIMENSIONS = [
  { dimension: 'Height', size: 110 },
  { dimension: 'Width', size: 75 },
  { dimension: 'Depth', size: 50 },
]

export const ORDERSTEPS = [
  {
    id: 1,
    icon: Bus,
    title: 'Next day as standard',
    description: 'Order before 3pm and get your order the next day as standard',
  },
  {
    id: 2,
    icon: CheckMart,
    title: 'Made by true artisans',
    description:
      'Handmade crafted goods made with real passion and craft man ship',
  },
  {
    id: 3,
    icon: Card,

    title: 'Unbeatable prices',
    description:
      'For our materials and quality you won’t find better prices anywhere',
  },
  {
    id: 4,
    icon: Sprout,
    title: 'Recycled packaging prices',
    description:
      'We use 100% recycled packaging to ensure our footprint is manageable',
  },
]
