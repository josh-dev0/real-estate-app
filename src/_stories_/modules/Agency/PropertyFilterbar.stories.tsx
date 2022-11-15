import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AgencyPropertyFilterbar } from '@app/modules/Agency';

export default {
  title: 'Agency/PropertyFilterbar',
  component: AgencyPropertyFilterbar,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof AgencyPropertyFilterbar>;

const Template: ComponentStory<typeof AgencyPropertyFilterbar> = (args) => <AgencyPropertyFilterbar {...args} />;

export const Primary = Template.bind({});
