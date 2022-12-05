import React, { useMemo } from 'react';
import { signOut } from 'next-auth/react';
import Router from 'next/router';
import { Dropdown, Menu, Space } from 'antd';
import { useRecoilState } from 'recoil';
import {
  CaretDownOutlined,
  CaretRightOutlined,
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
import { IDENTITY } from '@app/constants';
import { ProfileAvatar } from '@app/components';
import { jwtState, publicProfileState } from '@app/stores';
import { OnlineIcon } from './icons/online';
import styles from './styles.module.scss';

const loginMenuIconClassName = "w-[1rem] mr-5 text-lg inline-block";

type AuthLocaleProps = {
  locale: string;
  onLocaleChange?: (locale: string) => void;
  onIdentify?: (identity: IdentityType) => void;
};

export const AuthLocale: React.FC<AuthLocaleProps> = ({ locale, onLocaleChange, onIdentify }) => {
  const [jwt, setJWT] = useRecoilState(jwtState);
  const [profile, setProfile] = useRecoilState(publicProfileState);
  const isAuthenticated = useMemo(() => jwt && profile, [jwt, profile]);
  const displayName = useMemo(() => profile?.name || profile?.username, [profile]);

  const handleOnLogout = () => {
    return signOut({
      redirect: false,
      callbackUrl: '/',
    }).then(res => {
      setJWT(null);
      setProfile(null);
      Router.push(res.url)
    });
  }

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

  const loginDropdownMenu = (
    <Menu
      className="py-4 px-6"
      mode="horizontal"
      items={[
        {
          key: 'dd:my-profile',
          label: 'My Profile',
          icon: <ProfileOutlined className={loginMenuIconClassName} />
        },
        {
          key: 'dd:status',
          label: 'Status',
          icon: <OnlineIcon className={loginMenuIconClassName} />,
          expandIcon: <CaretRightOutlined className="ant-dropdown-menu-submenu-expand-icon top-[.5rem]" />,
          children: [
            {
              label: "Online",
              key: 'menu:online',
            },
            {
              label: "Away",
              key: 'menu:away',
            },
            {
              label: "Hidden",
              key: 'menu:hidden',
            },
            {
              label: "Don't disturbe",
              key: 'menu:dontdisturb',
            },
          ]
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
          onClick: handleOnLogout,
        },
      ]}
      onClick={e => console.log(`Clicked ${e.key.replace('dd:', '')} menu. Will redirect to page properly.`)}
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
                src={profile?.avatar}
                name={displayName}
                size={40}
                status='online'
                backgroundColor={profile?.backgroundColor}
              />
              <p className="text-center leading-6 mb-0 ml-4 w-[5rem] mt-1">{displayName}</p>
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