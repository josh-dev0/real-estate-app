import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Searchbar } from '../../components/Searchbar';

export default {
  title: 'Components/Searchbar',
  component: Searchbar,
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => <Searchbar {...args} />;

export const Empty = Template.bind({});

export const WithLocation = Template.bind({});
WithLocation.args = {
  locationOptions: [
    'Location A', 'Location B', 'Location C',
    'Location AA', 'Location BB', 'Location CC',
    'Location AAA', 'Location BBB', 'Location CCC',
  ],
  includeResultsWithoutPictures: true,
};
