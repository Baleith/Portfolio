import { bool, func } from 'prop-types';
import React from 'react';
import styles from './contact.module.scss';

export const Contact = ({ contactActive, onClick }) => (
  <aside
    id="aside-right"
    className={styles.container}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  >
    <span className={`${contactActive ? styles.active : styles.inActive} ${styles.span}`}>
      {'kontakt'}
    </span>
  </aside>
);

Contact.propTypes = {
  contactActive: bool.isRequired,
  onClick: func.isRequired,
};
