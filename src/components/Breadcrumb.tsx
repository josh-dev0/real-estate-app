import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import type { BreadcrumbProps as AntdBreadcrumbProps } from 'antd';
import { BreadcrumbItem } from '@app/types';

type BreadcrumbProps = {
  items: BreadcrumbItem[];
} & AntdBreadcrumbProps;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, ...otherProps }) => {
  return (
    <AntdBreadcrumb {...otherProps}>
      {
        items.slice(0, items.length - 1).map(item => (
          <AntdBreadcrumb.Item
            key={item.name}
          >
            <a href={item.link}>{item.name}</a>
          </AntdBreadcrumb.Item>
        ))
      }
      <AntdBreadcrumb.Item className="font-bold opacity-[.45]">
        {items[items.length - 1].name}
      </AntdBreadcrumb.Item>
    </AntdBreadcrumb>
  )
}