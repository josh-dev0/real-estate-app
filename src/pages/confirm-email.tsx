import type { NextPage } from 'next'
import Head from 'next/head'
import Router, { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import {
  AuthLayout,
  IndividualInformationForm,
  ProfessionalInformationForm,
  SendActivationEmail,
} from '@app/modules/Auth';
import { IDENTITY, ROUTES } from '@app/constants';

const AuthIndex: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const role = useMemo(() => session?.role || router.query.role, [session, router]);

  const handleOnNext = (values: any) => {
    Router.push(`${ROUTES.info2}`);
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
        <SendActivationEmail />
      </AuthLayout>
    </>
  );
}

export default AuthIndex