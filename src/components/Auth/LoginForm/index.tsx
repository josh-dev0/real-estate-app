import React from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import { Button, Checkbox, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './styles.module.scss';

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
      className={classNames(styles.form, className)}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <p className="leading-2xl text-lg text-secondary-dark text-center mb-[5.25rem]">Already a customer?</p>
      <Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
        <Input
          className="text-sm leading-[22px]"
          placeholder="Enter username or email"
        />
      </Form.Item>
      <Form.Item
        className="mb-[5px]"
        name={['user', 'email']}
        label="Password"
        rules={[{ type: 'email', required: true }]}
      >
        <Input.Password
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item
        className="mb-[5px]"
        wrapperCol={{ offset: layout.labelCol.span, span: layout.wrapperCol.span }}>
        <Link href="/forgot-password">
          <span className="text-xs leading-[22px] underline text-primary">Forgot password?</span>
        </Link>
      </Form.Item>
      <Form.Item
        className="mb-6"
        wrapperCol={{ offset: layout.labelCol.span, span: layout.wrapperCol.span }}
      >
        <Checkbox className="text-sm leading-[22px] text-icon-1">Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{ offset: layout.labelCol.span, span: layout.wrapperCol.span }}
      >
        <Button
          className={styles.button}
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}