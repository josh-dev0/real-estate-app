import React from 'react';
import classNames from 'classnames';
import { CheckOutlined } from './icons';

type CustomCheckboxProps = {
  label: string;
} & React.HTMLAttributes<HTMLInputElement>;

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ className, label }) => {
  return (
    <div className={classNames("flex items-center gap-[0.75rem]", className)}>
      <div className="border-2 border-solid border-textPrimary rounded-[4px] px-[3px] py-[5px]">
        <CheckOutlined />
      </div>
      <label className="text-primary text-sm">{label}</label>
    </div>
  );
}