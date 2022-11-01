import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import type { ICountry } from '@app/types';
import styles from './styles.module.scss';

export type CountrySelectProps = {
  countries: ICountry[];
} & Omit<SelectProps, 'options' | 'optionLabelProp'>;

export const CountrySelect: React.FC<CountrySelectProps> = ({
  className,
  countries,
  ...otherProps
}) => {
  const options = useMemo(() => countries.map(country => ({
    value: country.code,
    label:
      <div className={classNames("flex items-center flex-nowrap gap-[5px]", styles.option)}>
        <img className={styles.countryFlag} src={country.flag} alt={country.name} />
        <span className="text-xs leading-[22px] text-secondary-6">{country.code}</span>
      </div>
  })), [countries]);

  return (
    <Select
      className={className}
      options={options}
      optionLabelProp="label"
      {...otherProps}
    />

  );
}