import { ReactNode } from 'react';
import classNames from 'classnames';
import { InputNumber, Slider } from 'antd';
import type { InputNumberProps } from 'antd';
import type { SliderRangeProps } from 'antd/lib/slider';
import styles from './styles.module.scss';

// type InputNumberPropsNeeded = Omit<InputNumberProps, 'value' | 'onChange'>;

export type CozziRangeProps = {
  labelClassName?: string;
  labels?: { min: ReactNode, max: ReactNode };
  onChange?: (val: [number, number]) => void;
} & Omit<SliderRangeProps, 'range' | 'onChange'>;

/**
 * @name CozziRange
 * @usedAt agency properties filter bar. landing page search bar.
 * @primary Slider
 */
export const CozziRange: React.FC<CozziRangeProps> = ({
  className,
  labelClassName,
  labels,
  value,
  onChange,
  ...otherProps
}) => {
  const { max } = otherProps;
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div className="block">
          <Title3 className={labelClassName}>{labels?.min || 'Minimum'}</Title3>
          <InputNumber
            size="small"
            value={value![0]}
            onChange={(val) => onChange!([val as number, value![1]])}
          />
        </div>
        <div>
          <Title3 className={labelClassName}>{labels?.max || 'Maximum'}</Title3>
          <InputNumber
            size="small"
            value={value![1]}
            onChange={(val) => onChange!([value![0], val as number])}
          />
        </div>
      </div>
      <div className="relative pt-2 mt-1">
        <Slider
          className="mx-0"
          range={true}
          tooltip={{
            open: false,
          }}
          value={value}
          onChange={onChange}
          {...otherProps}
        />
        <p className={styles.maxValue}>{max?.toLocaleString()}</p>
      </div>
    </div>
  )
}

const Title3: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...otherProps
}) => <p className={classNames(styles.title3, className)} {...otherProps}>
    {children}
  </p>;