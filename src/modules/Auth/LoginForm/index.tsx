import React, { useCallback, useMemo, useRef, useState } from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import { Button, Checkbox, Form, Input } from 'antd';
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
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export type LoginFormProps = Omit<FormProps, 'layout'>

export const LoginForm: React.FC<LoginFormProps> = ({
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
    <Form
      className={classNames(styles.form, className)}
      {...layout}
      onFinish={checkValidateAndFinish}
      onValuesChange={handleOnValuesChange}
      {...otherProps}
    >
      <p className="leading-2xl text-lg text-secondary-dark text-center mb-[5.25rem]">Already a customer?</p>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true }]}
        {...usernameValidated}
      >
        <Input
          className="text-sm leading-[22px]"
          ref={usernameInputRef}
          placeholder="Enter username or email"
          onBlur={handleOnUsernameInputBlur}
        />
      </Form.Item>
      <Form.Item
        className="mb-[5px]"
        name="password"
        label="Password"
        rules={[{ required: true }]}
        {...passwordValidated}
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
        className="mb-5"
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: layout.labelCol.span, span: layout.wrapperCol.span }}
      >
        <Checkbox className="text-sm leading-[22px] text-icon-1">Remember me</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: layout.labelCol.span, span: layout.wrapperCol.span }}>
        <Button
          className={styles.button}
          type="primary"
          htmlType="submit"
          disabled={!readyToFinish}
        >Login</Button>
      </Form.Item>
    </Form>
  );
}