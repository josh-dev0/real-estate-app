import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

import styles from './styles.module.scss';

export type SendActivationEmailProps = {
  onResend?: () => void;
  loading?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const SendActivationEmail: React.FC<SendActivationEmailProps> = ({
  className,
  loading,
  onResend,
  ...otherProps
}) => {
  return <div className={classNames(styles.container, className)} {...otherProps}>
    <p className={styles.hooray}>Hooray!</p>
    <CheckCircleFilled className={styles.checkmark} />
    <p className={styles.title}>
      Email activation successfully sent
    </p>
    <p className={styles.description}>
      Please check your mailbox for an account activation email. If you can’t find it, please check your spam
    </p>
    <p className={styles.resend}>
      Didn’t receive the email?
    </p>
    <Button
      className={styles.button}
      loading={loading}
      onClick={onResend}
    >Resend email</Button>
  </div>
}