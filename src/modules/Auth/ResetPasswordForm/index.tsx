import React from 'react';
import classNames from 'classnames';
import { Button, FormProps, Input } from 'antd';
import { Form } from 'antd';
import styles from './styles.module.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const ResetPasswordForm: React.FC<FormProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Form
        {...layout}
        {...otherProps}
      >
        <p className={styles.title}>Reset Password</p>
        <Form.Item
          className={classNames(styles.formItem, 'mt-24')}
          label="New Password"
          name="password"
          colon={false}
          rules={[
            { required: true, message: 'Please input new password!' }
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          className={styles.formItem}
          label="Confirm Password"
          name="cpassword"
          colon={false}
          rules={[
            { required: true, message: 'Please confirm your password!' }
          ]}
        >
          <Input type="password" />
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
          >Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
}