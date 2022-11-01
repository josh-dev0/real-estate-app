import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, Form, Input, Select } from 'antd';
import { CountrySelect } from './CountrySelect';
import { ICountry } from '@app/types';
import { getCountryList } from '@app/utils/demo';
import styles from './styles.module.scss';

const { Option } = Select;

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export type InformationForm2Props = {

} & React.HTMLAttributes<HTMLDivElement>;

export const InformationForm2: React.FC<InformationForm2Props> = ({
  className,
}) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const countryList = getCountryList();
    setCountries(countryList);
    setCountry(countryList[0].code);
  }, []);

  return (
    <Form className={classNames(styles.container, className)}>
      <p className="text-lg leading-2xl text-bg-secondary-dark">Shall we get acquainted?</p>
      <ul className="list-disc pl-12 mt-7 text-[11px] leading-2xl text-bg-secondary-dark">
        <li>Save time on your next login</li>
        <li>Start messaging owners when you find your dream house</li>
      </ul>
      <Form.Item
        className="mt-11"
        name={['user', 'firstname']}
        rules={[{ required: true }]}
      >
        <Input
          placeholder="Firstname"
        />
      </Form.Item>
      <Form.Item
        name={['user', 'lastname']}
        rules={[{ required: true }]}
      >
        <Input
          placeholder="Lastname"
        />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        rules={[{ required: true }]}
      >
        <Input.Group
          className="flex"
          compact
        >
          <CountrySelect
            className="min-w-[5.4rem]"
            countries={countries}
            value={country}
            onChange={setCountry}
          />
          <Input
            className="border-l-0"
          />
        </Input.Group>
      </Form.Item>
      <Form.Item
        name={['user', 'street']}
        rules={[{ required: true }]}
      >
        <Input
          placeholder="Street"
        />
      </Form.Item>
      <Form.Item
        name={['user', 'address2']}
        rules={[{ required: true }]}
      >
        <Input
          placeholder="address line 2"
        />
      </Form.Item>
      <Form.Item
        name={['user', 'city']}
        rules={[{ required: true }]}
      >
        <Input
          placeholder="City"
        />
      </Form.Item>
      <Form.Item
        name={['user', 'postalCode']}
        rules={[{ required: true }]}
      >
        <Input
          placeholder="Postal Code"
        />
      </Form.Item>
      <Form.Item
        name={['user', 'Country']}
        rules={[{ required: true }]}
      >
        <Select
          className="w-full items-center"
          // defaultValue="lucy"
          // style={{ width: 120 }}
          loading={false}
        >
          <Option value="lucy">Lucy</Option>
        </Select>
      </Form.Item>

      <Button
        className={styles.button}
        block
      >
        Let's go!
      </Button>
    </Form>
  );
}