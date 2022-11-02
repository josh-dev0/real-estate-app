import type { NextPage } from 'next'
import Head from 'next/head'
import type { LoginInput, RegisterInput } from '@app/types';
import { Login } from '@app/components';
import { IDENTITY } from '@app/constants';
import { notification } from '@app/utils/notification';

const AuthIndex: NextPage = () => {
  const handleOnLogin = async (val: LoginInput) => {
    console.log('submitting login...', val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = Math.random() > 0.5;
        notification.error({
          description: <span>Either username or password is incorrect.<br /> Please try again!!</span>,
        });
        resolve(result);
      }, 500);
    });
  }
  const handleGoogleLogin = () => { }
  const handleFacebookLogin = () => { }
  const handleOnRegister = async (val: RegisterInput) => {
    console.log('submitting register...', val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = Math.random() > 0.5;
        notification.error({
          description: <span>Either username or password is incorrect.<br /> Please try again!!</span>,
        });
        resolve(result);
      }, 500);
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