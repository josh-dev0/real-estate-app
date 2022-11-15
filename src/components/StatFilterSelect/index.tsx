import classNames from 'classnames';
import { FilterSelect } from '@app/components';
import type { FilterSelectProps } from '@app/components';
import styles from './styles.module.scss';

export type StatFilterSelectProps = {
  wrapperClassName?: string;
  stat: number;
} & FilterSelectProps;

export const StatFilterSelect: React.FC<StatFilterSelectProps> = ({
  wrapperClassName,
  stat,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.container, wrapperClassName)}>
      <FilterSelect {...otherProps} />
      <span className="min-w-[1.5rem] shrink-0 text-right text-secondary text-sm leading-2xl">{stat}</span>
    </div>
  )
}