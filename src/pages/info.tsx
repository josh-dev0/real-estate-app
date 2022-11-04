import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import {
  AuthLayout,
  IndividualInformationForm,
  ProfessionalInformationForm,
} from '@app/components';
import { IDENTITY, ROUTES } from '@app/constants';

const AuthIndex: NextPage = () => {
  const { data: session } = useSession();

  const handleOnNext = (values: any) => {
    Router.push(`/${ROUTES.info2}`);
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
        {
          session?.user.role === IDENTITY.INDIVIDUAL && <IndividualInformationForm
            onFinish={handleOnNext}
          />
        }
        {
          session?.user.role === IDENTITY.PROFESSIONAL && <ProfessionalInformationForm
            onFinish={handleOnNext}
          />
        }
      </AuthLayout>
    </>
  );
}

export default AuthIndex