import { CaretDownFilled } from "@ant-design/icons"
import { Select } from "antd"
import type { SelectProps } from 'antd';
import classNames from 'classnames';

const { Option } = Select;

type FilterSelectProps = Omit<SelectProps, 'maxTagCount' | 'mode' | 'showArrow' | 'suffixIcon'>;

export const FilterSelect: React.FC<FilterSelectProps> = ({
  className,
  children,
  options,
  ...otherProps
}) => {
  return (
    <Select
      className={classNames("custom-filter-select w-full mt-5", className)} // custom-filter-select: Don't remove it. Used in antd-supplement.scss
      maxTagCount="responsive"
      mode="multiple"
      showArrow={true}
      suffixIcon={<CaretDownFilled className="text-bg-secondary-light" />}
      {...otherProps}
    >
      {children || options?.map(option => <Option className="custom-filter-select-option" key={option.key}>{option.label}</Option>)}
    </Select>

  )
}