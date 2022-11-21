import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import {
  AuthLayout,
  SendActivationEmail,
} from '@app/modules/Auth';
import { ROUTES, SESSION_STATUS } from '@app/constants';
import { useResendActivationEmailMutation } from '@app/graphql/types';
import { notification } from '@app/utils/notification';

const AuthIndex: NextPage = () => {
  const { data: session, status: sessionStatus } = useSession();

  const [resendActivationEmailMutation, { loading }] = useResendActivationEmailMutation();

  const handleOnResendEmail = () => {
    if (sessionStatus !== SESSION_STATUS.LOADING &&
      sessionStatus === SESSION_STATUS.AUTHENTICATED &&
      session?.email
    ) {
      return resendActivationEmailMutation({ variables: { email: session?.email } })
        .then(res => res.data?.resendActivationEmail)
        .then(res => {
          if (res?.errors) {
            return notification.error({ message: 'Failed to sent an activation email!' });
          }
          if (res?.success) {
            notification.success({
              message: 'Activiation email has been sent successfully!',
              onClose: () => Router.push(ROUTES.api.confirmRegistrationEmail + "?test=true&token=anytoken"), // TODO: this is temporary. User must be redirected from email verification.
            });
          }
        })
        .catch(err => notification.error({ message: err.message }));
    }
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
        title="Hello there!"
        subtitle=""
      >
        <SendActivationEmail
          onResend={handleOnResendEmail}
          loading={loading}
        />
      </AuthLayout>
    </>
  );
}

export default AuthIndex