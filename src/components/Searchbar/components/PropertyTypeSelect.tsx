import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Dropdown, Menu } from 'antd';
import type { DropdownProps } from 'antd';
import { CaretDownFilled, HomeOutlined } from '@ant-design/icons';

type PropertyTypeSelectProps = {
  icon: ReactNode;
  options: Array<{ value: string, label: string }>;
  value?: string;
  placeholder: string;
  onChange: (val: string) => void;
} & Partial<DropdownProps>;

export const PropertyTypeSelect: React.FC<PropertyTypeSelectProps> = ({
  className,
  options,
  value,
  placeholder,
  icon,
  onChange,
}) => {
  const menu = (<Menu
    items={options?.map(option => ({
      key: option.value,
      label: <div className="flex items-center px-4">
        <HomeOutlined className="align-middle text-sm text-icon mr-3" />
        {option.label}
      </div>
    }))}
    onClick={val => onChange(val.key)}
  />);

  const labelByValue = (val?: string) => val
    ? options.find(op => op.value === val)?.label
    : null;

  return (
    <Dropdown
      className={classNames("bg-primary min-w-[7.5rem] py-3", className)}
      overlay={menu}
      trigger={["click"]}
      placement={"bottom"}
    >
      <div
        className="cursor-pointer flex items-center justify-between pl-4 pr-5 h-[3.25rem]"
      >
        {icon}
        <label className="cursor-pointer block text-center text-secondary font-medium text-xs leading-[1.375rem]">
          {labelByValue(value) || placeholder}
        </label>
        <CaretDownFilled className="text-bg-secondary-light align-middle" />
      </div>
    </Dropdown>
  );
};