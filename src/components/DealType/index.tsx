import React from 'react';
import type { RadioProps } from 'antd';
import { Radio } from 'antd';
import classNames from 'classnames';
import styles from './styles.module.scss';

type DealItem = {
  value: string;
  label: string;
}

export type DealTypeProps = {
  options?: DealItem[];
} & RadioProps;

const options = [
  { value: 'rent', label: 'Rent' },
  { value: 'buy', label: 'Buy' },
  { value: 'sell', label: 'Sell' },
]

export const DealType: React.FC<DealTypeProps> = ({
  className,
  onChange,
  ...props
}) => {
  return (
    <div className={classNames("deal-type-radio", className)}>
      <Radio.Group
        {...props}
      >
        {
          options.map(option =>
            <Radio.Button
              key={option.value}
              className={classNames(styles.radioButton, "text-black bg-[#f8f8f8] font-medium", {
                "bg-secondary-focused": option.value === props.value,
              })}
              value={option.value}
              onChange={onChange}
            >
              {option.label}
            </Radio.Button>
          )
        }
      </Radio.Group>
    </div>
  );
}