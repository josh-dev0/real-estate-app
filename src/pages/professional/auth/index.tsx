import type { NextPage } from 'next'
import Head from 'next/head'
import type { LoginInput, RegisterInput } from '@app/types';
import { Login } from '@app/components';
import { IDENTITY } from '@app/constants';
import { fakeLogin } from '@app/utils/demo';

const AuthIndex: NextPage = () => {
  const handleOnLogin = async (val: LoginInput) => {
    fakeLogin(val, IDENTITY.PROFESSIONAL);
  }
  const handleGoogleLogin = () => { }
  const handleFacebookLogin = () => { }
  const handleOnRegister = async (val: RegisterInput) => {
    fakeLogin(val, IDENTITY.PROFESSIONAL);
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