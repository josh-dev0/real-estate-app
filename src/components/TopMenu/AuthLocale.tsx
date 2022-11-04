import React, { useMemo } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Router from 'next/router';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import {
  CaretDownOutlined,
  CrownOutlined,
  EyeInvisibleFilled,
  FormOutlined,
  GlobalOutlined,
  HeartOutlined,
  LoginOutlined,
  MessageOutlined,
  NotificationOutlined,
  ProfileOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { locales } from '@app/constants/locale';
import type { IUser, IdentityType } from '@app/types';
import { IDENTITY, SESSION_STATUS } from '@app/constants';
import { ProfileAvatar } from '@app/components';
import { OnlineIcon } from './icons/online';

const loginDropdownMenu = (
  <Menu
    items={[
      {
        key: 'dd:my-profile',
        label: 'My Profile',
        icon: <ProfileOutlined />
      },
      {
        key: 'dd:status',
        label: 'Status',
        icon: <OnlineIcon className="mr-2" />
      },
      {
        key: 'dd:my-messages',
        label: 'My Messages',
        icon: <MessageOutlined />
      },
      {
        key: 'dd:my-ads',
        label: 'My ads',
        icon: <NotificationOutlined />
      },
      {
        key: 'dd:saved-searches',
        label: 'My Saved Searches',
        icon: <SearchOutlined />,
      },
      {
        key: 'dd:my-favorites',
        label: 'My Favorites',
        icon: <HeartOutlined />,
      },
      {
        key: 'dd:my-hidden-ads',
        label: 'My Hidden Ads',
        icon: <EyeInvisibleFilled />,
      },
      {
        key: 'dd:my-subscriptions',
        label: 'My Subscriptons',
        icon: <FormOutlined />,
      },
      {
        key: 'dd:loyalty-program',
        label: 'Loyalty Program',
        icon: <CrownOutlined />,
      },
      {
        key: 'dd:logout',
        label: 'Logout',
        icon: <LoginOutlined />,
        onClick: () => signOut({
          redirect: false,
          callbackUrl: '/',
        }).then(res => Router.push(res.url)),
      },
    ]}
    onClick={e => console.log(`Clicked ${e.key.replace('dd:', '')} menu. Will redirect to page properly.`)}
  />
);

type AuthLocaleProps = {
  user?: IUser;
  locale: string;
  onLocaleChange?: (locale: string) => void;
  onIdentify?: (identity: IdentityType) => void;
};

export const AuthLocale: React.FC<AuthLocaleProps> = ({ locale, onLocaleChange, user, onIdentify }) => {
  const { data: session, status } = useSession();
  const isAuthenticated = useMemo(() => status === SESSION_STATUS.AUTHENTICATED && session?.user, [session, status]);

  const logoutDropdownMenu = (
    <Menu
      items={[
        {
          key: IDENTITY.INDIVIDUAL,
          label: "I'm an individual",
        },
        {
          key: IDENTITY.PROFESSIONAL,
          label: "I'm a Professional"
        },
      ]}
      onClick={e => onIdentify!(e.key as IdentityType)}
    />
  );

  const localeMenu = (
    <Menu
      items={locales.map(locale => ({
        key: locale,
        label: locale,
      }))}
      onClick={(e) => onLocaleChange!(e.key)}
    />
  );

  return (
    <Space direction="horizontal" size="middle">
      {
        !isAuthenticated && <Dropdown overlay={logoutDropdownMenu}>
          <a className="text-default" onClick={e => e.preventDefault()}>
            <div className="flex items-end">
              <p className="text-center leading-6 mb-0">Hello<br />Identify yourself</p>
              <CaretDownOutlined className="ml-3 mb-1" />
            </div>
          </a>
        </Dropdown>
      }
      {
        isAuthenticated && <Dropdown
          overlay={loginDropdownMenu}
          trigger={['click']}
        >
          <a className="text-default" onClick={e => e.preventDefault()}>
            <div className="flex items-center">
              <ProfileAvatar
                src={session?.user.image}
                name={session?.user.name!}
                size={40}
                status='online'
              />
              <p className="text-center leading-6 mb-0 ml-4">{session?.user.name}</p>
              <CaretDownOutlined className="ml-1" />
            </div>
          </a>
        </Dropdown>
      }
      <Dropdown overlay={localeMenu}>
        <div>
          <div className="leading-4 flex items-center">
            <div>
              <GlobalOutlined className="text-3xl" />
              <span className="block leading-4 text-center text-xs">{locale}</span>
            </div>
            <CaretDownOutlined className="ml-2" />
          </div>
        </div>
      </Dropdown>
    </Space>
  );
}