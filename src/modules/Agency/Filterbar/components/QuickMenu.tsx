import classNames from 'classnames';
import { DeleteOutlined, FormOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import type { MenuProps, DropdownProps } from 'antd';

export type QuickMenuProps = {
  onReset?: () => void;
} & Omit<DropdownProps, 'overlay' | 'placement' | 'arrow'>;

export const QuickMenu: React.FC<QuickMenuProps> = ({
  className,
  onReset,
  ...props
}) => {
  const items: MenuProps['items'] = [
    {
      key: 'save-search',
      label: (
        <div className="flex w-full items-center gap-[0.8rem] py-1 text-sm text-secondary-7 px-4">
          <FormOutlined className="text-lg" /> Save this search
        </div>
      ),
    },
    {
      key: 'reset-filter',
      label: (
        <div className="flex w-full items-center gap-[0.8rem] py-1 text-sm text-secondary-7 px-4"
          role="button"
          onClick={onReset}
        >
          <DeleteOutlined className="text-lg" /> Reset Filter
        </div>
      ),
      onClick: onReset,
    },
  ];

  return (
    <Dropdown
      className={classNames("", className)}
      trigger={['click']}
      overlay={
        <Menu className="py-3 rounded-md mr-4" items={items} />
      }
      placement="bottomRight"
      arrow={false}
      {...props}
    >
      <Button className="px-2 bg-primary border-none"><MoreOutlined /></Button>
    </Dropdown>
  )
}