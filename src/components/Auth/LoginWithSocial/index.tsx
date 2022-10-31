import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import styles from './styles.module.scss';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

export type LoginWithSocialProps = {
  googleKey?: string;
  facebookKey?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const LoginWithSocial: React.FC<LoginWithSocialProps> = ({
  className,
}) => {
  return (
    <div className={classNames('bg-primary px-12 pt-[3.5rem] pb-[2.5rem]', className)}>
      <Button className={styles.button}>
        <GoogleOutlined />
        <p className="grow">Login with google</p>
      </Button>
      <Button className={styles.button}>
        <FacebookOutlined />
        <p className="grow">Login with facebook</p>
      </Button>
    </div>
  );
}