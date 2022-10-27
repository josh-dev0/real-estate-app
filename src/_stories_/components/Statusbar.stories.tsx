import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Statusbar } from '@app/components';

export default {
  title: 'Components/Statusbar',
  component: Statusbar,
} as ComponentMeta<typeof Statusbar>;

const Template: ComponentStory<typeof Statusbar> = (args) => <Statusbar {...args} />;

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