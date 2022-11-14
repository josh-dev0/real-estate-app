import classNames from 'classnames';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import styles from './styles.module.scss';

export type StatInputNumberProps = {
  wrapperClassName?: string;
  label: string;
  stat: number;
} & InputNumberProps;

/**
 * @name StatInputNumber
 * @description Input number with stat count.
 * @usedAt agency properties/filter bar
 */
export const StatInputNumber: React.FC<StatInputNumberProps> = ({
  wrapperClassName,
  label,
  stat,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.container, wrapperClassName)}>
      <label className="text-[0.938rem] leading-2xl text-secondary-5">{label}</label>
      <div className="flex items-center gap-[15px]">
        <InputNumber {...otherProps} />
        <span className="text-sm leading-2xl text-secondary">{stat}</span>
      </div>
    </div>
  )
}