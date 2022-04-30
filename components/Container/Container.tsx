import * as React from 'react';
import styles from './Container.module.css';
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Container: React.FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Container;
