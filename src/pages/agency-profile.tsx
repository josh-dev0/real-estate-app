import { NextPage } from "next";
import { ReversibleLayout } from '@app/containers';
import { Breadcrumb, CozziTabs } from "@app/components";
import {
  AgencyDetails,
  AgencyPropertySearch,
  AgencyTeamList,
} from '@app/modules/Agency';
import type { Agency } from '@app/types';
import { getTeamMembers } from '@app/utils/demo';

const agency: Agency = {
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
};

const AgencyProfile: NextPage = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <ReversibleLayout
      title="Agencies Directory"
    >
      <div className="w-full mx-auto max-w-[1260px]">
        <Breadcrumb
          items={[
            { name: 'Home', link: '/' },
            { name: 'Agency Directory', link: '/agencies' },
            { name: 'Lotiself Inc', link: '/agencies/lotiself-inc' },
            { name: 'Team' },
          ]}
        />
        <AgencyDetails
          className="mt-8"
          profile={agency}
        />
        <CozziTabs
          className="mt-10"
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `Team`,
              key: 'team',
              children: <AgencyTeamList members={getTeamMembers()} />,
            },
            {
              label: `Properties`,
              key: 'properties',
              children: <AgencyPropertySearch />,
            },
            {
              label: `Contact`,
              key: 'contact',
              children: `Contact content here`,
            },
            {
              label: `Reviews`,
              key: 'reviews',
              children: `Reviews content here`,
            },
          ]}
        />
      </div>
    </ReversibleLayout>
  );
}

export default AgencyProfile;