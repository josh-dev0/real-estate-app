import React from 'react';
import Link from 'next/link'
import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text } = Typography;

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

export type LoginFormProps = {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  className,
}) => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      className="bg-primary px-12 py-10"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <p className="text-center mb-[6.25rem]">Already a customer?</p>
      <Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Password" rules={[{ type: 'email', required: true }]}>
        <Input.Password
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Row>
        <Col span={layout.labelCol.span}></Col>
        <Col span={layout.wrapperCol.span}>
          <Link
            className="text-icon-1 font-sm leading-[22px]"
            href="/forgot-password">
            Forgot password?
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col offset={layout.labelCol.span} span={layout.wrapperCol.span}>
          <Checkbox className="text-sm leading-[22px] text-icon-1">Remember me</Checkbox>
        </Col>
      </Row>
      <Row className="mt-6">
        <Col offset={layout.labelCol.span} span={layout.wrapperCol.span}>
          <Button
            className={styles.button}
            type="primary"
          >
            Login
          </Button>
        </Col>
      </Row>
    </Form>
  );
}