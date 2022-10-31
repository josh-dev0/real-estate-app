import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Information2
} from '@app/components';

const AuthIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>More Information | Cozzinest</title>
        <meta name="description" content="Please provide more information. You're closer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Information2 />
    </>
  );
}

export default AuthIndex