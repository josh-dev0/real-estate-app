import React, { useRef, useState } from 'react';
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

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!',
  },
  string: {
    min: "'${label}' must be at leat ${min} characters",
    max: "'${label}' cannot be longer than ${max} characters",
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
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

  const handleOnValuesChange = (changedValues: any) => {
    if (changedValues.hasOwnProperty('password')) {
      setPasswordValidated(validatePassword(changedValues.password));
    } else if (changedValues.hasOwnProperty('username')) {
      validateUsername(changedValues.username).then(setUsernameValidated)
        .then(() => usernameInputRef.current?.focus());
    }
  }

  const handleOnUsernameInputBlur: React.FocusEventHandler<HTMLInputElement> = (e: any) => {
    setUsernameValidated({ validateStatus: 'validating', hasFeedback: true });
    validateUsernameOnServer(e.target.value).then(setUsernameValidated);
  }

  return (
    <Form
      className={classNames(styles.form, className)}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      onValuesChange={handleOnValuesChange}
      {...otherProps}
    >
      <p className="leading-2xl text-lg text-secondary-dark text-center mb-[5.25rem]">Already a customer?</p>
      <Form.Item
        name="username"
        label="Username"
        // rules={[{ required: true, min: 8 }]}
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