import React, { useEffect, useState } from 'react';
import { Avatar, Card, Divider, Rate } from 'antd';
import randomColor from 'randomcolor';
import styles from './styles.module.scss';
import classNames from 'classnames';

export type ProfessionalCardProps = {
  avatar?: string;
  backgroundColor?: string;
  company: string;
  link?: string;
  name: string;
  rate: number;
  summary: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  className,
  avatar,
  backgroundColor,
  company,
  link,
  name,
  rate,
  summary,
}) => {
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(randomColor({ luminosity: 'dark' }));
  }, [])

  return (
    <Card
      className={classNames(styles.container, className)}
      style={{ minWidth: 250 }}
      bodyStyle={{
        padding: 0,
      }}
    >
      <section className="p-6 pb-0">
        <div className="mb-6">
          <Avatar
            className="text-[3rem] align-middle"
            size={94}
            src={avatar}
            style={{
              backgroundColor: backgroundColor || color
            }}
          >
            {name?.charAt(0)}
          </Avatar>
        </div>
        <p className="text-primary font-medium text-xl leading-xs mb-5">{company}</p>
      </section>
      <Divider />
      <section className="px-6 pb-2">
        <p className="text-bg-secondary text-lg leading-xs font-medium">{name}</p>
        <div className="flex justify-end -mt-2">
          <Rate
            disabled
            allowHalf={true}
            value={rate}
          />
        </div>
        <p className="mt-3 text-[0.813rem] leading-xs font-light text-secondary-7 text-ellipsis overflow-hidden whitespace-nowrap">{summary}</p>
        <div className="flex justify-end">
          <a
            className="text-bg-secondary font-bold text-xs leading-2xl"
            href={link}>
            read more ...
          </a>
        </div>
      </section>
    </Card>
  );
}