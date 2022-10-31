import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Login
} from '@app/components';

const AuthIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Cozzinest</title>
        <meta name="description" content="Home page of Cozzinest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}

export default AuthIndex