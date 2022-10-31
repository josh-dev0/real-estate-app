import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export type SimpleCardProps = {
  title: string;
  image: string;
  link?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const SimpleCard: React.FC<SimpleCardProps> = ({
  className,
  title,
  image,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <p className={styles.title}>{title}</p>
      <img
        className={styles.image}
        src={image}
        alt={title}
      />
    </div>
  );
}