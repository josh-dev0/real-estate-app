import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AgencyStatusbar } from '@app/modules/Agency';

export default {
  title: 'Agency/Statusbar',
  component: AgencyStatusbar,
} as ComponentMeta<typeof AgencyStatusbar>;

const Template: ComponentStory<typeof AgencyStatusbar> = (args) => <AgencyStatusbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sortByOptions: [
    { value: 'relevance', label: 'Relevance' },
    { value: 'featured', label: 'Featured' },
    { value: 'newlyAdded', label: 'Newly Added' },
    { value: 'date', label: 'Date' },
    { value: 'lowestPrice', label: 'Lowest Price' },
    { value: 'highestPrice', label: 'Highest Price' },
  ],
  sortBy: 'relevance',
};