import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AgencyCard } from '@app/modules/Agency';

export default {
  title: 'Agency/AgencyCard',
  component: AgencyCard,
} as ComponentMeta<typeof AgencyCard>;

const Template: ComponentStory<typeof AgencyCard> = (args) => <AgencyCard {...args} />;

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  avatar: "/images/user.png",
  company: "Deco-home Inc",
  name: "Neudorf",
  rate: 4,
  summary: "A tout juste cinq minutes du quartier des nutes du quartier des...",
  properties: 134,
};

export const WithoutAvatar = Template.bind({});
WithoutAvatar.args = {
  company: "Deco-home Inc",
  name: "Neudorf",
  rate: 3.6,
  summary: "A tout juste cinq minutes du quartier des nutes du quartier des...",
  properties: 134,
};