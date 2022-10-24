import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classNames from 'classnames';
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, InputNumber } from "antd";
import type { InputNumberProps } from 'antd';
import { formatNumber } from '@app/utils';
import { IRange } from '@app/types';

type PriceSelectProps = Partial<Omit<InputNumberProps, 'value' | 'onChange'>> & {
  value?: IRange;
  unit?: string;
  label: string;
  icon?: ReactNode;
  position?: string;
  onChange: (val?: IRange) => void;
};

export const PriceSelect: React.FC<PriceSelectProps> = ({
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
    <div className="bg-primary flex items-center justify-center gap-[20px] px-4 py-2 border border-solid border-secondary shadow-el"
      ref={overlayRef}>
      <PriceItem
        label="Minimum"
        min={min}
        max={max}
        defaultValue={defaultValue}
        unit={unit}
        value={value?.min}
        onChange={val => onChange!({ ...value, min: val as number })}
      />
      <PriceItem
        label="Maximum"
        min={min}
        max={max}
        defaultValue={defaultValue}
        unit={unit}
        value={value?.max}
        onChange={val => onChange!({ ...value, max: val as number })}
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
      className={classNames("bg-primary min-w-[120px] py-[12px]", className)}
      overlay={menu}
      trigger={["click"]}
      open={open}
      placement={"bottom"}
    >
      <div
        ref={triggerRef}
        className="cursor-pointer flex items-center justify-between pl-4 pr-5 h-[52px]"
        onClick={handleOnClick}
      >
        {icon}
        <label className="cursor-pointer block text-center text-secondary font-medium text-xs leading-[22px]">
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
  defaultValue: any;
} & InputNumberProps;

const PriceItem: React.FC<PriceItemProps> = ({
  label, unit, defaultValue, ...props
}) => {
  return (
    <div>
      <p className="text-sm leading-[24px] text-secondary pb-[6px]">{label}</p>
      <div className="flex items-center justify-center gap-[7px]">
        <InputNumber
          size="small"
          formatter={formatNumber}
          defaultValue={defaultValue | 0}
          {...props}
        />
        <span className="text-secondary text-sm leading-[24px]">{unit}</span>
      </div>
    </div>
  )
}