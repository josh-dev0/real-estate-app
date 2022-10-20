import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classNames from 'classnames';
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, InputNumber } from "antd";
import type { InputNumberProps } from 'antd';
import { IRange } from '../../../common/types';

type SurfaceSelectProps = Partial<Omit<InputNumberProps, 'value' | 'onChange'>> & {
  value?: IRange;
  label: string;
  unit?: string;
  icon?: ReactNode;
  position?: string;
  onChange: (val?: IRange) => void;
};

export const SurfaceSelect: React.FC<SurfaceSelectProps> = ({
  className,
  value,
  min,
  max,
  unit,
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
        unit={unit}
        value={value?.min}
        onChange={val => onChange!({ ...value, min: val as number })}
      />
      <PriceItem
        label="Maximum"
        min={min}
        max={max}
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <Dropdown
      className={classNames("bg-primary py-[12px]", className)}
      overlay={menu}
      trigger={["click"]}
      open={open}
      placement={"bottom"}
    >
      <div
        ref={triggerRef}
        className="text-primary cursor-pointer flex items-center justify-between gap-[40px] pl-4 pr-5 h-[52px]"
        onClick={handleOnClick}
      >
        <label className="cursor-pointer block text-center text-bgSecondaryLight font-medium text-xs leading-[22px]">
          {
            (value?.min || value?.max)
              ? `${value.min || ""}-${value.max || ""}`
              : label
          }
        </label>
        <CaretDownOutlined className="text-bgSecondaryLight align-middle" />
      </div>
    </Dropdown>
  );
};

type PriceItemProps = {
  label: string;
  unit?: string;
} & InputNumberProps;

const PriceItem: React.FC<PriceItemProps> = ({
  min, max, unit, defaultValue, value, onChange,
}) => {
  return (
    <div>
      <p className="text-sm leading-[24px] text-secondary pb-[6px]">Minimum</p>
      <div className="flex items-center justify-center gap-[7px]">
        <InputNumber
          size="small"
          min={min || 1}
          max={max || 100}
          defaultValue={defaultValue || 1}
          value={value}
          onChange={onChange}
        />
        <span className="text-secondary text-sm leading-[24px]">{unit}</span>
      </div>
    </div>
  )
}