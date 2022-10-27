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
  placeholder,
  ...otherProps
}) => {
  return (
    <Select
      className={classNames("custom-filter-select text-icon-1 text-xs leading-2xl w-full mt-5", className)} // custom-filter-select: Don't remove it. Used in antd-supplement.scss
      maxTagCount="responsive"
      mode="multiple"
      placeholder={<span className="text-secondary text-xs font-medium leading-[22px]">{placeholder}</span>}
      showArrow={true}
      suffixIcon={<CaretDownFilled className="text-bg-secondary-light" />}
      {...otherProps}
    >
      {
        children ||
        options?.map(option =>
          <Option
            className="custom-filter-select-option text-secondary-6 text-2xs leading-[22px] font-medium"
            key={option.key}
          >
            {option.label}
          </Option>)
      }
    </Select>

  )
}