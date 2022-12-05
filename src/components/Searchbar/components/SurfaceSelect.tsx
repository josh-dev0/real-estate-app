import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classNames from 'classnames';
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, InputNumber } from "antd";
import type { InputNumberProps } from 'antd';
import type { IRange } from '@app/types';
import { formatNumber } from "@app/utils";

type SurfaceSelectProps = Partial<Omit<InputNumberProps, 'value' | 'onChange'>> & {
  value?: IRange;
  label: string;
  unit?: string;
  onChange: (val?: IRange) => void;
};

export const SurfaceSelect: React.FC<SurfaceSelectProps> = ({
  className,
  value,
  min,
  max,
  unit,
  label,
  onChange,
  ...inputNumberProps
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const menu = (
    <div className="bg-primary flex items-center justify-center gap-[1.25rem] px-4 py-2 border border-solid border-secondary shadow-el"
      ref={overlayRef}>
      <PriceItem
        label="Minimum"
        unit={unit}
        value={value?.min}
        onChange={val => onChange!({ ...value, min: val as number })}
        {...inputNumberProps}
      />
      <PriceItem
        label="Maximum"
        unit={unit}
        value={value?.max}
        onChange={val => onChange!({ ...value, max: val as number })}
        {...inputNumberProps}
      />
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

  /** format the value(min/max)  */
  const formatCurrentValue = () => {
    const _f = (val: number | undefined) => val ? `${formatNumber(val)} ${unit}` : '';
    return (value?.min || value?.max)
      ? `${_f(value.min)}-${_f(value.max)}`
      : label;
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <Dropdown
      className={classNames("bg-primary py-3", className)}
      overlay={menu}
      trigger={["click"]}
      open={open}
      placement={"bottom"}
    >
      <div
        ref={triggerRef}
        className={classNames("cursor-pointer flex items-center justify-between gap-[2.5rem] pl-4 pr-5 h-[2.625rem] border border-solid rounded-[0.125rem]", {
          "border-gray-200 ": open,
          "border-white": !open,
        })}
        onClick={handleOnClick}
      >
        <label className="cursor-pointer block text-center text-bg-secondary-light font-medium text-xs leading-[1.375rem]">
          {formatCurrentValue()}
        </label>
        <CaretDownOutlined className="text-bg-secondary-light align-middle" />
      </div>
    </Dropdown>
  );
};

type PriceItemProps = {
  label: string;
  unit?: string;
} & InputNumberProps;

const PriceItem: React.FC<PriceItemProps> = ({
  unit, label, defaultValue, ...props
}) => {
  return (
    <div>
      <p className="text-sm leading-2xl text-secondary pb-[0.375rem]">{label}</p>
      <div className="flex items-center justify-center gap-[0.438rem]">
        <InputNumber
          size="small"
          formatter={formatNumber}
          defaultValue={defaultValue || 0}
          {...props}
        />
        <span className="text-secondary text-sm leading-2xl">{unit}</span>
      </div>
    </div>
  )
}