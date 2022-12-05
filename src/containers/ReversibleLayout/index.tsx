import React from 'react';
import classNames from 'classnames';
import {
  Footer,
} from '@app/components';
import { ReversibleHeader } from './Header';
import styles from './styles.module.scss';

export type ReversibleLayoutProps = {
  title?: string;
  subtitle?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ReversibleLayout: React.FC<ReversibleLayoutProps> = ({
  className,
  children,
  title,
  ...otherProps
}) => {
  return (
    <>
      <ReversibleHeader title={title || 'Back'} />
      <main className={classNames(styles.main, className)}
        {...otherProps}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}