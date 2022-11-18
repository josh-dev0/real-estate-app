import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import { RecoilRoot } from 'recoil';
import { AntdThemeConfig } from '../containers/AntdThemeConfig';
import { Preloader } from '@app/containers/Preloader';
import MyApolloProvider from '../graphql/apollo'

import '../styles/globals.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      <AntdThemeConfig>
        <SessionProvider session={session}>
          <MyApolloProvider>
            <RecoilRoot>
              <Preloader>
                <Component {...pageProps} />
              </Preloader>
            </RecoilRoot>
          </MyApolloProvider>
        </SessionProvider>
      </AntdThemeConfig>
    </ThemeProvider>
  )
}

export default MyApp
