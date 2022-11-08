import React from 'react';
import classNames from 'classnames';
import { Input, Segmented, Select } from 'antd';
import type { SegmentedValue } from 'antd/lib/segmented';
import { CaretDownFilled } from "@ant-design/icons";
import { CardModeIcon, ListModeIcon } from './icons';
import styles from './styles.module.scss';

const VCenter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) =>
  <div className="min-h-[30px] flex flex-col justify-center">
    {children}
  </div>

const viewModeOptions = [
  { value: 'list', label: <VCenter><ListModeIcon /></VCenter> },
  { value: 'card', label: <VCenter><CardModeIcon /></VCenter> },
]

export type StatusbarViewMode = 'card' | 'list';

type AgencyStatusbarProps = {
  viewMode: SegmentedValue,
  onViewModeChange: (val: SegmentedValue) => void;
  keyword: string;
  onKeywordChange: (val: string) => void;
  sortBy: string;
  sortByOptions: { label: string, value: string }[];
  onSortByChange: (val: string) => void;
}

export const AgencyStatusbar: React.FC<AgencyStatusbarProps> = ({
  viewMode,
  onViewModeChange,
  keyword,
  onKeywordChange,
  sortBy,
  sortByOptions,
  onSortByChange,
}) => {
  return (
    <div
      className={classNames("flex items-center justify-between w-full bg-primary", styles.container)}
      id="custom-status-bar"
    >
      <p className={styles.title}>Agencies Directory</p>
      <div className="flex items-center gap-[2.5rem]">
        <Input.Search
          className={styles.searchInput}
          placeholder="Search Agency"
          value={keyword}
          onSearch={onKeywordChange}
          size="large"
        />
        <Segmented
          defaultValue="card"
          options={viewModeOptions}
          value={viewMode}
          onChange={onViewModeChange}
        />
        <div className="flex flex-col justify-end">
          <p className="pl-[11px] text-bg-secondary text-sm leading-lg pt-2">Sort by</p>
          <Select
            className="custom-statusbar-select min-w-[9rem] text-[15px] text-secondary"
            bordered={false}
            defaultValue="relevance"
            showArrow={true}
            suffixIcon={<CaretDownFilled className="text-bg-secondary-light" />}
            value={sortBy}
            onChange={onSortByChange}
          >
            {
              sortByOptions.map(option =>
                <Select.Option
                  className="custom-statusbar-select-option"
                  key={option.value}
                >
                  {option.label}
                </Select.Option>)
            }
          </Select>
        </div>
      </div>
    </div>
  );
}
