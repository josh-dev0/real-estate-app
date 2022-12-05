import classNames from 'classnames';
import { TeamMemberCard } from '@app/components';
import type { TeamMember } from '@app/types';

export type AgencyTeamListProps = {
  className?: string;
  members: TeamMember[];
}

export const AgencyTeamList: React.FC<AgencyTeamListProps> = ({
  className,
  members,
}) => {
  return (
    <div className={classNames('flex gap-[22px] flex-wrap justify-center', className)}>
      {
        members.map((member, i) => (
          <TeamMemberCard
            key={`${i}.${member.id}.${member.name}`}
            data={member}
          />
        ))
      }
    </div>
  );
}