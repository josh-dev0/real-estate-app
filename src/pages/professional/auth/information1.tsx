import type { NextPage } from 'next'
import Head from 'next/head'
import {
  AuthLayout,
  ProfessionalInformationForm,
} from '@app/components';
import { fakeInformationNext } from '@app/utils/demo';
import { IDENTITY } from '@app/constants';

const AuthIndex: NextPage = () => {
  const handleOnNext = (values: any) => {
    fakeInformationNext(values, IDENTITY.PROFESSIONAL);
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
        <ProfessionalInformationForm
          onFinish={handleOnNext}
        />
      </AuthLayout>
    </>
  );
}

export default AuthIndex