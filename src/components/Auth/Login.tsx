import React from 'react';
import { AuthLayout } from './Layout';
import { LoginForm } from './LoginForm';
import { LoginWithSocial } from './LoginWithSocial';
import { RegisterForm } from './RegisterForm';
import { IDENTITY } from '@app/constants';
import type { IdentityType, LoginInput, RegisterInput } from '@app/types';

export type LoginProps = {
  role?: IdentityType;
  value?: LoginInput;
  onLogin?: (val: LoginInput) => void;
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
  onRegister?: (val: RegisterInput) => void;
}

export const Login: React.FC<LoginProps> = ({
  role = IDENTITY.INDIVIDUAL,
  onLogin,
  onGoogleLogin,
  onFacebookLogin,
  onRegister,
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
      right={<RegisterForm
        onFinish={onRegister}
      />}
    />
  );
}