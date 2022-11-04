import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import type { AvatarProps } from 'antd';

export type ProfileAvatarProps = {
  name?: string;
  backgroundColor?: string; // to be applied when there's no image url;
} & AvatarProps;

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  backgroundColor,
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
    <Avatar
      style={{ backgroundColor }}
      icon={!src && !srcSet && !name ? <UserOutlined /> : null}
      children={getInitials()}
      {...otherProps}
    />
  );
}