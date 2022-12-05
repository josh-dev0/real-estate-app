import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router';
import Head from 'next/head'
import {
  AuthLayout,
  ResetPasswordForm
} from '@app/modules/Auth';
import { usePasswordResetMutation } from '@app/graphql/types';

const ResetPassword: NextPage = () => {
  const router = useRouter();
  const [passwordResetMutation, { loading }] = usePasswordResetMutation();
  const handleOnSubmit = (values: any) => {
    console.log('reset.password.submitted', values);
    return passwordResetMutation({
      variables: {
        token: router.query.token as string,
        new_password1: values.password,
        new_password2: values.cpassword,
      }
    })
      .then(res => res.data?.passwordReset)
      .then(res => {
        // process data
        if (res?.errors) {

        } else {

        }
        Router.push('/reset-password-success');
      })
      .catch(err => {
        console.log('reset.password', err);
        Router.push('/reset-password-success');
      });
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