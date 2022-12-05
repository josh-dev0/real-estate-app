import { ReactNode } from 'react';
import classNames from 'classnames';
import { Card, Col, Row } from 'antd';
import type { CardProps } from 'antd';
import type { TeamMember } from '@app/types';
import { ProfileAvatar } from '@app/components';
import styles from './styles.module.scss';

export type TeamMemberCard = {
  data: TeamMember;
} & CardProps;

/**
 * @name TeamMemberCard
 * @description a card for agency team members
 * @usedAt agency profile page/`Team` tab
 */
export const TeamMemberCard: React.FC<TeamMemberCard> = ({
  className,
  data,
  ...otherProps
}) => {
  const { department, job, country, flag, name, avatar } = data;
  return (
    <Card className={classNames(styles.container, className)}
      {...otherProps}
    >
      <div className="flex justify-center">
        <ProfileAvatar
          className="text-[4rem]"
          name={name}
          src={avatar}
          size={130}
        />
      </div>

      <p className="text-center text-dark font-bold text-sm leading-2xl mt-6">{name}</p>
      <section className="mt-3">
        <DescriptionItem
          label="Department"
          description={department}
        />
        <DescriptionItem
          label="Job Title"
          description={job}
        />
        <DescriptionItem
          label="Country"
          description={
            <div className="flex items-center gap-[6px]">
              <img className="w-[11px] h-[8.5px]" src={flag} alt="Flag" />
              {country}
            </div>
          }
        />
      </section>

    </Card>
  )
}

type DescriptionItemProps = {
  className?: string;
  label: ReactNode;
  description: ReactNode;
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  className,
  label,
  description,
}) => (
  <Row className={classNames("text-2xs text-secondary leading-2xl", className)} gutter={12}>
    <Col className="text-right font-bold" span={10}>{label}</Col>
    <Col className="" span={14}>{description}</Col>
  </Row>
)