import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PropertyCard } from '../../components/PropertyCard';

export default {
  title: 'Components/PropertyCard',
  component: PropertyCard,
} as ComponentMeta<typeof PropertyCard>;

const Template: ComponentStory<typeof PropertyCard> = (args) => <PropertyCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: { maxWidth: 300 },
  title: "Penthouse in Howald",
  image: "/images/card-image.png",
  price: 865000,
  bedrooms: 3,
  surface: 450,
  loading: false,
  review: 4.5,
};

export const WithEmptyValues = Template.bind({});
WithEmptyValues.args = {
  style: { maxWidth: 300 }
};