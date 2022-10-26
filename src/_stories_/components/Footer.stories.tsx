import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '@app/components';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});