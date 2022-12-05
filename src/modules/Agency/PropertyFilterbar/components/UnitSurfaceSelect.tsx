import classNames from 'classnames';
import { Col, InputNumber, Row, Select } from "antd"
import { CaretDownFilled } from '@ant-design/icons';
import type { Surface } from '@app/types';
import styles from '../styles.module.scss';

const columnLayout = {
  left: { xs: 8 },
  middle: { xs: 12 },
  right: { xs: 4 },
};

export type UnitSurfaceSelectSelectProps = {
  className?: string;
  value?: Surface;
  onChange?: (val: Surface) => void;
  stat?: number | string;
}

export const UnitSurfaceSelect: React.FC<UnitSurfaceSelectSelectProps> = ({
  className,
  value,
  onChange,
  stat,
}) => {
  return (
    <Row
      className={className}
      align="middle"
      gutter={[5, 16]}
    >
      <Col {...columnLayout.left}>
        <span className={styles.title3}>Unit</span>
      </Col>
      <Col {...columnLayout.middle}>
        <Select
          className="w-full custom-filter-select"
          size="small"
          placeholder="Unit"
          suffixIcon={<CaretDownFilled className="text-bg-secondary-light" />}
          options={[
            { value: 'sqm', label: <span>m<sup>2</sup></span> },
            { value: 'sqft', label: <span>ft<sup>2</sup></span> },
          ]}
          value={value?.unit}
          onChange={val => onChange!({ ...value!, unit: val })}
        />
      </Col>
      <Col {...columnLayout.right}></Col>

      <Col {...columnLayout.left}>
        <span className={styles.title3}>Surface</span>
      </Col>
      <Col {...columnLayout.middle}>
        <InputNumber
          className="w-full"
          size="small"
          type="number"
          value={value?.value}
          onChange={val => onChange!({ ...value!, value: val })}
        />
      </Col>
      <Col {...columnLayout.right}>
        <p className={classNames(styles.title3, "text-right")}>{stat}</p>
      </Col>
    </Row>
  )
}