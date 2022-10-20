import React from 'react';
import { Button, Checkbox } from 'antd';
import classNames from 'classnames';
import { PropertyTypeSelect } from './components/PropertyTypeSelect';
import { CustomDropdown } from './components/CustomDropdown';
import { CustomAutoComplete } from './components/CustomAutoComplete';
import { NumberSelect } from './components/NumberSelect';
import { PriceSelect } from './components/PriceSelect';
import { BedFilled } from './components/icons';
import {
  AimOutlined,
  EnvironmentFilled,
  EuroCircleOutlined,
  HomeOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import type { PriceRange } from '../../common/types';

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
  price?: PriceRange;
  includeResultsWithoutPictures?: boolean;
  habitableSurface?: string;
  landSurface?: string;
  onLocationSearch?: (val: string) => void;
  onRadiusChange?: (val: string | number | null) => void;
  onPropertyTypeChange?: (val?: string) => void;
  onBedroomsChange?: (val: string | number | null) => void;
  onPriceChange?: (val?: PriceRange) => void;
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
    <div className={classNames("rounded-[4px] overflow-hidden max-w-[1055px] w-full", className)}>
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

        <PropertyTypeSelect
          className="min-w-[100px] bg-primary basis-1/5"
          icon={<HomeOutlined className="text-secondaryLight" />}
          placeholder="Property Type"
          value={propertyType}
          onChange={val => onPropertyTypeChange!(val)}
          options={[
            {
              value: 'all',
              label: 'All'
            },
            {
              value: 'detached',
              label: 'Detached'
            },
            {
              value: 'semi-detached',
              label: 'Semi-detached'
            },
            {
              value: 'flats',
              label: 'Flats'
            },
            {
              value: 'terraced',
              label: 'Terraced'
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

        <PriceSelect
          className="basis-1/5"
          icon={<EuroCircleOutlined className="text-secondaryLight text-lg" />}
          label="Price"
          value={price}
          onChange={onPriceChange!}
        />

        <Button
          className="bg-secondaryLight text-primary border-none h-[52px] text-sm leading-[16px] px-3"
          shape="default"
          icon={<SearchOutlined className="leading-none align-baseline mb-0 h-[14px]" />}
          onClick={onClickSearch}
        >Search</Button>
      </div>
      <div className="flex items-center gap-[60px] pt-[9px] pb-[11px] px-[22px]">
        <Checkbox
          checked={includeResultsWithoutPictures}
          onChange={e => onChangeOfIncludeResultsWithoutPictures!(e.target.checked)}
        >
          <label className="text-bgSecondaryLight text-sm">Include results with no pictures</label>
        </Checkbox>

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