import React from 'react';
import classNames from 'classnames';
import { AutoComplete, Button, Form, Input, Select } from 'antd';
import styles from './styles.module.scss';

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

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
        // className="mt-11"
        name={['user', 'lastname']}
        rules={[{ required: true }]}
      >
        <Input
          placeholder="Lastname"
        />
      </Form.Item>
      <Form.Item
        // className="mt-11"
        name={['user', 'phone']}
        rules={[{ required: true }]}
      >
        <Input.Group compact>
          <Select defaultValue="Sign Up" style={{ width: '30%' }}>
            <Option value="Sign Up">UK</Option>
            <Option value="Sign In">France</Option>
          </Select>
          <Input style={{ width: '70%' }} defaultValue="Xihu District, Hangzhou" />
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
          className="w-full"
          defaultValue="lucy"
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