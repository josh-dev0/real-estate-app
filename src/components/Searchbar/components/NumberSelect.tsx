import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classNames from 'classnames';
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, InputNumber } from "antd";
import type { InputNumberProps } from 'antd';

type NumberSelectProps = {
  unit: string;
  value?: string | number | null;
  label: string;
  icon?: ReactNode;
  position?: string;
} & Partial<InputNumberProps>;

export const NumberSelect: React.FC<NumberSelectProps> = ({
  className,
  value,
  unit,
  min,
  max,
  defaultValue,
  label,
  icon,
  onChange,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const menu = (
    <div className="bg-primary flex items-center justify-center px-4 py-2 border border-solid border-secondary shadow-el"
      ref={overlayRef}>
      <InputNumber
        min={min || 1}
        max={max || 100}
        defaultValue={defaultValue || 1}
        value={value}
        onChange={onChange}
      />
      <span className="ml-5">{unit}</span>
    </div>
  );

  const handleOnClick = useCallback((e: any) => {
    e.preventDefault();
    setOpen(!open);
  }, [setOpen, open]);

  const handleClickOutside = (e: any) => {
    if (!overlayRef.current?.contains(e.target) && !triggerRef.current?.contains(e.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <Dropdown
      className={classNames("bg-primary min-w-[7.5rem] py-3", className)}
      overlay={menu}
      trigger={["click"]}
      open={open}
      placement={"bottom"}
    >
      <div
        ref={triggerRef}
        className="cursor-pointer flex items-center justify-between pl-4 pr-5 h-[3.25rem]"
        onClick={handleOnClick}
      >
        {icon}
        <label className="cursor-pointer block text-center text-secondary font-medium text-xs leading-[1.375rem]">
          {value ? `${value} ${unit}` : label}
        </label>
        <CaretDownOutlined className="text-bg-secondary-light align-middle" />
      </div>
    </Dropdown>
  );
};
