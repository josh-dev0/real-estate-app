import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const { Option } = Select;

type CustomSelectProps = {
  icon: ReactNode;
} & SelectProps;

export const CustomSelect: React.FC<CustomSelectProps> = ({ icon, options, className, ...props }) => {
  return (
    <div className={classNames("flex items-center border border-solid border-gray rounded-[2px] px-4 py-[9px]", className)}>
      {icon}
      <Select
        className="grow"
        bordered={false}
        {...props}
      >
        {options!.map(option =>
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>)}
      </Select>
    </div>
  );
}