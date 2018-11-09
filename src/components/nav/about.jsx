import React from 'react';
import { bool, func } from 'prop-types';
import styles from './about.module.scss';

export const About = ({ aboutActive, onClick }) => (
  <aside
    id="aside-left"
    className={styles.container}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  >
    <span className={`${aboutActive ? styles.active : styles.inActive} ${styles.span}`}>
      {'Om'}
      <span className={styles.hidden}>x</span>
      {'mig'}
    </span>
  </aside>
);

About.propTypes = {
  aboutActive: bool.isRequired,
  onClick: func.isRequired,
};
