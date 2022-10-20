import React from 'react';
import classNames from 'classnames';
import { CheckOutlined } from './icons';

type CustomCheckboxProps = {
  className?: string;
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
};

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  className,
  label,
  checked,
  onChange
}) => {
  return (
    <div
      className={classNames("flex items-center gap-[0.75rem]", className)}
      onClick={() => onChange(!checked)}
    >
      <div className="border-2 border-solid border-textPrimary rounded-[4px] w-[16px] h-[16px] flex flex-col justify-center">
        {checked && <CheckOutlined />}
      </div>
      <label className="text-primary text-sm">{label}</label>
    </div >
  );
}