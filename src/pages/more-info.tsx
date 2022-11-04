import type { NextPage } from 'next'
import Router from 'next/router';
import Head from 'next/head'
import {
  AuthLayout,
  InformationForm2
} from '@app/components';
// import { getCountryList } from '@app/utils/demo';
// import type { ICountry } from '@app/types';

const AuthIndex: NextPage = () => {
  const handleOnSubmit = (values: any) => {
    Router.push('/');
  }
  const handleOnSkip = () => {
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
        title="Your account has been created"
        subtitle="We just need a bit more information before we can get you started if that’s ok with you :-)"
      >
        <InformationForm2
          onFinish={handleOnSubmit}
          onSkip={handleOnSkip}
        />
      </AuthLayout>
    </>
  );
}

export default AuthIndex