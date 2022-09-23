import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import MyApolloProvider from '../graphql/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return <MyApolloProvider><Component {...pageProps} /></MyApolloProvider>
}

export default MyApp
