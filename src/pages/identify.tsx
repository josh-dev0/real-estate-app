import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router';
import Head from 'next/head'
import { useEffect, useMemo } from 'react';
import { useSession, signIn } from "next-auth/react"
import type { LoginInput, RegisterInput } from '@app/types';
import { AuthLayout, LoginForm, LoginWithSocial, RegisterForm } from '@app/components';
import { AUTH_TYPE, IDENTITY, QUERY, ROUTES } from '@app/constants';
import { notification } from '@app/utils/notification';

const AuthIndex: NextPage = () => {
  const router = useRouter();
  // role can be one of `individual` or 'professional', default `individual`.
  const role = useMemo(() =>
    router.query?.role === IDENTITY.PROFESSIONAL
      ? IDENTITY.PROFESSIONAL
      : IDENTITY.INDIVIDUAL,
    [router.query]);

  const { data: session } = useSession()

  const handleOnLogin = async (val: LoginInput) => {
    signIn('credentials', {
      ...val,
      type: AUTH_TYPE.LOGIN,
      identity: role,
      redirect: false,
    })
      .then(res => {
        if (res?.ok) {
          Router.push(`/?${QUERY.justLoggedIn}=1`);
        } else {
          showErrorNotification();
        }
      });
  }

  const showErrorNotification = () => {
    notification.error({
      description: <span>Either username or password is incorrect.<br /> Please try again!!</span>,
    });
  }

  const handleGoogleLogin = () => { }
  const handleFacebookLogin = () => { }

  const handleOnRegister = async (val: RegisterInput) => {
    signIn('credentials', {
      ...val,
      type: AUTH_TYPE.REGISTER,
      identity: role,
      redirect: false,
    })
      .then(res => {
        if (res?.ok) {
          Router.push(`/${ROUTES.info1}`);
        } else {
          showErrorNotification();
        }
      });
  }

  useEffect(() => {
    console.log('session', session);
  }, [session]);

  return (
    <>
      <Head>
        <title>Home | Cozzinest</title>
        <meta name="description" content="Home page of Cozzinest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout
        columns={2}
        title="Hello there!"
        left={
          <div>
            <LoginForm
              onFinish={handleOnLogin}
            />
            <LoginWithSocial className="mt-[2.813rem]"
              onGoogleLogin={handleGoogleLogin}
              onFacebookLogin={handleFacebookLogin}
            />
          </div>
        }
        right={<RegisterForm
          onFinish={handleOnRegister}
        />}
      />
    </>
  );
}

export default AuthIndex