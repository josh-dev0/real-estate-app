import React from 'react';
import { Card, Divider, Rate } from 'antd';
import { ProfileAvatar } from '@app/components';
import styles from './styles.module.scss';
import {
  ThumbupIcon,
  HeartIcon,
  ShareIcon,
  ChatIcon,
} from './icons';

type AgencyCardProps = {
  company: string;
  name: string;
  summary: string;
  rate: number;
  avatar?: string;
}

export const AgencyCard: React.FC<AgencyCardProps> = ({
  company,
  name,
  rate,
  summary,
  avatar,
}) => {
  return (
    <Card
      className={styles.container}
      style={{ width: 333 }}
      bodyStyle={{
        padding: 0,
      }}
    >
      <div className="p-6 pb-0">
        <div className="flex items-top justify-between mb-6">
          <ProfileAvatar
            size={94}
            className="text-[3rem] bg-secondary"
            src={avatar}
            name={name}
          />
          <Rate
            disabled
            allowHalf={true}
            value={rate}
          />
        </div>
        <p className="text-primary font-medium text-2xl leading-xs mb-5">{company}</p>
        <p className="text-bg-secondary text-lg leading-xs font-medium mb-5">{name}</p>
        <p className="text-[0.813rem] leading-xs font-light text-secondary-5 text-ellipsis overflow-hidden whitespace-nowrap">{summary}</p>
      </div>
      <Divider />
      <div className="flex items-center justify-center gap-[26px] pb-6">
        <ThumbupIcon className={styles.actionIcon} />
        <HeartIcon className={styles.actionIcon} />
        <ShareIcon className={styles.actionIcon} />
        <ChatIcon className={styles.actionIcon} />
      </div>
    </Card>
  );
}