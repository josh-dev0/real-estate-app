import React from 'react';
import type { MenuProps } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

type MenuItems = MenuProps['items'];

type CustomDropdownProps = {
  label: string;
  items: MenuItems;
  labelClass?: string;
};

export const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, labelClass, items }) => {
  const menu = (<Menu
    items={items}
  />);

  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
    >
      <Space className="text-primary cursor-pointer">
        <label className={labelClass}>{label}</label>
        <CaretDownOutlined className="align-middle" />
      </Space>
    </Dropdown>
  );
}