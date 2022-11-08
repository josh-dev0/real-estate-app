import React, { useState } from 'react';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useSession } from 'next-auth/react';
import type { IdentityType } from '@app/types';
import { locales } from '@app/constants/locale';
import { leftMenuItems, getRightMenuItems } from './menus';
import { AuthLocale } from './AuthLocale';

const { Header } = Layout;

type TopMenuProps = {
  notifications?: number;
  onIdentify?: (identity: IdentityType) => void;
}

export const TopMenu: React.FC<TopMenuProps> = ({
  notifications = 10,
  onIdentify,
}) => {
  const { data: session } = useSession();
  const [currentL, setCurrentL] = useState('mail');
  const [locale, setLocale] = useState(locales[0]); // set first locale as default locale.

  const onClickLeftMenu: MenuProps['onClick'] = e => {
    setCurrentL(e.key);
  };

  return (
    <Header
      className="flex justify-between bg-white h-[4.5rem]"
      style={{
        boxShadow: '0 -0.125rem 1.125rem rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="flex items-center">
        <Link href="/"><img className="w-[65px] h-[65px] cursor-pointer" src="/logo.png" alt="Logo" /></Link>
        <Menu
          className="border-none text-bg-secondary"
          mode="horizontal"
          disabledOverflow={true}
          items={leftMenuItems}
          selectedKeys={[currentL]}
          onClick={onClickLeftMenu}
        />
      </div>
      <div className="flex items-center">
        <Menu
          className="border-none text-bg-secondary"
          mode='horizontal'
          disabledOverflow={true}
          items={getRightMenuItems(session?.user, notifications)}
        />
        <AuthLocale
          locale={locale}
          onLocaleChange={setLocale}
          onIdentify={onIdentify}
        />
      </div>
    </Header>
  );
}
