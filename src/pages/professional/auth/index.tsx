import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn } from 'next-auth/react';
import Router from 'next/router';
import type { LoginInput, RegisterInput } from '@app/types';
import { Login } from '@app/components';
import { AUTH_TYPE, IDENTITY } from '@app/constants';
import { notification } from '@app/utils/notification';

const AuthIndex: NextPage = () => {
  const handleOnLogin = async (val: LoginInput) => {
    signIn('credentials', {
      ...val,
      type: AUTH_TYPE.LOGIN,
      identity: IDENTITY.PROFESSIONAL,
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
      identity: IDENTITY.PROFESSIONAL,
      redirect: false,
    })
      .then(res => {
        if (res?.ok) {
          Router.push(`/${IDENTITY.PROFESSIONAL}/auth/information1`);
        } else {
          showErrorNotification();
        }
      });
  }
  return (
    <>
      <Head>
        <title>Home | Cozzinest</title>
        <meta name="description" content="Home page of Cozzinest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login
        role={IDENTITY.PROFESSIONAL}
        onLogin={handleOnLogin}
        onGoogleLogin={handleGoogleLogin}
        onFacebookLogin={handleFacebookLogin}
        onRegister={handleOnRegister}
      />
    </>
  );
}

export default AuthIndex