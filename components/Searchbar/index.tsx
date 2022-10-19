import React from 'react';
import { Button, Checkbox } from 'antd';
import { CustomInput } from './CustomInput';
import { CustomSelect } from './CustomSelect';
import { CustomCheckbox } from './CustomCheckbox';
import { CustomDropdown } from './CustomDropdown';
import { BedFilled } from './icons';
import {
  AimOutlined,
  CaretDownFilled,
  EnvironmentFilled,
  EuroCircleOutlined,
  HomeOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

export const Searchbar: React.FC = () => {
  return (
    <div className="bg-secondaryLight rounded-[4px] overflow-hidden">
      <div className="flex gap-[5px] items-center bg-secondary px-[5px] py-[4px]">
        <CustomInput
          className="bg-primary"
          icon={<EnvironmentFilled />}
          placeholder="Search Location"
        />
        <CustomSelect
          className="min-w-[100px] bg-primary"
          icon={<AimOutlined />}
          placeholder={<div className="text-center">Radius</div>}
          suffixIcon={<CaretDownFilled />}
          options={[
            {
              value: '0-50',
              label: '0-50Km'
            },
            {
              value: '50-100',
              label: '0-50Km'
            },
            {
              value: '100-',
              label: '> 100Km'
            },
          ]}
        />
        <CustomSelect
          className="min-w-[100px] bg-primary"
          icon={<HomeOutlined />}
          placeholder={<div className="text-center">Property Type</div>}
          suffixIcon={<CaretDownFilled />}
          options={[
            {
              value: '0-50',
              label: '0-50Km'
            },
            {
              value: '50-100',
              label: '0-50Km'
            },
            {
              value: '100-',
              label: '> 100Km'
            },
          ]}
        />
        <CustomSelect
          className="min-w-[100px] bg-primary"
          icon={<BedFilled />}
          placeholder={<div className="text-center">Bedrooms</div>}
          suffixIcon={<CaretDownFilled />}
          options={[
            {
              value: '0-50',
              label: '0-50Km'
            },
            {
              value: '50-100',
              label: '0-50Km'
            },
            {
              value: '100-',
              label: '> 100Km'
            },
          ]}
        />
        <CustomSelect
          className="min-w-[100px] bg-primary"
          icon={<EuroCircleOutlined />}
          placeholder={<div className="text-center">Price</div>}
          suffixIcon={<CaretDownFilled />}
          options={[
            {
              value: '0-50',
              label: '0-50Km'
            },
            {
              value: '50-100',
              label: '0-50Km'
            },
            {
              value: '100-',
              label: '> 100Km'
            },
          ]}
        />

        <Button
          className="bg-secondaryLight text-white border-none h-[50px] text-sm leading-[16px] px-3"
          shape="default"
          icon={<SearchOutlined className="leading-none align-baseline mb-0 h-[14px]" />}
        >Search</Button>
      </div>
      <div className="flex items-center gap-[60px] pt-[9px] pb-[11px] px-[22px]">
        <CustomCheckbox
          label="Include results with no pictures"
        />
        <CustomDropdown
          label="Habitable Surface"
          labelClass="block min-w-[120px]"
          items={items as any}
        />
        <CustomDropdown
          label="Land Surface"
          labelClass="block min-w-[100px]"
          items={items as any}
        />
      </div>
    </div>
  );
}