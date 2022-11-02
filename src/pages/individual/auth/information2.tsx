import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import {
  Information2
} from '@app/components';
import { getCountryList } from '@app/utils/demo';
import type { ICountry } from '@app/types';

const AuthIndex: NextPage = () => {
  // const [countries, setCountries] = useState<ICountry[]>([]);

  // useEffect(() => {
  //   setCountries(getCountryList());
  // }, []);

  return (
    <>
      <Head>
        <title>More Information | Cozzinest</title>
        <meta name="description" content="Please provide more information. You're closer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Information2 />
    </>
  );
}

export default AuthIndex