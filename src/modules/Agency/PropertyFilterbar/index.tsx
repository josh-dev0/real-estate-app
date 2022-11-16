import classNames from 'classnames';
import { Divider, Rate, Switch } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
  CozziRange,
  FilterSelect,
  StatCheckbox,
  StatFilterSelect,
  StatInputNumber,
} from '@app/components';
import { toggleInArray } from '@app/utils';
import type { PropertyFilter } from './types';
import { UnitSurfaceSelect } from './components/UnitSurfaceSelect';
import styles from './styles.module.scss';

export * from './components/UnitSurfaceSelect';
export * from './types';

export type AgencyPropertyFilterbarProps = {
  values?: PropertyFilter;
  onChange?: (val: PropertyFilter) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const AgencyPropertyFilterbar: React.FC<AgencyPropertyFilterbarProps> = ({
  className,
  values,
  onChange,
  ...otherProps
}) => {
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
      <section className="mt-[1.875rem] pb-8">
        <p className={styles.title1}>Filter by</p>
        <Title2 className="mt-3" title="Construction" />
        <div className="pl-4 flex items-center justify-between mt-[1.75rem]">
          <Switch
            className={classNames("pl-2 pr-1 text-[9px]", styles.switch)}
            size="small"
            checkedChildren={<span className="text-[9px]">New</span>}
            unCheckedChildren={<span className="text-[9px]">New</span>}
            checked={values?.isConstruction}
            onChange={val => onChange!({ ...values!, isConstruction: val })}
          />
          <span className="font-bold text-lg leading-2xl text-secondary-5">(226)</span>
        </div>
        <Divider className="mt-10 mb-8" />
        <div>
          <Title2 title="Ratings" count={205} />
          <div className="flex items-center justify-between mt-[1.25rem]">
            <div>
              <Rate
                allowHalf={true}
                value={values?.rate || 0}
                onChange={rate => onChange!({ ...values!, rate })}
              />
              <span className="ml-4 text-base leading-2xl">{Math.floor(values?.rate || 0)}+</span>
            </div>
            <span className="text-[0.688rem] leading-2xl text-secondary-5">(205)</span>
          </div>
        </div>
        <Divider className="mt-10 mb-8" />
        <div className="">
          <Title2 title="Budget" count={226} />
          <CozziRange
            className="mt-[1.25rem]"
            min={0}
            max={10000000}
            step={100}
            labels={{
              min: <span>Minimum  &#163;</span>,
              max: <span>Maximum  &#163;</span>
            }}
            value={[values?.budget?.min!, values?.budget?.max!]}
            onChange={val => onChange!({ ...values!, budget: { min: val[0], max: val[1] } })}
          />

        </div>
        <Divider className="mt-10 mb-8" />
        <section>
          <Title2 title="Property Type" count={226} />
          <FilterSelect
            className="mt-5"
            placeholder="Select property type"
            options={[
              { key: 'apartment', label: 'Apartment' },
              { key: 'house', label: 'House' },
              { key: 'apartment1', label: 'Apartment I' },
              { key: 'house1', label: 'House I' },
            ]}
            value={values?.propertyTypes}
            onChange={val => onChange!({ ...values!, propertyTypes: val })}
          />
        </section>
        <Divider className="mt-10 mb-8" />
        <section>
          <Title2 title="Location" count={176} />
          <FilterSelect
            className="mt-5"
            placeholder="Select location"
            options={[
              { key: 'luxemburg-north', label: 'Luxemburg North' },
              { key: 'luxemburg-south', label: 'Luxemburg South' },
              { key: 'luxemburg-east', label: 'Luxemburg East' },
              { key: 'luxemburg-west', label: 'Luxemburg West' },
            ]}
            value={values?.locations}
            onChange={val => onChange!({ ...values!, locations: val })}
          />
        </section>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Amentities" count={226} />
        <div className="pl-3 mt-2">
          {
            ['Furnished', 'Unfurnished', 'Renovated'].map(key =>
              <StatCheckbox
                key={key}
                wrapperClassName="mt-2"
                label={key}
                stat={200}
                checked={values?.amenities?.includes(key)}
                onChange={() => onChange!({ ...values!, amenities: toggleInArray(values?.amenities!, key) })}
              />
            )
          }
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Rooms" count={163} />
        <div className="pl-4">
          {
            [
              { key: 'bedrooms', label: 'Bedrooms' },
              { key: 'kitchens', label: 'Kitchens' },
              { key: 'livingRooms', label: 'Living Rooms' },
            ].map(({ key, label }) =>
              <StatInputNumber
                key={key}
                wrapperClassName="mt-4"
                className="w-[3.188rem]"
                label={label}
                size="small"
                type="number"
                stat={163}
                value={values?.rooms?.[key as keyof PropertyFilter['rooms']]}
                onChange={val => onChange!({
                  ...values!,
                  rooms: { ...values?.rooms!, [key]: val }
                })}
              />
            )
          }
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Energy" count={163} />
        <StatFilterSelect
          wrapperClassName='mt-4'
          placeholder="Select energy"
          stat={163}
          options={[
            { key: 'electricity', label: 'Electricity' },
            { key: 'Gaz', label: 'Gaz' },
          ]}
          value={values?.energy}
          onChange={val => onChange!({ ...values!, energy: val })}
        />
        <Divider className="mt-10 mb-8" />
        <Title2 title="Heater" count={163} />
        <StatFilterSelect
          wrapperClassName='mt-4'
          placeholder="Heater Type I"
          stat={122}
          options={[
            { key: 'gbl-thermostat-control', label: 'Gbl Thermostat Control' },
            { key: 'electricity', label: 'Electricity' },
            { key: 'Gaz', label: 'Gaz' },
          ]}
          value={values?.heater?.[0]}
          onChange={val => onChange!({ ...values!, energy: [val, values?.heater?.[1]] })}
        />
        <StatFilterSelect
          wrapperClassName='mt-2'
          placeholder="Heater Type II"
          stat={41}
          options={[
            { key: 'collective', label: 'Collective' },
            { key: 'electricity', label: 'Electricity' },
            { key: 'Gaz', label: 'Gaz' },
          ]}
          value={values?.heater?.[0]}
          onChange={val => onChange!({ ...values!, energy: [values?.heater?.[0], val] })}
        />
        <Divider className="mt-10 mb-8" />
        <Title2 title="Parking" count={163} />
        <div className="pl-3">
          <StatCheckbox
            wrapperClassName='mt-5'
            stat={200}
            label="Indoor"
            checked={values?.parking?.indoor}
            onChange={(e: CheckboxChangeEvent) => onChange!({ ...values!, parking: { ...values?.parking!, indoor: e.target.checked } })}
          />
          <StatCheckbox
            wrapperClassName="mt-3"
            stat={200}
            label="Outdoor"
            checked={values?.parking?.outdoor}
            onChange={(e: CheckboxChangeEvent) => onChange!({ ...values!, parking: { ...values?.parking!, outdoor: e.target.checked } })}
          />
          <StatInputNumber
            className="w-[3.188rem]"
            wrapperClassName="mt-4"
            size="small"
            type="number"
            stat={163}
            label="Number of space"
            value={values?.parking?.spaces}
            onChange={(val) => onChange!({ ...values!, parking: { ...values?.parking!, spaces: val as number } })}
          />
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Habitable Surface" count={163} />
        <UnitSurfaceSelect
          className="mt-4 pl-3"
          stat={163}
          value={values?.habitableSurface}
          onChange={val => onChange!({ ...values!, habitableSurface: val })}
        />
        <Divider className="mt-10 mb-8" />
        <Title2 title="Land Surface" count={163} />
        <UnitSurfaceSelect
          className="mt-4 pl-3"
          stat={163}
          value={values?.landSurface}
          onChange={val => onChange!({ ...values!, landSurface: val })}
        />
        <Divider className="mt-10 mb-8" />
        <Title2 title="Exterior" count={163} />
        <div className="pl-3">
          {
            ['Terrace', 'Balcony', 'Garden'].map(label =>
              <StatCheckbox
                key={label}
                className="mt-3"
                label={label}
                stat={200}
                checked={values?.exterior?.types.includes(label)}
                onChange={(e: CheckboxChangeEvent) => onChange!({
                  ...values!,
                  exterior: { ...values?.exterior!, types: toggleInArray(values?.exterior?.types, label) }
                })}
              />
            )
          }
          <StatInputNumber
            wrapperClassName="mt-3"
            size="small"
            type="number"
            label="Garages" stat={163}
            value={values?.exterior?.garages}
            onChange={val => onChange!({
              ...values!, exterior: {
                ...values?.exterior!,
                garages: val as number,
              }
            })}
          />
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Local Activities" count={163} />
        <div className="pl-3">
          {
            ['Massage', 'Live Music/Performance', 'SPA', 'Sauna', 'Pub crawls', 'Cinemas', 'Children Playground'].map(label =>
              <StatCheckbox
                key={label}
                className="mt-3"
                labelClassName="text-[0.813rem]"
                label={label} stat={200}
                checked={values?.localActivity?.includes(label)}
                onChange={(e: CheckboxChangeEvent) => onChange!({
                  ...values!,
                  localActivity: toggleInArray(values?.localActivity, label),
                })}
              />
            )
          }
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Location Type" count={163} />
        <div className="pl-3">
          {
            ['Country Side', 'Mountains', 'Sea'].map(label =>
              <StatCheckbox
                key={label}
                className="mt-3"
                label={label} stat={200}
                checked={values?.locationType?.includes(label)}
                onChange={(e: CheckboxChangeEvent) => onChange!({
                  ...values!,
                  locationType: toggleInArray(values?.locationType, label),
                })}
              />
            )
          }
        </div>
        <Divider className="mt-10 mb-8" />
        <Title2 title="Nearby Places" count={163} />
        <div className="pl-3">
          {
            ['Gyms', 'Malls', 'Schools', 'Stations', 'Green Spaces'].map(label =>
              <StatCheckbox
                key={label}
                className="mt-3"
                label={label} stat={200}
                checked={values?.nearbyPlaces?.includes(label)}
                onChange={(e: CheckboxChangeEvent) => onChange!({
                  ...values!,
                  nearbyPlaces: toggleInArray(values?.nearbyPlaces, label),
                })}
              />
            )
          }
        </div>

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