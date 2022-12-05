import type { NextPage } from 'next'
import Head from 'next/head'
import {
  AuthLayout,
  ResetPasswordSuccess,
} from '@app/modules/Auth';


const ResetPasswordSuccessPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Password Reset Success | Cozzinest</title>
        <meta name="description" content="Please provide more information. You're closer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout
        columns={1}
        title="Awesome!"
        subtitle=""
      >
        <ResetPasswordSuccess />
      </AuthLayout>
    </>
  );
}

export default ResetPasswordSuccessPage