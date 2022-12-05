import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import { RecoilRoot } from 'recoil';
import { RecoilDevTools } from 'recoil-gear'
// import { EnvironmentKey, RecoilRelayEnvironment } from 'recoil-relay';
import { AntdThemeConfig } from '../containers/AntdThemeConfig';
import { Preloader } from '@app/containers/Preloader';
import MyApolloProvider from '../graphql/apollo'

import '../styles/globals.scss'

// const environmentKey = new EnvironmentKey('cozzinest-app');
// const environment = {};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      <AntdThemeConfig>
        <SessionProvider session={session}>
          <RecoilRoot>
            {/* <RecoilRelayEnvironment
              environment={environment}
              environmentKey={environmentKey}
            > */}
            <MyApolloProvider>
              <Preloader>
                <RecoilDevTools />
                <Component {...pageProps} />
              </Preloader>
            </MyApolloProvider>
            {/* </RecoilRelayEnvironment> */}
          </RecoilRoot>
        </SessionProvider>
      </AntdThemeConfig>
    </ThemeProvider>
  )
}

export default MyApp
