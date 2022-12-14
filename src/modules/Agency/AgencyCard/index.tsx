import React from 'react';
import { Card, Divider, Rate } from 'antd';
import { ProfileAvatar } from '@app/components';
import styles from './styles.module.scss';
import {
  ThumbupIcon,
  HeartIcon,
  ShareIcon,
  ChatIcon,
} from '@app/components/SVGs';

type AgencyCardProps = {
  company: string;
  name: string;
  summary: string;
  rate: number;
  avatar?: string;
  properties?: number;
}

export const AgencyCard: React.FC<AgencyCardProps> = ({
  company,
  name,
  rate,
  summary,
  avatar,
  properties,
}) => {
  return (
    <Card
      className={styles.container}
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
      <div className="flex items-center justify-between pb-6 px-6">
        <p className="font-light text-xs leading-xs text-bg-secondary-light">View {properties || 0} ads</p>
        <div className="flex items-center gap-[26px]">
          <ThumbupIcon className={styles.actionIcon} />
          <HeartIcon className={styles.actionIcon} />
          <ShareIcon className={styles.actionIcon} />
          <ChatIcon className={styles.actionIcon} />
        </div>
      </div>
    </Card>
  );
}