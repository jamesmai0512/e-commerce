import type { AppProps } from 'next/app'
import Head from 'next/head'
import './styles/reset.css'
import './styles/global.css'



const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>E Commerce</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
