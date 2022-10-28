import { cloneElement } from 'react';
import classNames from 'classnames';

/**
 * @name withExtraClass
 * @description to be used to generate a component from the one passed as props/paramter
 * @returns JSX.Element
 */
export const withExtraClass = (component: JSX.Element, classes: string) => {
  const className = classNames(component?.props?.className, classes);
  const props = { className };
  return cloneElement(component, props);
};