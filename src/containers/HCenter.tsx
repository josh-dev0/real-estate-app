import React from 'react';
import classNames from 'classnames';

type HCenterProps = React.HTMLAttributes<HTMLDivElement>

export const HCenter: React.FC<HCenterProps> = ({ className, ...props }) =>
  <div
    className={classNames("flex justify-center", className)}
  >
    {props.children}
  </div>