import React from 'react';
import { PageHeader } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const AuthHeader: React.FC = () => {
  return (
    <PageHeader
      className={classNames("custom-auth-header", styles.container)}
      backIcon={<LeftOutlined className="align-sub" />}
      onBack={() => null}
      title={<span className="text-sm leading-xs text-bg-secondary">Back</span>}
      subTitle={<p className="text-center font-medium text-sm leading-xs text-bg-secondary-light">Cozzinest</p>}
    />
  )
}