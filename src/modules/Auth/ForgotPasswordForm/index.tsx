import React from 'react';
import classNames from 'classnames';
import { Button, FormProps, Input } from 'antd';
import { Form } from 'antd';
import styles from './styles.module.scss';

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
};

export const ForgotPasswordForm: React.FC<FormProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Form
        {...layout}
        {...otherProps}
      >
        <p className={styles.title}>Struggle to login</p>
        <Form.Item
          className={styles.formItem}
          label={<span className="w-20 text-left">Email</span>}
          name="email"
          colon={false}
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className={styles.formItem}
          wrapperCol={{ offset: layout.labelCol.span, span: layout.wrapperCol.span }}
          colon={false}>
          <Button
            className={styles.button}
            type="primary"
            htmlType="submit"
            disabled={false}
          >Reset my password</Button>
        </Form.Item>
      </Form>
    </div>
  );
}