import { useMemo } from 'react';
import classNames from 'classnames';
import { Tabs } from "antd";
import type { TabsProps } from 'antd';
import styles from './styles.module.scss';

const ItemLabelWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) =>
  <p className={styles.item}>{children}</p>

export const CozziTabs: React.FC<TabsProps> = ({
  className,
  items,
  ...otherProps
}) => {
  const formattedItems = useMemo(() => items!.map(item => ({
    ...item,
    label: <ItemLabelWrapper>{item.label}</ItemLabelWrapper>
  })), [items]);

  return (
    <Tabs className={classNames(styles.container, className)}
      items={formattedItems}
      {...otherProps}
    />
  );
}