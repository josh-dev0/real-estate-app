
import React, { useState } from 'react';
import { Badge, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';

export const leftMenuItems: MenuProps['items'] = [
  {
    label: 'Menu',
    key: 'menu',
    icon: <MenuOutlined />,
    children: [
      {
        label: 'Buy',
        key: 'menu:buy',
        children: [
          {
            label: 'Buy 1',
            key: 'buy:1',
          },
          {
            label: 'Buy 2',
            key: 'Buy:2',
          },
        ],
      },
      {
        label: 'Rent',
        key: 'menu:rent',
        children: [
          {
            label: 'Rent 1',
            key: 'rent:1',
          },
          {
            label: 'Rent 2',
            key: 'rent:2',
          },
        ],
      },
      {
        label: 'Sell',
        key: 'menu:sell',
        children: [],
      },
      {
        label: 'Services',
        key: 'menu:services',
        children: [
          {
            label: 'Removal',
            key: 'removal',
          },
          {
            label: 'Architecture',
            key: 'menu:services:architecture',
          },
          {
            label: 'Diagnosis',
            key: 'menu:services:diagnosis',
          },
          {
            label: 'Home Staging',
            key: 'menu:services:home-staging',
          },
          {
            label: 'Insurance',
            key: 'menu:services:insurance',
          },
        ],
      },
      {
        label: 'Marketplace',
        key: 'menu:marketplace',
        children: [],
      },
    ],
  },
  {
    label: 'Agencies',
    key: 'agencies',
  },
  {
    label: 'Partners',
    key: 'partners',
  },
  {
    label: 'Pricing',
    key: 'pricing',
  },
  {
    label: 'FAQs',
    key: 'faqs',
  },
];

export const rightMenuItems: MenuProps['items'] = [
  {
    label: 'Estimation tool',
    key: 'r:estimation-tool',
  },
  {
    label: 'Publish',
    key: 'r:publish',
  },
  {
    label: '',
    key: 'r:search',
    icon: <SearchOutlined />,
  },
  {
    label: '',
    key: 'r:notifications',
    icon: <>
      <BellOutlined />
      <span>badge her</span>
    </>
  },
];
