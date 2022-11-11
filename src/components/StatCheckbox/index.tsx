import { ReactNode } from 'react';
import classNames from 'classnames';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import styles from './styles.module.scss';

export type StatCheckboxProps = {
  wrapperClassName?: string;
  labelClassName?: string;
  label: ReactNode;
  stat: number;
} & Omit<CheckboxProps, 'children'>;

export const StatCheckbox: React.FC<StatCheckboxProps> = ({
  wrapperClassName,
  labelClassName,
  label,
  stat,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.container, wrapperClassName)}>
      <Checkbox {...otherProps}>
        <span className={classNames(styles.label, labelClassName)}>{label}</span>
      </Checkbox>
      <span className="font-bold text-sm leading-2xl text-bg-secondary-4">({stat})</span>
    </div>
  );
}