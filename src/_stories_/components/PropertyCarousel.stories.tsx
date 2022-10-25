import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PropertyCarousel } from '@app/components';
import { random } from '@app/utils';

export default {
  title: 'Components/PropertyCarousel',
  component: PropertyCarousel,
} as ComponentMeta<typeof PropertyCarousel>;

const Template: ComponentStory<typeof PropertyCarousel> = (args) => <PropertyCarousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  properties: new Array(16).fill(null).map((_, i) => ({
    title: "Penthouse in Howald" + (i + 1),
    image: "/images/card-image.png",
    price: random(765000, 865000),
    bedrooms: random(2, 10),
    surface: random(300, 450),
    review: random(2, 5),
    loading: false,
  })),
  label: "Properties around me",
  infinite: false,
};
