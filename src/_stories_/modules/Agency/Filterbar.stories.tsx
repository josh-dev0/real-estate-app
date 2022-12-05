import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AgencyFilterbar } from '@app/modules/Agency';

export default {
  title: 'Agency/Filterbar',
  component: AgencyFilterbar,
} as ComponentMeta<typeof AgencyFilterbar>;

const Template: ComponentStory<typeof AgencyFilterbar> = (args) => <AgencyFilterbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    total: 435,
    seniority: 226,
    rate: 205,
    serviceType: 226,
    region: 176,
    location: 176,
  },
  isSeniority: true,
  // onIsSeniorityChange={setIsSeniority}
  rate: 3.4,
  serviceType: ['key1', 'key2', 'key3'],
  serviceTypeOptions: [
    { key: 'key1', label: 'Service Type I' },
    { key: 'key2', label: 'Service Type II' },
    { key: 'key3', label: 'Service Type III' },
    { key: 'key4', label: 'Service Type IV' },
    { key: 'key5', label: 'Service Type V' },
    { key: 'key6', label: 'Service Type VI' },
    { key: 'key7', label: 'Service Type VII' },
    { key: 'key8', label: 'Service Type VIII' },
    { key: 'key9', label: 'Service Type IX' },
    { key: 'key10', label: 'Service Type X' },
  ],
  region: ['key1'],
  regionOptions: [
    { key: 'key1', label: 'Region I' },
    { key: 'key2', label: 'Region II' },
    { key: 'key3', label: 'Region III' },
    { key: 'key4', label: 'Region IV' },
    { key: 'key5', label: 'Region V' },
    { key: 'key6', label: 'Region VI' },
    { key: 'key7', label: 'Region VII' },
    { key: 'key8', label: 'Region VIII' },
    { key: 'key9', label: 'Region IX' },
    { key: 'key10', label: 'Region X' },
  ],
  location: ['key1', 'key2'],
  locationOptions: [
    { key: 'key1', label: 'Location I' },
    { key: 'key2', label: 'Location II' },
    { key: 'key3', label: 'Location III' },
    { key: 'key4', label: 'Location IV' },
    { key: 'key5', label: 'Location V' },
    { key: 'key6', label: 'Location VI' },
    { key: 'key7', label: 'Location VII' },
    { key: 'key8', label: 'Location VIII' },
    { key: 'key9', label: 'Location IX' },
    { key: 'key10', label: 'Location X' },
  ],
};