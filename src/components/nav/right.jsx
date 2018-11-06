import { bool, func } from 'prop-types';
import React from 'react';
import styles from './right.module.css';

export const Right = ({ isActive, onClick }) => (
  <aside id="aside-right" className={styles.right}>
    <div className={`${styles.container} ${isActive ? styles.open : null}`}>
      <span
        className={styles.wrapper}
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        <span className={`${isActive ? styles.doubleCrossedText : null}`} />
        {'Contact'}
      </span>

    </div>
  </aside>
);

Right.propTypes = {
  isActive: bool.isRequired,
  onClick: func.isRequired,
};
