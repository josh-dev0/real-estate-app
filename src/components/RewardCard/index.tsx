import React, { cloneElement, ReactNode, useCallback } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles.module.scss';

export type RewardCardProps = {
  title: string;
  summary: string;
  link: string;
  isFlex?: boolean;
  icon: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

export const RewardCard: React.FC<RewardCardProps> = ({
  className,
  icon,
  isFlex,
  link,
  summary,
  title,
  ...props
}) => {
  const cloneIcon = useCallback((classes: string) => {
    const className = classNames(icon?.props?.className, classes);
    const props = { className };
    return cloneElement(icon, props);
  }, [icon]);

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.limitMaxWidth]: !isFlex
      })}
      {...props}
    >
      <div className="flex items-start justify-between font-bold text-base leading-[22px] text-bg-secondary">
        {title}
        {cloneIcon('text-[13px] vertical-middle mt-[2px]')}
      </div>
      <div className="text-2xs leading-[15px] text-primary">{summary}</div>
      <div className={styles.readMore}>
        <Link href={link}>Read more...</Link>
      </div>
    </div>
  );
}