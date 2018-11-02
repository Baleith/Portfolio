import React from 'react';
import styles from './divider.module.css';

export const Divider = () => (
  <div>
    <div className={`${styles.divider} ${styles.dividerFirst}`} />
    <div className={`${styles.divider} ${styles.dividerMiddle}`} />
    <div className={`${styles.divider} ${styles.dividerLast}`} />
  </div>
);
