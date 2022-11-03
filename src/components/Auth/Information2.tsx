import React from 'react';
import { IDENTITY } from '@app/constants';
import type { IdentityType } from '@app/types';
import { AuthLayout } from './Layout';
import { InformationForm2 } from './InformationForm2';

export type Information2Props = {
  role?: IdentityType;
}

export const Information2: React.FC<Information2Props> = ({
  role = IDENTITY.INDIVIDUAL,
}) => {

  return (
    <AuthLayout
      columns={1}
      title="Your account has been created"
      subtitle="We just need a bit more information before we can get you started if that’s ok with you :-)"
    >
      <InformationForm2 />
    </AuthLayout>
  );
}