import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Checkbox, Dropdown, Menu, Select } from 'antd';
import type { DropdownProps } from 'antd';
import { CaretDownFilled, HomeOutlined } from '@ant-design/icons';

const { Option } = Select;

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
  return (
    <Select
      mode="multiple"
      showArrow={true}
      suffixIcon={<CaretDownFilled />}
      style={{ width: '100%' }}
      placeholder={<><HomeOutlined /><span>Property Type</span></>}
      value={value}
      onChange={onChange}
      optionLabelProp="label"
      menuItemSelectedIcon=""
      maxTagPlaceholder="What is this?"
      maxTagTextLength={10}
      tagRender={(props) => <p>Helo</p>}
      tokenSeparators={[","]}

    >
      {
        options.map(option =>
          <Option
            className="property-type-option"
            key={option.value}
            value={option.value}
          >
            <div className="demo-option-label-item">
              <Checkbox
                checked={value?.includes(option.value)}
                children={<label className="cursor-pointer" onClick={(e) => { e.preventDefault() }}>{option.label}</label>}
              />
            </div>
          </Option>
        )}
    </Select>
  );
};