import React from 'react';
import { AuthLayout } from './Layout';
import { LoginForm } from './LoginForm';
import { LoginWithSocial } from './LoginWithSocial';
import { RegisterForm } from './RegisterForm';

export type LoginProps = {
  role?: 'individual' | 'professiona';
}

export const Login: React.FC<LoginProps> = ({
  role = 'individual',
}) => {

  return (
    <AuthLayout
      columns={2}
      title="Hello there!"
      // title="Your account has been created"
      // subtitle="We just need a bit more information before we can get you started if that’s ok with you :-)"
      left={
        <div>
          <LoginForm />
          <LoginWithSocial className="mt-[2.813rem]" />
        </div>
      }
      right={<RegisterForm />}
    />
  );
}