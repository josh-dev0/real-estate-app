import { useState } from 'react';
import classNames from 'classnames';
import { Divider, Rate, Slider, Switch } from 'antd';
import {
  FilterSelect,
  StatCheckbox,
  StatInputNumber,
} from '@app/components';
import styles from './styles.module.scss';

const sliderWrapperId = 'custom-slider-wrapper'

export type AgencyPropertyFilterbarProps = {

} & React.HTMLAttributes<HTMLDivElement>;

export const AgencyPropertyFilterbar: React.FC<AgencyPropertyFilterbarProps> = ({
  className,
  ...otherProps
}) => {
  const [isConstruction, setIsConstruction] = useState(false);
  return (
    <div
      className={classNames(styles.container, className)}
      {...otherProps}
    >
      <section>
        <p className={styles.title1}>Total Properties Found
          <span className="text-sm"> (435)</span>
        </p>
        <img
          className="mt-4"
          src="/images/demo/google-map.png" alt="Google Maps" />
      </section>
      <section className="mt-[1.875rem]">
        <p className={styles.title1}>Filter by</p>
        <Title2 className="mt-3" title="Construction" />
        <div className="pl-4 flex items-center justify-between mt-[1.75rem]">
          <Switch
            className={classNames("pl-2 pr-1 text-[9px]", styles.switch)}
            size="small"
            checkedChildren={<span className="text-[9px]">New</span>}
            unCheckedChildren={<span className="text-[9px]">New</span>}
            checked={isConstruction}
            onChange={setIsConstruction}
          />
          <span className="font-bold text-lg leading-2xl text-secondary-5">(226)</span>
        </div>
        <Divider className="mt-10 mb-8" />
        <div>
          <Title2
            title="Ratings"
            count={205}
          />
          <div className="flex items-center justify-between mt-[1.25rem]">
            <div>
              <Rate
                allowHalf={true}
                value={4.6}
              />
              <span className="ml-4 text-base leading-2xl">4+</span>
            </div>
            <span className="text-[0.688rem] leading-2xl text-secondary-5">(205)</span>
          </div>
        </div>
        <Divider className="mt-10 mb-8" />
        <div className="">
          <Title2
            title="Budget"
            count={226}
          />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <Title3>Minimum &#163;</Title3>
              <Title3>Maximum &#163;</Title3>
            </div>
            <div className="relative" id={sliderWrapperId}>
              <Slider
                className="mx-0"
                min={0}
                max={10000000}
                step={100}
                range={true}
                defaultValue={[0, 1000000]}
                tooltip={{
                  placement: "bottom",
                  // open: true,
                  // getPopupContainer: () => document.getElementById(sliderWrapperId)!,
                  // formatter: (value) => <span className="bg-secondary">{value}</span>
                }}
              />
            </div>
          </div>
        </div>
        <Divider className="mt-10 mb-8" />
        <section>
          <Title2 title="Property Type" count={226} />
          <FilterSelect
            options={[
              { key: 'apartment', label: 'Apartment' },
              { key: 'house', label: 'House' },
              { key: 'apartment1', label: 'Apartment I' },
              { key: 'house1', label: 'House I' },
            ]}
          />
        </section>
        <Divider className="mt-10 mb-8" />
        <section>
          <Title2 title="Location" count={176} />
          <FilterSelect
            options={[
              { key: 'luxemburg-north', label: 'Luxemburg North' },
              { key: 'luxemburg-south', label: 'Luxemburg South' },
              { key: 'luxemburg-east', label: 'Luxemburg East' },
              { key: 'luxemburg-west', label: 'Luxemburg West' },
            ]}
          />
        </section>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Amentities" count={226} />
        <div className="pl-4">
          <StatCheckbox
            wrapperClassName="mt-4"
            label="Furnished"
            stat={200}
          />
          <StatCheckbox
            wrapperClassName="mt-2"
            label="Unfurnished"
            stat={26}
          />
          <StatCheckbox
            wrapperClassName="mt-2"
            label="Renovated"
            stat={26}
          />
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Rooms" count={163} />
        <div className="pl-4">
          <StatInputNumber
            wrapperClassName="mt-5"
            className="w-[3.188rem]"
            label="Bedrooms"
            stat={163}
            size="small"
          />
          <StatInputNumber
            wrapperClassName="mt-5"
            className="w-[3.188rem]"
            label="Kitchens"
            stat={163}
            size="small"
          />
          <StatInputNumber
            wrapperClassName="mt-5"
            className="w-[3.188rem]"
            label="Living Rooms"
            stat={163}
            size="small"
          />
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Energy" count={163} />
        <FilterSelect
          options={[
            { key: 'electricity', label: 'Electricity' },
            { key: 'Gaz', label: 'Gaz' },
          ]}
        />
      </section>
    </div>
  );
}

type Title2Props = {
  title: string;
  count?: number;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Title2: React.FC<Title2Props> = ({
  className,
  title,
  count,
  ...otherProps
}) => (
  <p
    className={classNames(styles.title2, className)}
    {...otherProps}
  >
    {title}
    {count && <span className="text-sm"> ({count})</span>}
  </p>
)

const Title3: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...otherProps
}) => <p className={classNames(styles.title3, className)}>
    {children}
  </p>;