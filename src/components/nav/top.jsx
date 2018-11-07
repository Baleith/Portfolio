import React from 'react';
import styles from './top.module.css';

export const Top = ({ active = true }) => (
  <div id="top" className={styles.top}>
    <span className={`${active ? styles.active : null} ${styles.span}`}>
      {'Välk'}
      <span className={`${active ? styles.coloredText : null} ${styles.span}`}>o</span>
      <span className={`${active ? styles.coloredText2 : null} ${styles.span}`}>m</span>men
    </span>
  </div>
);
