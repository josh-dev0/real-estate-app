import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AgencyDetails } from '@app/modules/Agency';

export default {
  title: 'Agency/AgencyDetails',
  component: AgencyDetails,
} as ComponentMeta<typeof AgencyDetails>;

const Template: ComponentStory<typeof AgencyDetails> = (args) => <AgencyDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  profile: {
    id: '',
    location: 'Neudorf',
    avatar: '',
    street: '30 rue du bois fleurit',
    address2: 'L10023 Luxembourg',
    country: 'UK',
    phone: '+352 345 876',
    website: 'http://www.immoclean.com',
    companyName: 'Lotiself Inc',
    companyType: 'Real Estate',
    title: '10 years of experience in Real Estate Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rate: 3.8,
  },
};