import { cloneElement } from 'react';
import classNames from 'classnames';

/**
 * @name withExtraClass
 * @description to be used to generate a component from the one passed as props/paramter
 * @returns JSX.Element
 */
export const withExtraClass = (component: JSX.Element, classes: string, otherProps?: any) => {
  const className = classNames(component?.props?.className, classes);
  const props = { className, ...otherProps };
  return cloneElement(component, props);
};