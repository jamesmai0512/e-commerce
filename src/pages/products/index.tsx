import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Product from '@/components/Product'
import LoadingIndicator from '@/components/LoadingIndicator'
import styles from './Product.module.css'
import { TProduct } from '@/constants/common'
import Layout from '@/components/Layout'

interface ProductProps {
  products: TProduct[]
}

const API = `https://63f72caee40e087c9588cb02.mockapi.io/products`

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Products = ({ products }: ProductProps) => {
  const router = useRouter()
  const querySearch = router.query.search
  const category = router.query.category
  const { product, none_product, text_alert_info, text_alert } = styles

  const { data, error } = useSWR(
    `${API}?search=${querySearch ? `${querySearch}` : ''}`,
    fetcher,
  )

  if (error) return { notFound: true }
  if (!products)
    return (
      <div>
        <LoadingIndicator />
      </div>
    )

  const filteredProducts = category
    ? products.filter((product: TProduct) =>
        product.category.includes(category as string),
      )
    : products

  return (
    <Layout>
      {filteredProducts && filteredProducts.length ? (
        <div className={product}>
          {filteredProducts.map((product: TProduct) => (
            <Product
              id={product.id}
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              imageSize="small"
            />
          ))}
        </div>
      ) : (
        <div className={none_product}>
          <div className={text_alert_info}>
            <h1 className={text_alert}>There are no products!!</h1>
          </div>
        </div>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  ProductProps
> = async () => {
  const products = await fetcher(API)
  return {
    props: { products },
  }
}

export default Products
