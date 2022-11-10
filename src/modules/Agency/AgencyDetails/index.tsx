import classNames from 'classnames';
import { CardProps, Col, Divider, Rate, Row } from 'antd';
import { Card } from 'antd';
import { ProfileAvatar } from '@app/components';
import type { Agency } from '@app/types';
import {
  ThumbupIcon,
  HeartIcon,
  ShareIcon,
  ChatIcon,
} from '../icons';
import styles from './styles.module.scss';
import { MailOutlined } from '@ant-design/icons';
import { profile } from 'console';

export type AgencyDetailsProps = {
  profile: Agency;
} & CardProps;

/**
 * @name AgencyDetails
 * @descripton to be sued to show the full profile of agencies
 * @todo: country flags.
 */
export const AgencyDetails: React.FC<AgencyDetailsProps> = ({
  className,
  profile,
  ...otherProps
}) => {
  return (
    <Card
      className={classNames(styles.container, className)}
      bodyStyle={{
        padding: 0,
      }}
      {...otherProps}
    >
      <Row >
        <Col span={6}>
          <ProfileAvatar
            className="text-[3rem]"
            size={94}
            backgroundColor="#365272"
            name="Neudorf A"
            status="online"
          />
          <p className="text-primary font-medium text-2xl leading-0 mt-5">{profile.companyName}</p>
          <section className="pl-3">
            <p className="text-bg-secondary text-base leading-xs mt-5">{profile.name}</p>
            <p className="text-bg-secondary text-xs leading-xs font-medium mt-2">{profile.street}</p>
            <p className="text-bg-secondary text-xs leading-xs font-medium mt-2">{profile.address2}</p>
            <p className="text-bg-secondary text-xs leading-xs font-medium mt-2 flex items-center gap-[10px]">
              <img className="h-[10px]" src="/images/flags/gb.png" width="14" />
              {profile.phone}
            </p>
          </section>
        </Col>
        <Col span={18}>
          <div className="w-full flex items-center justify-between mb-11">
            <p className="font-medium text-base leading-xs text-bg-secondary-light">Real Estate</p>
            <Rate
              disabled={true}
              allowHalf={true}
              value={4.6}
            />
          </div>
          <h3 className="font-bold text-lg leading-xs text-primary mb-6">10 years of experience in Real Estate Management</h3>
          <p className="text-[0.813rem] leading-sm text-secondary-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore
            magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
      <Divider />
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-[1rem] text-bg-secondary">
          <MailOutlined />
          <a
            className="font-medium text-[0.813rem] leading-xs"
            href="http://www.immoclean.com"
          >
            http://www.immoclean.com
          </a>
        </div>
        <div className="flex gap-[1.5rem]">
          <ThumbupIcon className={styles.actionIcon} />
          <HeartIcon className={styles.actionIcon} />
          <ShareIcon className={styles.actionIcon} />
          <ChatIcon className={styles.actionIcon} />
        </div>
      </section>
    </Card>
  );
}