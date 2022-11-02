import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './styles.module.scss';


const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
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

export type RegisterFormProps = {
  className?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  className,
}) => {

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <p className="text-center text-bg-secondary-dark text-lg leading-2xl">New here?</p>
      <NonFormItem>
        <ul className="text-bg-secondary-dark text-[11px] leading-base list-disc mt-5 pl-3">
          <li>Receive personalised advices for your projects</li>
          <li>Access properties saved in your favorites at any time</li>
        </ul>
      </NonFormItem>
      <Form
        className="mt-9"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Password" rules={[{ type: 'email', required: true }]}>
          <Input.Password
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <NonFormItem className="pl-4 text-xs leading-[20px] text-primary -mt-3">
          <div>8 characters minimum</div>
          <div>1 letter minimum</div>
          <div>1 number minimum</div>
          <div>1 Special character minimum</div>
        </NonFormItem>
        <NonFormItem className="mt-10">
          <Checkbox className="text-sm leading-[22px] text-icon-1">Remember me</Checkbox>
        </NonFormItem>
        <NonFormItem className="mt-4">
          <Checkbox className="text-sm leading-[22px] text-icon-1">Register to our newsletter</Checkbox>
          <p className="ml-5 text-2xs leadiang-[22px] text-icon-1">You'll be notified with deals, advices and promotions.</p>
        </NonFormItem>
        <NonFormItem className="text-2xs leading-[22px] text-icon-1 mt-24 pr-8">
          When clicking on '<i>Create my account</i>', you agree on the {' '}
          <span className="underline"><Link href="">General Terms and Conditions of Use</Link></span>.
        </NonFormItem>
        <NonFormItem className="mt-8">
          <Button
            className={styles.button}
          >Create my account</Button>
        </NonFormItem>
      </Form>
    </div>
  );
}

const NonFormItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) =>
  <Row {...props}>
    <Col
      offset={layout.labelCol.span}
      span={layout.wrapperCol.span}
    >
      {props.children}
    </Col>
  </Row>