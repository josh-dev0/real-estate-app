import React, { ReactNode } from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd';
import classNames from 'classnames';

type CustomInputProps = {
  icon: ReactNode;
} & InputProps;

/**
 * @name CustomInput
 * @describe input box with icon prefix
 * @deprecated use `CustomAutoComplete` instead
 */
export const CustomInput: React.FC<CustomInputProps> = ({ icon, className, ...props }) => {
  return (
    <div className={classNames(
      "flex items-center border border-solid border-gray rounded-[0.125rem] px-4 py-2",
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