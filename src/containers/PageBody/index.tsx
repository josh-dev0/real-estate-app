import classNames from 'classnames';
import styles from './styles.module.scss';

export type PageBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const PageBody: React.FC<PageBodyProps> = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={classNames(styles.container, className)}
      {...otherProps}>
      {children}
    </div>
  )
}