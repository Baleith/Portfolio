import React from 'react';
import styles from './divider.module.scss';

export const Divider = (props) => (
  <div className={props.type === 'even' ? styles.even : styles.odd}>
    <div className={`${styles.divider} ${styles.dividerFirst}`} />
    <div className={`${styles.divider} ${styles.dividerMiddle}`} />
    <div className={`${styles.divider} ${styles.dividerLast}`} />
  </div>
);
