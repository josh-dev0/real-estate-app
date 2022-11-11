import classNames from 'classnames';
import { Checkbox, Radio, Segmented, Select, Tooltip } from 'antd';
import type { SegmentedValue } from 'antd/lib/segmented';
import { CaretDownFilled } from '@ant-design/icons';
import { DealTypeRadio } from '@app/components';
import { CardModeIcon, HeartIcon, ListModeIcon } from '../icons';
import { DealType, DealPosition } from './types';
import styles from './styles.module.scss';

const VCenter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) =>
  <div className="min-h-[30px] flex flex-col justify-center">
    {children}
  </div>

const viewModeOptions = [
  { value: 'list', label: <VCenter><ListModeIcon /></VCenter> },
  { value: 'card', label: <VCenter><CardModeIcon /></VCenter> },
]

export type AgencyPropertyStatusbarProps = {
  viewMode?: SegmentedValue,
  onViewModeChange?: (val: SegmentedValue) => void;
  sortBy?: string;
  sortByOptions?: { label: string, value: string }[];
  onSortByChange?: (val: string) => void;
  dealType?: DealType;
  onDealTypeChange?: (val: DealType) => void;
  dealPosition?: DealPosition;
  onDealPositionChange?: (val: DealPosition) => void;
  isSelecting?: boolean;
  onToggleSelecting?: () => void;
  allSelected?: boolean;
  onAllSelectedChange?: (val: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * @name AgencyPropertyStatusbar
 * @description to be used in the agency details page/property tab.
 * @todo need to update the background color of heart icon tooltip based on theme color.
 */
export const AgencyPropertyStatusbar: React.FC<AgencyPropertyStatusbarProps> = ({
  className,
  viewMode,
  onViewModeChange,
  sortBy,
  sortByOptions,
  onSortByChange,
  dealType,
  onDealTypeChange,
  dealPosition,
  onDealPositionChange,
  isSelecting,
  onToggleSelecting,
  allSelected,
  onAllSelectedChange,
  ...otherProps
}) => {
  return (
    <div
      className={classNames("flex items-center justify-between w-full bg-primary", styles.container, className)}
      id="custom-status-bar"
      {...otherProps}
    >
      <div className="flex items-center">
        {isSelecting && <Checkbox
          className="mr-7"
          checked={allSelected}
          onChange={e => onAllSelectedChange!(e.target.checked)}
        />}
        <p className={styles.title}>Buyout Listing</p>
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[1.813rem]">
          <div className="flex items-center gap-[1.125rem]">
            <Tooltip
              className="cursor-pointer"
              title="Add to Favorites"
              color="linear-gradient(180deg, #526882 0%, rgba(70, 96, 126, 0) 100%), linear-gradient(180deg, rgba(73, 110, 152, 0.66) 0%, rgba(68, 96, 129, 0.66) 0.01%, rgba(87, 132, 184, 0.66) 32.29%, rgba(124, 164, 210, 0.66) 82.81%, rgba(134, 181, 235, 0.66) 93.75%), linear-gradient(180deg, rgba(255, 255, 255, 0) 39.58%, #CCDCEE 76.56%, #A7CDF8 100%)"
            >
              <HeartIcon
                className={classNames({
                  "block": isSelecting,
                  'hidden': !isSelecting,
                })}
                width="24"
                height="24"
              />
            </Tooltip>
            <div
              className={classNames({
                [styles.checkIconWrapper]: isSelecting,
              })}
              role="button"
              onClick={onToggleSelecting!}
            >
              <ListModeIcon
                className="cursor-pointer"
                width="24"
                height="24"
              />
            </div>
          </div>
          <div className={styles.optionContainer}>
            <DealTypeRadio
              options={[
                { value: 'rent', label: 'Rent' },
                { value: 'buy', label: 'Buy' },
              ]}
              optionType="button"
              value={dealType}
              onChange={e => onDealTypeChange!(e.target.value)}
            />
            <Radio.Group
              options={[
                { value: 'supply', label: 'Supply' },
                { value: 'demand', label: 'Demand' },
              ]}
              value={dealPosition}
              onChange={e => onDealPositionChange!(e.target.value)}
            />
          </div>
        </div>
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
              sortByOptions!.map(option =>
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

export * from './types';