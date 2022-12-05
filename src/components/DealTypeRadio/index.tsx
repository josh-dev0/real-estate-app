import React from 'react';
import type { RadioProps, RadioGroupProps } from 'antd';
import { Radio } from 'antd';
import classNames from 'classnames';
import styles from './styles.module.scss';

type DealItem = {
  value: string;
  label: string;
}

const defaultOptions = [
  { value: 'rent', label: 'Rent' },
  { value: 'buy', label: 'Buy' },
  { value: 'sell', label: 'Sell' },
]

export type DealTypeRadioProps = {
  options?: DealItem[];
} & RadioGroupProps;

export const DealTypeRadio: React.FC<DealTypeRadioProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={classNames("deal-type-radio", styles.container, className)}>
      <Radio.Group
        {...props}
      >
        {
          defaultOptions.map(option =>
            <Radio.Button
              key={option.value}
              className={classNames(styles.radioButton, "text-black font-medium", {
                "bg-focused": option.value === props.value,
                "bg-secondary-1": option.value !== props.value,
              })}
              value={option.value}
            >
              {option.label}
            </Radio.Button>
          )
        }
      </Radio.Group>
    </div>
  );
}