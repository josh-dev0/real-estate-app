import React, { useState } from 'react';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Badge, Layout, Menu } from 'antd';
import type { IUser } from '../../common/types';
import { leftMenuItems, getRightMenuItems } from './menus';
import { AuthLocale } from './AuthLocale';
import { MenuOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { locales } from '../../common/constants/locale';

const { Header } = Layout;

type TopMenuProps = {
  locale: string;
  user?: IUser;
  notifications: number;
  onLocaleChange?: (locale: string) => void;
}

export const TopMenu: React.FC<TopMenuProps> = ({
  locale,
  user,
  notifications,
  onLocaleChange
}) => {
  const [currentL, setCurrentL] = useState('mail');

  const onClickLeftMenu: MenuProps['onClick'] = e => {
    setCurrentL(e.key);
  };

  return (
    <Header
      className="flex justify-between bg-white h-[72px]"
      style={{
        boxShadow: '0px -2px 18px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" />
        <Menu
          className="border-none"
          mode="horizontal"
          disabledOverflow={true}
          items={leftMenuItems}
          selectedKeys={[currentL]}
          onClick={onClickLeftMenu}
        />
      </div>
      <div className="flex items-center">
        <Menu
          className="border-none"
          mode='horizontal'
          disabledOverflow={true}
          items={getRightMenuItems(user, notifications)}
        />
        <AuthLocale
          locale={locale}
          onLocaleChange={onLocaleChange}
        />
      </div>
    </Header>
  );
}

const ProfileAvatar: React.FC = () => {
  return (
    <div className="relative inline-block w-[40px] h-[40px] mt-[6px]">
      <Image src="/images/user.png" layout="responsive" width="40" height="40" />
      <span className="absolute bottom-[1.5px] right-[1.5px] block w-[10px] h-[10px] rounded-full bg-green-400"></span>
    </div>
  )
}