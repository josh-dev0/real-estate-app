import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Footer } from '@app/components';
import { AuthHeader } from '@app/modules/Auth';
import { withExtraClass } from '@app/utils';
import styles from './styles.module.scss';

export type AuthLayoutProps = {
  columns: 1 | 2;
  left?: ReactNode,
  right?: ReactNode,
  title?: string;
  subtitle?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  className,
  columns = 1,
  children,
  left,
  right,
  title,
  subtitle,
}) => {
  return (
    <>
      <AuthHeader />
      <main className={classNames(styles.main, className)}>
        <p
          className={classNames("text-center text-[2.5rem] leading-2xl font-bold text-primary", {
            "mb-[5rem]": !subtitle
          })}
        >
          {title}
        </p>
        {
          subtitle &&
          <p className="text-center text-xl leading-2xl text-primary mb-8 mt-6 max-w-[36.625rem] mx-auto">{subtitle}</p>
        }
        <section className="flex items-center">
          <div className={classNames("flex w-full max-w-[68rem] px-4 mx-auto gap-[2.5rem]", {
            "justify-between": columns === 2,
            "justify-center": columns === 1,
          })}>
            {
              columns === 2 ? withExtraClass(left as JSX.Element, 'w-1/2') : children
            }
            {
              columns === 2 && withExtraClass(right as JSX.Element, 'w-1/2')
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}