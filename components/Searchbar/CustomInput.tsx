import React, { ReactNode } from 'react';
import { Input } from 'antd';
import classNames from 'classnames';

type CustomInputProps = {
  icon: ReactNode;
} & React.HTMLAttributes<HTMLInputElement>;

export const CustomInput: React.FC<CustomInputProps> = ({ icon, className, ...props }) => {
  return (
    <div className={classNames(
      "flex items-center border border-solid border-gray rounded-[2px] px-4 py-2",
      className)}
    >
      {icon}
      <Input
        bordered={false}
        {...props}
      />
    </div>
  );
}