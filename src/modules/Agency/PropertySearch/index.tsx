import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import type { SegmentedValue } from 'antd/lib/segmented';
import { PropertyDetailsCard } from '@app/components';
import {
  AgencyPropertyFilterbar,
  AgencyPropertyStatusbar
} from '@app/modules/Agency';
import type { DealType, DealPosition, PropertyFilter } from '@app/modules/Agency';
import styles from './styles.module.scss';
import { Pagination } from 'antd';

export type AgencyPropertySearchProps = {

} & React.HTMLAttributes<HTMLDivElement>;

export const AgencyPropertySearch: React.FC<AgencyPropertySearchProps> = ({
  className,
  ...otherProps
}) => {
  // --> status bar
  const [isSelecting, setIsSelecting] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  const [selected, setSelected] = useState<Array<string | number>>([]);
  const [viewMode, setViewMode] = useState<SegmentedValue>('list');
  const [dealType, setDealType] = useState<DealType>('buy');
  const [dealPosition, setDealPosition] = useState<DealPosition>('supply');
  const [sortByOptions, setSortByOptions] = useState([
    { value: 'relevance', label: 'Relevance' },
    { value: 'featured', label: 'Featured' },
    { value: 'newlyAdded', label: 'Newly Added' },
    { value: 'date', label: 'Date' },
    { value: 'lowestPrice', label: 'Lowest Price' },
    { value: 'highestPrice', label: 'Highest Price' },
  ]);
  const [sortBy, setSortBy] = useState('relevance');

  // <-- status bar.
  const [propertyFilter, setPropertyFilter] = useState<PropertyFilter>();

  const handleOnAllSelectedChange = (val: boolean) => {
    setSelected(val ? new Array(10).fill(null).map((_, i) => i) : []);
    setAllSelected(val);
  }

  // when selected cards change.
  useEffect(() => {
    setAllSelected(selected.length === 10 ? true : false);
  }, [selected])

  React.useEffect(() => {
    console.log('property.filter', propertyFilter);
  }, [propertyFilter])

  return (
    <div className={classNames(styles.container, className)} {...otherProps}>
      <AgencyPropertyFilterbar
        values={propertyFilter}
        onChange={setPropertyFilter}
      />
      <section>
        <AgencyPropertyStatusbar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          sortByOptions={sortByOptions}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          dealType={dealType}
          onDealTypeChange={(t) => { setDealType(t); console.log('deal.type.change', t) }}
          dealPosition={dealPosition}
          onDealPositionChange={setDealPosition}
          isSelecting={isSelecting}
          onToggleSelecting={() => setIsSelecting(!isSelecting)}
          allSelected={allSelected}
          onAllSelectedChange={handleOnAllSelectedChange}
        />
        {new Array(10).fill(null).map((_, i) =>
          // TODO: needs to replace the `i` with proper ID.
          <PropertyDetailsCard
            key={i}
            className="mt-7"
            checkable={isSelecting}
            checked={selected.includes(i)}
            onChange={checked => setSelected(checked ? [...selected, i] : selected.filter(it => it !== i))}
          />
        )}
        <Pagination
          className="mt-9 bg-primary py-3 px-9"
          showQuickJumper
          total={85}
          showTotal={total => <span className="pr-3">Total {total} Advertisements</span>}
          defaultPageSize={10}
          defaultCurrent={1}
        />
      </section>
    </div>
  )
}