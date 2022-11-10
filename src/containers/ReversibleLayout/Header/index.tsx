import React from 'react';
import { useRouter } from 'next/router'
import { PageHeader } from 'antd';
import type { PageHeaderProps } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import classNames from 'classnames';

export type ReversibleHeaderProps = {
  title: string;
} & Omit<PageHeaderProps, 'title'>;

export const ReversibleHeader: React.FC<ReversibleHeaderProps> = ({
  title,
}) => {
  const router = useRouter()
  const handleOnBack = () => router.back()
  return (
    <PageHeader
      className={classNames("custom-auth-header py-0 h-[73px] flex flex-col justify-center", styles.container)}
      backIcon={<LeftOutlined className="align-sub" />}
      onBack={handleOnBack}
      title={
        <span
          className="text-sm leading-xs text-bg-secondary cursor-pointer"
          role="button"
          onClick={handleOnBack}
        >{title}</span>
      }
      subTitle={<div className="relative w-full flex justify-center items-center text-center font-medium text-sm leading-xs text-bg-secondary-light h-[73px]">
        <img
          src="/logo.png"
          alt="Cozzinest"
          width="60"
        />
      </div>}
    />
  )
}