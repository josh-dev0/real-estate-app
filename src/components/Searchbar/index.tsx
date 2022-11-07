import React from 'react';
import { Button, Checkbox } from 'antd';
import classNames from 'classnames';
import { PropertyTypeSelect2 } from './components/PropertyTypeSelect2';
import { CustomAutoComplete } from './components/CustomAutoComplete';
import { NumberSelect } from './components/NumberSelect';
import { PriceSelect } from './components/PriceSelect';
import { SurfaceSelect } from './components/SurfaceSelect';
import { BedFilled } from './components/icons';
import {
  AimOutlined,
  EnvironmentFilled,
  EuroCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import type { IRange } from '../../types';
import styles from './styles.module.scss';

const basis = {
  location: '17%',
  radius: '17%',
  propertyType: '17%',
  bedrooms: '30%',
  price: '17%',
};

type SearchbarProps = {
  locationOptions?: string[];
  radius?: string | number | null;
  propertyType?: string[];
  bedrooms?: string | number | null;
  price?: IRange;
  includeResultsWithoutPictures?: boolean;
  habitableSurface?: IRange;
  landSurface?: IRange;
  onLocationSearch?: (val: string) => void;
  onRadiusChange?: (val: string | number | null) => void;
  onPropertyTypeChange?: (val: string[]) => void;
  onBedroomsChange?: (val: string | number | null) => void;
  onPriceChange?: (val: IRange) => void;
  onChangeOfIncludeResultsWithoutPictures?: (val: boolean) => void;
  onHabitableSurfaceChange?: (val?: IRange) => void;
  onLandSurfaceChange?: (val?: IRange) => void;
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
  habitableSurface,
  landSurface,
  onLocationSearch,
  onClickSearch,
  onRadiusChange,
  onPropertyTypeChange,
  onBedroomsChange,
  onPriceChange,
  onChangeOfIncludeResultsWithoutPictures,
  onHabitableSurfaceChange,
  onLandSurfaceChange,
}) => {
  return (
    <div className={classNames("max-w-[65.938rem] w-full", className)}>
      <div className={styles.topFilter}>
        <CustomAutoComplete
          className="h-[3.25rem] basis-[17%]"
          placeholder={<div className="flex items-center h-full px-[0.438rem]"><EnvironmentFilled className="text-base" /><p className="grow text-xs text-secondary text-center">Location</p></div>}
          optionValues={locationOptions}
          onSearch={onLocationSearch!}
        />
        <NumberSelect
          className="basis-[17%]"
          icon={<AimOutlined className={styles.filterIcon} />}
          label="Radius"
          unit="km"
          value={radius}
          onChange={onRadiusChange}
        />
        <PropertyTypeSelect2
          className="min-w-[6.25rem] basis-[17%] h-[52px] bg-primary grow"
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
          className="basis-[23%]"
          icon={<BedFilled className={styles.filterIcon} />}
          label="Bedrooms"
          unit="Bedrooms"
          value={bedrooms}
          onChange={onBedroomsChange}
        />
        <PriceSelect
          className="basis-[17%]"
          icon={<EuroCircleOutlined className={styles.filterIcon} />}
          label="Price"
          value={price}
          unit="EUR"
          onChange={onPriceChange!}
        />
        <Button
          className="bg-secondary-light text-bg-primary border-none h-[3.25rem] text-sm leading-base px-3"
          shape="default"
          icon={<SearchOutlined className="leading-none align-baseline mb-0 h-[0.875rem]" />}
          onClick={onClickSearch}
          children="Search"
        />
      </div>
      <div className="flex items-center gap-[3.75rem] pt-[0.563rem] pb-[0.688rem] px-[1.375rem]">
        <Checkbox
          checked={includeResultsWithoutPictures}
          onChange={e => onChangeOfIncludeResultsWithoutPictures!(e.target.checked)}
          children={<label className="text-bg-secondary-light text-sm">Include results with no pictures</label>}
        />
        <SurfaceSelect
          label="Habitable Surface"
          unit="Sqm"
          value={landSurface}
          onChange={onLandSurfaceChange!}
        />
        <SurfaceSelect
          label="Land Surface"
          unit="Sqm"
          value={habitableSurface}
          onChange={onHabitableSurfaceChange!}
        />
      </div>
    </div>
  );
}