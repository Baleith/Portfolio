import React from 'react';
import styles from './top.module.css';

export const Top = () => (
  <div id="top" className={styles.top}>
    <div className={styles.topLeft}>
      <span className={styles.span}>Jonathan Nilsson</span>
    </div>
    <div className={styles.topRight}>
      <div>
        <span className={styles.span}>en</span>
        <span className={`${styles.span} ${styles.spanSwedish}`}>sv</span>
      </div>
    </div>
  </div>
);
