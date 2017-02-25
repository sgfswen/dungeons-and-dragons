import * as classnames from 'classnames';
import * as React from 'react';

import * as styles from './Box.scss';

export const Box = ({
  children,
  className,
}: {
  children?: JSX.Element;
  className?: string;
}) => (
  <div className={classnames(styles.main, className)}>
    {children}
  </div>
);
