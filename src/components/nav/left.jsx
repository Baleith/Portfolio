import React from 'react';
import { bool, func } from 'prop-types';
import styles from './left.module.css';

export const Left = ({ isActive, onClick }) => (
  <aside id="aside-left" className={styles.left}>
    <div className={`${styles.container} ${isActive ? styles.open : null}`}>
      <span
        className={styles.wrapper}
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        <span className={`${isActive ? styles.doubleCrossedText : null}`} />
        {'About'}
      </span>
    </div>
  </aside>
);

Left.propTypes = {
  isActive: bool.isRequired,
  onClick: func.isRequired,
};
