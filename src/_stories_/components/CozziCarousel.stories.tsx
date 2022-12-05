import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  CozziCarousel,
  ProfessionalCard,
  ServiceCard,
} from '@app/components';
import {
  getFeaturedProfessionals,
  getServices,
} from '@app/utils/demo';

export default {
  title: 'Components/CozziCarousel',
  component: CozziCarousel,
} as ComponentMeta<typeof CozziCarousel>;

const Template: ComponentStory<typeof CozziCarousel> = (args) => <CozziCarousel {...args} />;

export const WithProfessionalCard = Template.bind({});
WithProfessionalCard.args = {
  label: 'Featured Professionals',
  items: getFeaturedProfessionals().map(props => <ProfessionalCard {...props} />),
};

export const WithServiceCard = Template.bind({});
WithServiceCard.args = {
  label: 'Associate Services',
  items: getServices().map(props => <ServiceCard {...props} />),
};