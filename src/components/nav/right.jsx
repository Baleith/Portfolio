import { bool, func } from 'prop-types';
import React from 'react';
import styles from './right.module.css';

const Right = ({ isActive = false, onClick }) => (
  <aside id="aside-right" className={styles.right}>
    <div className={`${styles.container} ${isActive ? styles.open : null}`}>
      <span
        className={`${styles.span} ${isActive ? styles.setHorizontalText : null}`}
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        {'Contact'}
      </span>

    </div>
  </aside>
);

Right.propTypes = {
  isActive: bool.isRequired,
  onClick: func.isRequired,
};

export default Right;
