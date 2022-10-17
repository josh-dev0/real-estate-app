import React, { useState } from 'react';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Badge, Layout, Menu } from 'antd';
import { leftMenuItems, rightMenuItems } from './menus';
import { MenuOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { AuthLocale } from './AuthLocale';
import { locales } from '../../common/constants/locale';

const { Header } = Layout;

type TopMenuProps = {
  locale: string;
}

export const TopMenu: React.FC<TopMenuProps> = ({ locale }) => {
  const [currentL, setCurrentL] = useState('mail');

  const onClickLeftMenu: MenuProps['onClick'] = e => {
    setCurrentL(e.key);
  };

  return (
    <Header className="flex justify-between bg-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" />
        <Menu onClick={onClickLeftMenu} selectedKeys={[currentL]} mode="horizontal" items={leftMenuItems} />
      </div>

      <Menu mode='horizontal'>
        <Menu.Item>Estimation Tool</Menu.Item>
        <Menu.Item>Publish</Menu.Item>
        <Menu.Item><SearchOutlined className="text-2xl align-middle" /></Menu.Item>
        <Menu.Item>
          <Badge count={5}>
            <BellOutlined className="text-2xl align-middle" />
          </Badge>
        </Menu.Item>
        <Menu.Item>
          <div className="relative inline-block w-[40px] h-[40px] mt-[6px]">
            <Image src="/images/user.png" layout="responsive" width="40" height="40" />
            <span className="absolute bottom-[1.5px] right-[1.5px] block w-[10px] h-[10px] rounded-full bg-green-400"></span>
          </div>
        </Menu.Item>
      </Menu>
      <AuthLocale locale={locale} />
    </Header>
  );
}