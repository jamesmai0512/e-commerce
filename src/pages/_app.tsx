import type { AppProps } from 'next/app'
import Head from 'next/head'
import './styles/reset.css'
import './styles/global.css'



const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>E Commerce</title>
        <meta
          name="description"
          content="E Commerce app"
          key="desc"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
