import React, { ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import { Checkbox, Dropdown, Menu } from 'antd';
import type { DropdownProps } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

type PropertyTypeSelectProps = {
  icon: ReactNode;
  options: Array<{ value: string, label: string }>;
  value?: string[];
  placeholder: string;
  onChange: (val: string[]) => void;
} & Partial<DropdownProps>;

export const PropertyTypeSelect: React.FC<PropertyTypeSelectProps> = ({
  className,
  options,
  value,
  placeholder,
  icon,
  onChange,
}) => {
  const handleOnClickOption = useCallback((e: any, val: string) => {
    e.stopPropagation();
    onChange(value?.includes(val)
      ? value.filter(it => it !== val)
      : [...(value || []), val]);
  }, [value, onChange]);

  const ignoreHandler = (e: any) => e.preventDefault();

  const menu = (<Menu
    className="property-type-overlay-menu"
    items={options?.map(option => ({
      key: option.value,
      label:
        <div
          role="button"
          onClick={(e) => handleOnClickOption(e, option.value)}
        >
          <Checkbox
            checked={value?.includes(option.value)}
            onClick={ignoreHandler}
            children={
              <label
                className="cursor-pointer"
                onClick={ignoreHandler}
              >
                {option.label}
              </label>
            }
          />
        </div>
    }))}
  />);

  const labelByValue = useCallback((val?: string) => val
    ? options.find(op => op.value === val)?.label
    : null, [options]);

  const showCurrnetValue = useCallback(() => value?.map(val => labelByValue(val)).join(', ')
    , [value, labelByValue]);

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
        <label
          className={classNames("cursor-pointer block text-center text-secondary font-medium text-xs leading-[1.375rem] text-ellipsis overflow-hidden whitespace-nowrap", {
            "pl-4 pr-1": value?.length
          }
          )}>
          {value?.length ? showCurrnetValue() : placeholder}
        </label>
        <CaretDownFilled className="text-bg-secondary-light align-middle" />
      </div>
    </Dropdown>
  );
};