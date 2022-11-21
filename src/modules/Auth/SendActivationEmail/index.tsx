import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

export type SendActivationEmailProps = {

} & React.HTMLAttributes<HTMLDivElement>;

export const SendActivationEmail: React.FC<SendActivationEmailProps> = ({
  className,
  ...otherProps
}) => {
  return <div className={classNames(styles.container, className)}>
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
    <Button className={styles.button}>Resend email</Button>
  </div>
}