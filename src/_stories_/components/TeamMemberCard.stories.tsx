import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamMemberCard } from '@app/components';

export default {
  title: 'Components/TeamMemberCard',
  component: TeamMemberCard,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof TeamMemberCard>;

const Template: ComponentStory<typeof TeamMemberCard> = (args) => <TeamMemberCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: '1',
    name: 'Suzanne Becker',
    avatar: '/images/demo/members/suzanne.png',
    department: 'Accounts',
    job: 'Account Manager',
    country: 'United Kingdom',
    flag: '/images/flags/gb.png',
  },
};