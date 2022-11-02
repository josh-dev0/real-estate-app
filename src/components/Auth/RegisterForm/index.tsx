import React, { useCallback, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import type { FormProps, InputRef } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {
  validatePassword,
  validateUsername,
  validateUsernameOnServer,
} from '@app/utils/validators';
import type { ValidateResult } from '@app/types';
import styles from './styles.module.scss';


const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
};

export type RegisterFormProps = Omit<FormProps, 'layout'>

export const RegisterForm: React.FC<RegisterFormProps> = ({
  className,
  onFinish,
  ...otherProps
}) => {

  const usernameInputRef = useRef<InputRef>(null);
  const [passwordValidated, setPasswordValidated] = useState<ValidateResult>();
  const [usernameValidated, setUsernameValidated] = useState<ValidateResult>();
  const readyToFinish = useMemo(() =>
    passwordValidated?.validateStatus === 'success' &&
    usernameValidated?.validateStatus === 'success' &&
    usernameValidated?.hasFeedback,
    [usernameValidated, passwordValidated]
  );

  const handleOnValuesChange = (changedValues: any) => {
    if (changedValues.hasOwnProperty('password')) {
      setPasswordValidated(validatePassword(changedValues.password));
    } else if (changedValues.hasOwnProperty('username')) {
      validateUsername(changedValues.username).then(setUsernameValidated)
        .then(() => usernameInputRef.current?.focus());
    }
  }

  const handleOnUsernameInputBlur: React.FocusEventHandler<HTMLInputElement> = (e: any) => {
    if (!e.target.value) {
      return validateUsername(e.target.value).then(setUsernameValidated);
    };
    setUsernameValidated({ validateStatus: 'validating', hasFeedback: true });
    validateUsernameOnServer(e.target.value).then(setUsernameValidated);
  }

  const checkValidateAndFinish = useCallback((values: any) => {
    if (readyToFinish) {
      onFinish!(values);
    }
  }, [readyToFinish, onFinish])

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
        onFinish={checkValidateAndFinish}
        onValuesChange={handleOnValuesChange}
        {...otherProps}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true }]}
          {...usernameValidated}>
          <Input
            className="text-sm leading-[22px]"
            ref={usernameInputRef}
            placeholder="Enter username or email"
            onBlur={handleOnUsernameInputBlur}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label="Password"
          rules={[{ required: true }]}
          {...passwordValidated}>
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
            type="primary"
            htmlType="submit"
            disabled={!readyToFinish}
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