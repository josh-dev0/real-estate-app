import React from 'react';
import { Divider, Rate, Space, Switch, Typography } from 'antd';
import { FilterSelect } from './components/FilterSelect';
import type { FilterResult } from './types';
import styles from './styles.module.scss';

const { Text } = Typography;

type SelectOption = {
  key: string;
  label: string;
}

type FilterbarProps = {
  data: FilterResult;
  isSeniority: boolean;
  onIsSeniorityChange: (checked: boolean) => void;
  rate: number;
  onRateChange: (rate: number) => void;
  serviceType: string[];
  serviceTypeOptions: SelectOption[];
  onServiceTypeChange: (val: string[]) => void;
  region: string[];
  regionOptions: SelectOption[];
  onRegionChange: (val: string[]) => void;
  location: string[];
  locationOptions: SelectOption[];
  onLocationChange: (val: string[]) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onRateChange'>;

export const Filterbar: React.FC<FilterbarProps> = ({
  isSeniority,
  data,
  onIsSeniorityChange,
  rate,
  onRateChange,
  serviceType,
  serviceTypeOptions,
  onServiceTypeChange,
  region,
  regionOptions,
  onRegionChange,
  location,
  locationOptions,
  onLocationChange,
}) => {
  return (
    <div className={styles.container}>
      <Text className="text-sm leading-2xl font-bold text-bg-secondary-light">Total Agencies Found ({data.total})</Text>
      <Divider />
      <section>
        <Text className="text-lg leading-2xl font-bold text-bg-secondary-light">Filter by</Text>
        <div className="flex items-center justify-between mt-[1.625rem]">
          <Text className={styles.filterTitle}>
            Seniority ({data.seniority})
          </Text>
          <Switch
            className="pl-2 pr-1 text-[9px]"
            size="small"
            checkedChildren={<span className="text-[9px]">New</span>}
            unCheckedChildren={<span className="text-[9px]">New</span>}
            checked={isSeniority}
            onChange={onIsSeniorityChange}
          />
        </div>
      </section>
      <Divider />
      <section>
        <Text className={styles.filterTitle}>Ratings ({data.rate})</Text>
        <div className="flex items-center justify-between pl-3 mt-5">
          <Space size={12}>
            <Rate
              allowHalf={true}
              value={rate}
              onChange={onRateChange}
            />
            <span className="text-secondary-1 text-base leading-2xl">{Math.floor(rate)}+</span>
          </Space>
          <span className="text-secondary-5 text-[0.688rem] leading-2xl">({data.rate})</span>
        </div>
      </section>
      <Divider />
      <section>
        <Text className={styles.filterTitle}>Service Type (226)</Text>
        <FilterSelect
          className="w-full mt-5"
          placeholder="Select Service Type"
          value={serviceType}
          onChange={onServiceTypeChange}
          options={serviceTypeOptions}
        />
      </section>
      <Divider />
      <section>
        <Text className={styles.filterTitle}>Region ({data.region})</Text>
        <FilterSelect
          className="w-full mt-5"
          placeholder="Select Region"
          options={regionOptions}
          value={region}
          onChange={onRegionChange}
        />
      </section>
      <Divider />
      <section>
        <Text className={styles.filterTitle}>Location ({data.location})</Text>
        <FilterSelect
          className="border-none w-full mt-5"
          placeholder="Select Location"
          options={locationOptions}
          value={location}
          onChange={onLocationChange}
        />
      </section>
    </div >
  );
}