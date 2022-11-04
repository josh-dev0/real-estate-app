import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import type { AvatarProps } from 'antd';
import classNames from 'classnames';
import styles from './styles.module.scss';

export type ProfileAvatarProps = {
  containerClassName?: string;
  name?: string;
  backgroundColor?: string; // to be applied when there's no image url;
  status?: 'online' | 'away' | 'hidden' | 'dontdisturb';
} & AvatarProps;

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  containerClassName,
  name,
  backgroundColor,
  status,
  ...otherProps
}) => {
  const { src, srcSet } = otherProps;

  const getInitials = (max: number = 2) => {
    return name?.split(' ')
      .map(piece => piece.charAt(0).toUpperCase())
      .join('')
      .substring(0, max);
  }

  return (
    <div className={classNames(styles.container, containerClassName)}>
      <Avatar
        style={{ backgroundColor }}
        icon={!src && !srcSet && !name ? <UserOutlined /> : null}
        children={getInitials()}
        {...otherProps}
      />
      <span
        className={classNames(styles.status, {
          [styles.statusOnline]: status === 'online',
          [styles.statusAway]: status === 'away',
          [styles.statusHidden]: status === 'hidden',
          [styles.statusDontdisturb]: status === 'dontdisturb',
        })}
      ></span>
    </div>
  );
}