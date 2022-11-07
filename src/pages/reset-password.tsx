import type { NextPage } from 'next'
import Router from 'next/router';
import Head from 'next/head'
import {
  AuthLayout,
  ResetPasswordForm
} from '@app/components';

const ResetPassword: NextPage = () => {
  const handleOnSubmit = () => {
    console.log('reset.password.submitted');
    Router.push('/');
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
        <ResetPasswordForm
          onFinish={handleOnSubmit}
        />
      </AuthLayout>
    </>
  );
}

export default ResetPassword