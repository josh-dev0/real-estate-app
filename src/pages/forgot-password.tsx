import type { NextPage } from 'next'
import Router from 'next/router';
import Head from 'next/head'
import {
  AuthLayout,
  ForgotPasswordForm
} from '@app/modules/Auth';
import { notification } from '@app/utils/notification';
import { useSendPasswordResetEmailMutation } from '@app/graphql/types';

const AuthIndex: NextPage = () => {
  const [sendPasswordResetEmailMutation, { loading }] = useSendPasswordResetEmailMutation();
  const handleOnSubmit = (values: any) => {
    // Router.push('/reset-password');
    return sendPasswordResetEmailMutation({ variables: { email: values.email } })
      .then(res => res.data?.sendPasswordResetEmail)
      .then(res => {
        if (res?.success) {
          notification.success({ message: 'Email has been sent successfully!' });
          Router.push('/emails/reset-password.html')
        } else {
          notification.error({ message: 'Failed to send an email' });
        }
      })
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