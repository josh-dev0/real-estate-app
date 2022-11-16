import React from 'react';
import classNames from 'classnames';
import { Checkbox, Divider, Rate, Switch, Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { FilterSelect } from '@app/components';
import { toggleInArray } from '@app/utils';
import type { FilterResult } from './types';
import styles from './styles.module.scss';

const { Text } = Typography;

type SelectOption = {
  key: string;
  label: string;
}

export type AgencyFilterValue = {
  isSeniority?: boolean;
  rate?: number;
  serviceType?: string[];
  region?: string[];
  location?: string[];
  agencies: string[];
}

export type AgencyFilterbarProps = {
  data: FilterResult;
  values?: AgencyFilterValue;
  onChange?: (val: AgencyFilterValue) => void;
  serviceTypeOptions: SelectOption[];
  regionOptions: SelectOption[];
  locationOptions: SelectOption[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onRateChange' | 'onChange'>;

export const AgencyFilterbar: React.FC<AgencyFilterbarProps> = ({
  className,
  values,
  onChange,
  data,
  serviceTypeOptions,
  regionOptions,
  locationOptions,
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
            checked={values?.isSeniority}
            onChange={checked => onChange!({ ...values!, isSeniority: checked })}
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
              value={values?.rate}
              onChange={(rate) => onChange!({ ...values!, rate })}
            />
            <span className="text-secondary-1 text-xl leading-2xl pb-[2px]">{Math.floor(values?.rate!)}+</span>
          </div>
        </div>
      </section>
      <Divider />
      <Text className={styles.filterTitle}>Agency Name <span className="text-xs">(226)</span></Text>
      <div className="pl-3 mt-4">
        {
          ['Gonesto inc', 'Immolot inc', 'Immo inc', 'ImmoSoft inc', 'ImmoSphere inc', 'Lotinest inc', 'Monesto inc', 'Sinesto inc'].map(agencyName =>
            <div className="mb-2">
              <Checkbox
                checked={values?.agencies.includes(agencyName)}
                onChange={(e: CheckboxChangeEvent) => onChange!({
                  ...values!,
                  agencies: toggleInArray(values?.agencies, agencyName),
                })}
              >
                <span className="pl-2 text-[0.938rem] leading-2xl text-primary">{agencyName}</span>
              </Checkbox>
            </div>
          )
        }
      </div>

      <Divider />
      <section>
        <Text className={styles.filterTitle}>Service Type <span className="text-xs">(226)</span></Text>
        <FilterSelect
          className="w-full mt-5"
          placeholder="Select Service Type"
          value={values?.serviceType}
          onChange={val => onChange!({ ...values!, serviceType: val })}
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
          value={values?.region}
          onChange={val => onChange!({ ...values!, region: val })}
        />
      </section>
      <Divider />
      <section>
        <Text className={styles.filterTitle}>Location <span className="text-xs">({data.location})</span></Text>
        <FilterSelect
          className="border-none w-full mt-5"
          placeholder="Select Location"
          options={locationOptions}
          value={values?.location}
          onChange={val => onChange!({ ...values!, location: val })}
        />
      </section>
    </div >
  );
}