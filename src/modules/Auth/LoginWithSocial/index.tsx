import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import styles from './styles.module.scss';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

export type LoginWithSocialProps = {
  googleKey?: string;
  facebookKey?: string;
  onGoogleLogin?: () => void;
  onFacebookLogin?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const LoginWithSocial: React.FC<LoginWithSocialProps> = ({
  className,
  onGoogleLogin,
  onFacebookLogin,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Button
        className={styles.button}
        onClick={onGoogleLogin}
      >
        <GoogleOutlined />
        <p className="grow">Login with google</p>
      </Button>
      <Button
        className={styles.button}
        onClick={onFacebookLogin}
      >
        <FacebookOutlined />
        <p className="grow">Login with facebook</p>
      </Button>
    </div>
  );
}