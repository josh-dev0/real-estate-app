import type { NextPage } from 'next'
import Head from 'next/head'
import {
  AuthLayout,
  IndividualInformationForm,
} from '@app/components';

const AuthIndex: NextPage = () => {
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
        <IndividualInformationForm />
      </AuthLayout>
    </>
  );
}

export default AuthIndex