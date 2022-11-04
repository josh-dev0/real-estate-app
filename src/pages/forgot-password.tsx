import type { NextPage } from 'next'
import Router from 'next/router';
import Head from 'next/head'
import {
  AuthLayout,
  ForgotPasswordForm
} from '@app/components';

const AuthIndex: NextPage = () => {
  const handleOnSubmit = () => {
    // Router.push('/reset-password');
    console.log('forgot.password.submitted');
  }

  return (
    <>
      <Head>
        <title>More Information | Cozzinest</title>
        <meta name="description" content="Please provide more information. You're closer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout
        columns={1}
        title="Help!"
      >
        <ForgotPasswordForm
          onFinish={handleOnSubmit}
        />
      </AuthLayout>
    </>
  );
}

export default AuthIndex