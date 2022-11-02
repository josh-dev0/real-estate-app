import React from 'react';
import { AuthLayout } from './Layout';
import { LoginForm } from './LoginForm';
import { LoginWithSocial } from './LoginWithSocial';
import { RegisterForm } from './RegisterForm';
import { IDENTITY } from '@app/constants';
import type { IdentityType, LoginInput } from '@app/types';

export type LoginProps = {
  role?: IdentityType;
  value?: LoginInput;
  onLogin?: (val: LoginInput) => void;
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({
  role = IDENTITY.INDIVIDUAL,
  onLogin,
  onGoogleLogin,
  onFacebookLogin,
}) => {
  return (
    <AuthLayout
      columns={2}
      title="Hello there!"
      left={
        <div>
          <LoginForm
            onFinish={onLogin}
          />
          <LoginWithSocial className="mt-[2.813rem]"
            onGoogleLogin={onGoogleLogin}
            onFacebookLogin={onFacebookLogin}
          />
        </div>
      }
      right={<RegisterForm />}
    />
  );
}