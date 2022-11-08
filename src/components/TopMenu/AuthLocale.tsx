import React, { useMemo, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Router from 'next/router';
import { Dropdown, Menu, Space } from 'antd';
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
import type { IdentityType } from '@app/types';
import { IDENTITY, SESSION_STATUS } from '@app/constants';
import { ProfileAvatar } from '@app/components';
import { OnlineIcon } from './icons/online';
import styles from './styles.module.scss';

const loginMenuIconClassName = "w-[1rem] mr-5 text-lg";
const loginDropdownMenu = (
  <Menu
    className="py-4 px-6"
    items={[
      {
        key: 'dd:my-profile',
        label: 'My Profile',
        icon: <ProfileOutlined className={loginMenuIconClassName} />
      },
      {
        key: 'dd:status',
        label: 'Status',
        icon: <OnlineIcon className={loginMenuIconClassName} />
      },
      {
        key: 'dd:my-messages',
        label: 'My Messages',
        icon: <MessageOutlined className={loginMenuIconClassName} />
      },
      {
        key: 'dd:my-ads',
        label: 'My ads',
        icon: <NotificationOutlined className={loginMenuIconClassName} />
      },
      {
        key: 'dd:saved-searches',
        label: 'My Saved Searches',
        icon: <SearchOutlined className={loginMenuIconClassName} />,
      },
      {
        key: 'dd:my-favorites',
        label: 'My Favorites',
        icon: <HeartOutlined className={loginMenuIconClassName} />,
      },
      {
        key: 'dd:my-hidden-ads',
        label: 'My Hidden Ads',
        icon: <EyeInvisibleFilled className={loginMenuIconClassName} />,
      },
      {
        key: 'dd:my-subscriptions',
        label: 'My Subscriptons',
        icon: <FormOutlined className={loginMenuIconClassName} />,
      },
      {
        key: 'dd:loyalty-program',
        label: 'Loyalty Program',
        icon: <CrownOutlined className={loginMenuIconClassName} />,
      },
      {
        key: 'dd:logout',
        label: 'Logout',
        icon: <LoginOutlined className={loginMenuIconClassName} />,
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
  locale: string;
  onLocaleChange?: (locale: string) => void;
  onIdentify?: (identity: IdentityType) => void;
};

export const AuthLocale: React.FC<AuthLocaleProps> = ({ locale, onLocaleChange, onIdentify }) => {
  const { data: session, status } = useSession();
  const isAuthenticated = useMemo(() => status === SESSION_STATUS.AUTHENTICATED && session?.user, [session, status]);

  const logoutDropdownMenu = (
    <Menu
      className={styles.logoutMenuDropDown}
      items={[
        {
          key: IDENTITY.INDIVIDUAL,
          label: <span className={styles.logoutMenuItem}>I'm an individual</span>,
        },
        {
          key: IDENTITY.PROFESSIONAL,
          label: <span className={styles.logoutMenuItem}>I'm a Professional</span>
        },
      ]}
      onClick={e => onIdentify!(e.key as IdentityType)}
    />
  );

  const localeMenu = (
    <Menu
      className={styles.localeMenuDropDown}
      items={locales.map(locale => ({
        key: locale,
        label: <span className={styles.localeMenuItem}>{locale}</span>,
      }))}
      onClick={(e) => onLocaleChange!(e.key)}
    />
  );

  return (
    <Space direction="horizontal" size="middle">
      {
        !isAuthenticated &&
        <Dropdown overlay={logoutDropdownMenu}>
          <a className="text-bg-secondary" onClick={e => e.preventDefault()}>
            <div className="flex items-end">
              <p className="text-center leading-6 mb-0">Hello<br />Identify yourself</p>
              <CaretDownOutlined className="ml-3 mb-1" />
            </div>
          </a>
        </Dropdown>
      }
      {
        isAuthenticated &&
        <Dropdown
          placement="top"
          overlay={loginDropdownMenu}
          trigger={['click']}
        >
          <div className="text-default cursor-pointer" onClick={e => e.preventDefault()}>
            <div className="flex items-center">
              <ProfileAvatar
                src={session?.user.image}
                name={session?.user.name!}
                size={40}
                status='online'
              />
              <p className="text-center leading-6 mb-0 ml-4 w-[5rem] mt-1">{session?.user.name}</p>
              <CaretDownOutlined className="ml-1" />
            </div>
          </div>
        </Dropdown>
      }
      <Dropdown overlay={localeMenu}>
        <div className="leading-4 flex items-center text-bg-secondary cursor-pointer">
          <div className="min-w-[2.5rem] text-center">
            <GlobalOutlined className="text-3xl" />
            <span className="block leading-4 text-center text-xs">{locale}</span>
          </div>
          <CaretDownOutlined className="ml-2" />
        </div>
      </Dropdown>
    </Space>
  );
}