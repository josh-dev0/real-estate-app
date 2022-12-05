import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleCard } from '@app/components';

export default {
  title: 'Components/SimpleCard',
  component: SimpleCard,
} as ComponentMeta<typeof SimpleCard>;

const Template: ComponentStory<typeof SimpleCard> = (args) => <SimpleCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Flats',
  image: '/images/demo/property-types/flats.png',
};
