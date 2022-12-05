import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  FormOutlined,
} from '@ant-design/icons';
import { RewardCard } from '@app/components';

export default {
  title: 'Components/RewardCard',
  component: RewardCard,
} as ComponentMeta<typeof RewardCard>;

const Template: ComponentStory<typeof RewardCard> = (args) => <RewardCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'w-[246px]',
  title: 'Newsletter',
  summary: 'Subscribe and get notified on  great deals and events',
  link: '#',
  isFlex: true,
  icon: <FormOutlined />,
};
