import React from 'react';
import { Card } from 'antd';
import classNames from 'classnames';
import styles from './styles.module.scss';

export type ServiceCardProps = {
  image: string;
  title: string;
  summary: string;
  link: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ServiceCard: React.FC<ServiceCardProps> = ({
  className,
  image,
  link,
  summary,
  title,
}) => {
  return (
    <Card
      className={classNames(styles.container, className)}
      style={{ minWidth: 200 }}
      bodyStyle={{
        padding: 0,
      }}
    >
      <section
        className={styles.imageWrapper}
        style={{
          backgroundImage: `url("${image}")`
        }}
      />
      <section className="px-[1.125rem] pb-[9px] overflow-auto">
        <p className="mt-[5px] text-sm leading-2xl font-bold text-bg-secondary-light">{title}</p>
        <p className={styles.summary}>{summary}</p>
        <div className="flex justify-end mt-[10px]">
          <a
            className={styles.readmore}
            href={link}>
            read more ...
          </a>
        </div>
      </section>
    </Card>
  )
}