import React, { useState } from 'react';
import Image from 'next/image';
import { CaretDownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { locales } from '../../common/constants/locale';
import type { IUser, IdentityType } from '../../common/types';
import { IDENTITY } from '../../common/constants';


const loginDropdownMenu = (
  <Menu
    items={[
      {
        key: 'dd:my-profile',
        label: 'My Profile',
      },
      {
        key: 'dd:status',
        label: 'Status',
      },
      {
        key: 'dd:my-messages',
        label: 'My Messages',
      },
      {
        key: 'dd:my-ads',
        label: 'My ads',
      },
    ]}
  />
);

const ProfileAvatar: React.FC = () => {
  return (
    <div className="relative inline-block w-[40px] h-[40px] mt-[6px]">
      <Image src="/images/user.png" layout="responsive" width="40" height="40" />
      <span className="absolute bottom-[1.5px] right-[1.5px] block w-[10px] h-[10px] rounded-full bg-green-400"></span>
    </div>
  )
}

type AuthLocaleProps = {
  user?: IUser;
  locale: string;
  onLocaleChange?: (locale: string) => void;
  onIdentify?: (identity: IdentityType) => void;
};

export const AuthLocale: React.FC<AuthLocaleProps> = ({ locale, onLocaleChange, user, onIdentify }) => {

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
        !user && <Dropdown overlay={logoutDropdownMenu}>
          <a className="text-default" onClick={e => e.preventDefault()}>
            <div className="flex items-end">
              <p className="text-center leading-6 mb-0">Hello<br />Identify yourself</p>
              <CaretDownOutlined className="ml-3 mb-1" />
            </div>
          </a>
        </Dropdown>
      }
      {
        user && <Dropdown overlay={loginDropdownMenu}>
          <a className="text-default" onClick={e => e.preventDefault()}>
            <div className="flex items-center">
              <ProfileAvatar />
              <p className="text-center leading-6 mb-0 ml-4">{user.name}</p>
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