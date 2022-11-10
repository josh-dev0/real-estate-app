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
  const {
    address2,
    companyName,
    companyType,
    country,
    description,
    location,
    phone,
    rate,
    street,
    title,
    website,
    avatar,
  } = profile;
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
            src={avatar}
            backgroundColor="#365272"
            name={companyName}
            status="online"
          />
          <p className="text-primary font-medium text-2xl leading-0 mt-5">{companyName}</p>
          <section className="pl-3">
            <p className="text-bg-secondary text-base leading-xs mt-5">{location}</p>
            <p className="text-bg-secondary text-xs leading-xs font-medium mt-2">{street}</p>
            <p className="text-bg-secondary text-xs leading-xs font-medium mt-2">{address2}</p>
            <p className="text-bg-secondary text-xs leading-xs font-medium mt-2 flex items-center gap-[10px]">
              <img className="h-[10px]" src="/images/flags/gb.png" width="14" />
              {phone}
            </p>
          </section>
        </Col>
        <Col span={18}>
          <div className="w-full flex items-center justify-between mb-11">
            <p className="font-medium text-base leading-xs text-bg-secondary-light">{companyType}</p>
            <Rate
              disabled={true}
              allowHalf={true}
              value={rate}
            />
          </div>
          <h3 className="font-bold text-lg leading-xs text-primary mb-6">{title}</h3>
          <p className="text-[0.813rem] leading-sm text-secondary-7">{description}</p>
        </Col>
      </Row>
      <Divider />
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-[1rem] text-bg-secondary">
          <MailOutlined />
          <a
            className="font-medium text-[0.813rem] leading-xs underline"
            href={website}
          >
            {website}
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