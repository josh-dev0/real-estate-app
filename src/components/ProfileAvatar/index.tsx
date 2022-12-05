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
} & Omit<AvatarProps, 'backgroundColor'>;

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  containerClassName,
  name,
  backgroundColor,
  status,
  src,
  ...otherProps
}) => {
  const { srcSet } = otherProps;
  const getInitials = (max: number = 2) => {
    return name?.split(' ')
      .map(piece => piece.charAt(0).toUpperCase())
      .join('')
      .substring(0, max);
  }

  return (
    <div className={classNames(styles.container, containerClassName)}>
      <Avatar
        icon={!src && !srcSet && !name ? <UserOutlined /> : null}
        style={{ backgroundColor }}
        children={getInitials()}
        src={src}
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