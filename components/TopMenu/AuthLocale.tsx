import React, { useState } from 'react';
import { CaretDownOutlined, DownOutlined, GlobalOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { locales } from '../../common/constants/locale';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: "I'm an individual",
      },
      {
        key: '2',
        label: "I'm a Professional"
      },
    ]}
  />
);

const localeMenu = (
  <Menu
    items={locales.map(locale => ({
      key: locale,
      label: locale,
    }))}
  />
);

type AuthLocaleProps = {
  locale: string;
};

export const AuthLocale: React.FC<AuthLocaleProps> = ({ locale: initLocale }) => {
  const [locale, setLocale] = useState(initLocale);

  return (
    <Space direction="horizontal" size="middle">
      <Dropdown overlay={menu}>
        <a className="text-default" onClick={e => e.preventDefault()}>
          <div className="flex items-end">
            <p className="text-center leading-6 mb-0">Hello<br />Identify yourself</p>
            <CaretDownOutlined className="ml-3 mb-1" />
          </div>
        </a>
      </Dropdown>
      <Dropdown overlay={localeMenu}>
        <div>
          <div className="leading-4 flex items-center">
            <GlobalOutlined className="text-3xl" />
            <CaretDownOutlined className="ml-2" />
          </div>
          <span className="block leading-4 text-center text-xs">{locale}</span>
        </div>
      </Dropdown>
    </Space>
  );
}