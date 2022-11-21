import React from 'react';
import Router from 'next/router';
import classNames from 'classnames';
import { Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { ROUTES } from '@app/constants';

import styles from './styles.module.scss';

export type ResetPasswordSuccessProps = {

} & React.HTMLAttributes<HTMLDivElement>;

export const ResetPasswordSuccess: React.FC<ResetPasswordSuccessProps> = ({
  className,
  ...otherProps
}) => {
  const backToLogin = () => Router.push(ROUTES.login)
  return <div className={classNames(styles.container, className)} {...otherProps}>
    <p className={styles.hooray}>Hooray!</p>
    <CheckCircleFilled className={styles.checkmark} />
    <p className={styles.title}>
      Password successfully Reset
    </p>
    <Button
      className={styles.button}
      onClick={backToLogin}
    >Try to log back in</Button>
  </div>
}