import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
import {
  EnvironmentFilled,
} from '@ant-design/icons';
import { usePrevious } from '../../../common/hooks/usePrevious';

type CustomAutoCompleteProps = {
  optionValues: string[];
} & AutoCompleteProps;

export const CustomAutoComplete: React.FC<CustomAutoCompleteProps> = ({
  className,
  placeholder,
  optionValues,
  onSearch,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const prevInputValue = usePrevious(inputValue);

  const options = useMemo(() => optionValues.map(value => ({
    value,
    label: (<div className="flex items-center">
      <p>
        <EnvironmentFilled className="align-middle text-sm text-icon mr-3" />
        {value}</p>
    </div>)
  })), [optionValues]);

  const handleOnFocus = () => options.length && setOpen(true);
  const handleOnSelect = useCallback((val: string) => {
    setOpen(false);
    prevInputValue !== inputValue && setInputValue(val);
  }, [prevInputValue, inputValue]);

  useEffect(() => {
    onSearch!(inputValue);
  }, [inputValue]);

  return (
    <AutoComplete
      className={className}
      popupClassName="pl-[6px] py-3"
      style={{ minWidth: 180 }}
      open={open}
      options={options}
      placeholder={placeholder}
      onChange={val => setInputValue(val)}
      onFocus={handleOnFocus}
      onSelect={handleOnSelect}
      onBlur={() => setOpen(false)}
      {...props}
    />
  );
};
