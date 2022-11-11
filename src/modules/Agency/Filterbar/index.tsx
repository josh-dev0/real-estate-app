import React from 'react';
import { Divider, Rate, Switch, Typography } from 'antd';
import { FilterSelect } from '@app/components';
import type { FilterResult } from './types';
import styles from './styles.module.scss';
import classNames from 'classnames';

const { Text } = Typography;

type SelectOption = {
  key: string;
  label: string;
}

type AgencyFilterbarProps = {
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

export const AgencyFilterbar: React.FC<AgencyFilterbarProps> = ({
  className,
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
    <div className={classNames(styles.container, className)}>
      <Text className="text-sm leading-2xl font-bold text-bg-secondary-light">Total Agencies Found ({data.total})</Text>
      <Divider />
      <section>
        <Text className="text-lg leading-2xl font-bold text-bg-secondary-light">Filter by</Text>
        <div className="flex items-center justify-between mt-[1.625rem]">
          <Text className={styles.filterTitle}>
            Seniority <span className="text-xs">({data.seniority})</span>
          </Text>
          <Switch
            className={classNames("pl-2 pr-1 text-[9px]", styles.switch)}
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
        <Text className={styles.filterTitle}>Ratings <span className="text-xs">({data.rate})</span></Text>
        <div className="flex items-center justify-between pl-3 mt-5">
          <div className="flex items-end gap-[13px]">
            <Rate
              allowHalf={true}
              value={rate}
              onChange={onRateChange}
            />
            <span className="text-secondary-1 text-xl leading-2xl pb-[2px]">{Math.floor(rate)}+</span>
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <Text className={styles.filterTitle}>Service Type <span className="text-xs">(226)</span></Text>
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
        <Text className={styles.filterTitle}>Region <span className="text-xs">({data.region})</span></Text>
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
        <Text className={styles.filterTitle}>Location <span className="text-xs">({data.location})</span></Text>
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