import React, { useRef } from 'react';
import classNames from 'classnames';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { CaretDownFilled, HomeOutlined } from '@ant-design/icons';

const { Option } = Select;

type PropertyTypeSelect2Props = {
  options: Array<{ value: string, label: string }>;
  value?: string[];
  onChange: (val: string[]) => void;
} & Partial<SelectProps>;

export const PropertyTypeSelect2: React.FC<PropertyTypeSelect2Props> = ({
  className,
  options,
  placeholder,
  ...otherProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={classNames("custom-property-type-select-2 relative z-50 flex items-center bg-primary pl-4 gap-[0.5rem]", className)}
      ref={containerRef}
      id="property-type-select-container"
    >
      <HomeOutlined className="text-icon text-xl" />
      <Select
        className={classNames("w-full text-xs leading-2xl text-icon-1")}
        bordered={false}
        dropdownStyle={{ minWidth: containerRef.current?.clientWidth }}
        getPopupContainer={() => document.getElementById('property-type-select-container')!}
        maxTagCount="responsive"
        mode="multiple"
        optionLabelProp="label"
        placeholder={
          <span className="block text-center text-xs leadning-[22px] text-secondary pr-8">
            {placeholder}
          </span>
        }
        placement="bottomRight"
        showArrow={true}
        suffixIcon={<CaretDownFilled className="text-bg-secondary-light text-sm pr-2" />}
        {...otherProps}
      >
        {options.map(option =>
          <Option key={option.value}>
            <span className="text-secondary-6 text-2xs leading-[22px] font-medium">{option.label}</span>
          </Option>
        )}
      </Select>
    </div >
  );
};