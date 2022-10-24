import React from 'react';
import type { RadioChangeEvent, RadioProps } from 'antd';
import { Radio } from 'antd';
import classNames from 'classnames';

type DealItem = {
  value: string;
  label: string;
}

type DealTypeProps = {
  options?: DealItem[];
} & RadioProps;

const options = [
  { value: 'rent', label: 'Rent' },
  { value: 'buy', label: 'Buy' },
  { value: 'sell', label: 'Sell' },
]

export const DealType: React.FC<DealTypeProps> = ({
  className,
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
              className={classNames("text-black bg-[#f8f8f8] border-[#575656] before:bg-black font-medium", {
                "bg-secondary-focused": option.value === props.value,
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