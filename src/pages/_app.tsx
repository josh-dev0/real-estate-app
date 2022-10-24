import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { AntdThemeConfig } from '../containers/AntdThemeConfig';
import MyApolloProvider from '../graphql/apollo'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      <AntdThemeConfig>
        <MyApolloProvider>
          <Component {...pageProps} />
        </MyApolloProvider>
      </AntdThemeConfig>
    </ThemeProvider>
  )
}

export default MyApp
