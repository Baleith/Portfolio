import React from 'react';
import { bool, func } from 'prop-types';
import styles from './bottom.module.css';

export const Bottom = ({ isActive, onClick }) => (
  <footer className={styles.footer}>
    <div className={`${isActive ? styles.open : null}`}>
      <span
        className={`${styles.span} ${isActive ? styles.active : null}`}
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        {'Projects'}
      </span>
    </div>
  </footer>
);

Bottom.propTypes = {
  isActive: bool.isRequired,
  onClick: func.isRequired,
};
