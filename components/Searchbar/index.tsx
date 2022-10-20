import React from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { CustomSelect } from './components/CustomSelect';
import { CustomCheckbox } from './components/CustomCheckbox';
import { CustomDropdown } from './components/CustomDropdown';
import { CustomAutoComplete } from './components/CustomAutoComplete';
import { NumberSelect } from './components/NumberSelect';
import { BedFilled } from './components/icons';
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

type SearchbarProps = {
  locationOptions?: string[];
  radius?: string | number | null;
  propertyType?: string;
  bedrooms?: string | number | null;
  price?: string;
  includeResultsWithoutPictures?: boolean;
  habitableSurface?: string;
  landSurface?: string;
  onLocationSearch?: (val: string) => void;
  onRadiusChange?: (val: string | number | null) => void;
  onPropertyTypeChange?: (val: string) => void;
  onBedroomsChange?: (val: string | number | null) => void;
  onPriceChange?: (val: string) => void;
  onChangeOfIncludeResultsWithoutPictures?: (val: boolean) => void;
  onHabitableSurfaceChange?: (val: string) => void;
  onLandSurfaceChange?: (val: string) => void;
  onClickSearch?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Searchbar: React.FC<SearchbarProps> = ({
  className,
  locationOptions = [],
  radius,
  propertyType,
  bedrooms,
  price,
  includeResultsWithoutPictures,
  onLocationSearch,
  onClickSearch,
  onRadiusChange,
  onPropertyTypeChange,
  onBedroomsChange,
  onPriceChange,
  onChangeOfIncludeResultsWithoutPictures,
}) => {
  return (
    <div className={classNames("bg-secondaryLight rounded-[4px] overflow-hidden max-w-[1055px] w-full", className)}>
      <div className="w-full flex gap-[5px] items-center bg-secondary px-[5px] py-[4px]">
        <CustomAutoComplete
          className="h-[52px] basis-1/5"
          placeholder={<div className="flex items-center h-full px-[7px]"><EnvironmentFilled className="text-base" /><p className="grow text-center">eg. Luxemburg</p></div>}
          optionValues={locationOptions}
          onSearch={onLocationSearch!}
        />

        <NumberSelect
          className="basis-1/5"
          icon={<AimOutlined className="text-secondaryLight text-lg" />}
          label="Radius"
          unit="km"
          value={radius}
          onChange={onRadiusChange}
        />

        <CustomSelect
          className="min-w-[100px] bg-primary basis-1/5"
          icon={<HomeOutlined className="text-secondaryLight" />}
          placeholder={<div className="text-center text-secondary font-medium">Property Type</div>}
          suffixIcon={<CaretDownFilled className="text-bgSecondaryLight" />}
          value={propertyType}
          onChange={e => onPropertyTypeChange!(e.target.value)}
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

        <NumberSelect
          className="basis-1/5"
          icon={<BedFilled className="text-secondaryLight text-lg" />}
          label="Bedrooms"
          unit="Bedrooms"
          value={bedrooms}
          onChange={onBedroomsChange}
        />

        <CustomSelect
          className="min-w-[100px] bg-primary basis-1/5"
          icon={<EuroCircleOutlined className="text-secondaryLight" />}
          placeholder={<div className="text-center text-secondary font-medium">Price</div>}
          suffixIcon={<CaretDownFilled className="text-bgSecondaryLight" />}
          value={price}
          onChange={e => onPriceChange!(e.target.value)}
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
          className="bg-secondaryLight text-primary border-none h-[52px] text-sm leading-[16px] px-3"
          shape="default"
          icon={<SearchOutlined className="leading-none align-baseline mb-0 h-[14px]" />}
          onClick={onClickSearch}
        >Search</Button>
      </div>
      <div className="flex items-center gap-[60px] pt-[9px] pb-[11px] px-[22px]">
        <CustomCheckbox
          label="Include results with no pictures"
          checked={!!includeResultsWithoutPictures}
          onChange={onChangeOfIncludeResultsWithoutPictures!}
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