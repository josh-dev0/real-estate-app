import type { NextPage } from 'next'
import Router from 'next/router';
import Head from 'next/head'
import { useEffect } from 'react';
import { getProviders, useSession, getSession, signIn, getCsrfToken } from "next-auth/react"
import type { LoginInput, RegisterInput } from '@app/types';
import { Login } from '@app/components';
import { AUTH_TYPE, IDENTITY } from '@app/constants';
import { notification } from '@app/utils/notification';

const AuthIndex: NextPage = () => {
  const { data: session, status } = useSession()
  const handleOnLogin = async (val: LoginInput) => {
    signIn('credentials', {
      ...val,
      type: AUTH_TYPE.LOGIN,
      identity: IDENTITY.INDIVIDUAL,
      redirect: false,
    })
      .then(res => {
        if (res?.ok) {
          Router.push('/');
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
      identity: IDENTITY.INDIVIDUAL,
      redirect: false,
    })
      .then(res => {
        if (res?.ok) {
          Router.push(`/${IDENTITY.INDIVIDUAL}/auth/information1`);
        } else {
          showErrorNotification();
        }
      });
  }
  useEffect(() => {
    return;
    getProviders().then(console.log);
    getCsrfToken().then((csrfToken) => {
      console.log('[csrfToken]', csrfToken);
      signIn('credentials',
        {
          email: 'test.com',
          password: 'asdfasdf',
          callbackUrl: `${window.location.origin}/account_page`,
          redirect: false,
        }
      )
        .then(console.log)
    })
  }, []);

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
      <Login
        role={IDENTITY.INDIVIDUAL}
        onLogin={handleOnLogin}
        onGoogleLogin={handleGoogleLogin}
        onFacebookLogin={handleFacebookLogin}
        onRegister={handleOnRegister}
      />
    </>
  );
}

export default AuthIndex