import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ServiceCard } from '@app/components';

export default {
  title: 'Components/ServiceCard',
  component: ServiceCard,
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = (args) => <ServiceCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'w-[246px]',
  image: "images/demo/service-financing.png",
  title: 'Financing',
  summary: 'Finance your project...this is a temporry text',
  link: '',
};
