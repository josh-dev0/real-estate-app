import React from 'react';
import { AuthLayout } from './Layout';
import { InformationForm2 } from './InformationForm2';


export type Information2Props = {
  role?: 'individual' | 'professiona';
}

export const Information2: React.FC<Information2Props> = ({
  role = 'individual',
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