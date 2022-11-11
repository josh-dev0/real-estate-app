import { useState } from 'react';
import classNames from 'classnames';
import type { SegmentedValue } from 'antd/lib/segmented';
import { AgencyPropertyStatusbar } from '@app/modules/Agency';
import type { DealType, DealPosition } from '@app/modules/Agency';
import styles from './styles.module.scss';

export type AgencyPropertySearchProps = {

} & React.HTMLAttributes<HTMLDivElement>;

export const AgencyPropertySearch: React.FC<AgencyPropertySearchProps> = ({
  className,
  ...otherProps
}) => {
  // --> status bar
  const [isSelecting, setIsSelecting] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
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

  return (
    <div className={classNames(styles.container, className)}>
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
        onAllSelectedChange={setAllSelected}
      />
    </div>
  )
}