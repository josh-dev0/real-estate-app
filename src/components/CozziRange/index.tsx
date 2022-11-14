import { ReactNode } from 'react';
import classNames from 'classnames';
import { InputNumber, Slider } from 'antd';
import type { SliderSingleProps, InputNumberProps } from 'antd';
import type { SliderRangeProps } from 'antd/lib/slider';
import styles from './styles.module.scss';


const sliderWrapperId = "Hello-mac"

type InputNumberPropsNeeded = Omit<InputNumberProps, 'value' | 'onChange'>;

export type CozziRangeProps = {
  labelClassName?: string;
  from?: InputNumberPropsNeeded;
  to?: InputNumberPropsNeeded;
  labels?: { min: ReactNode, max: ReactNode }
} & Omit<SliderRangeProps, 'range'>;

/**
 * @name CozziRange
 * @usedAt agency properties filter bar. landing page search bar.
 * @primary Slider
 */
export const CozziRange: React.FC<CozziRangeProps> = ({
  className,
  labelClassName,
  labels,
  from,
  to,
  ...otherProps
}) => {
  const { value, max, onChange } = otherProps;

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div className="block">
          <Title3 className={labelClassName}>{labels?.min || 'Minimum'}</Title3>
          <InputNumber
            size="small"
            value={value![0]}
            onChange={(val) => onChange!([val as number, value![1]])}
            {...from}
          />
        </div>
        <div>
          <Title3 className={labelClassName}>{labels?.max || 'Maximum'}</Title3>
          <InputNumber
            size="small"
            value={value![1]}
            onChange={(val) => onChange!([value![0], val as number])}
            {...to}
          />
        </div>
      </div>
      <div className="relative pt-2 mt-1" id={sliderWrapperId}>
        <Slider
          className="mx-0"
          range={true}
          defaultValue={[0, 1000000]}
          tooltip={{
            open: false,
          }}
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