import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfessionalCard } from '@app/components';

export default {
  title: 'Components/ProfessionalCard',
  component: ProfessionalCard,
} as ComponentMeta<typeof ProfessionalCard>;

const Template: ComponentStory<typeof ProfessionalCard> = (args) => <ProfessionalCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'w-[246px]',
  company: 'Lotiself Inc',
  name: 'Neudorf',
  rate: 4,
  summary: 'A tout juste cinq minutes du quartier des ...',
  link: '#',
};
