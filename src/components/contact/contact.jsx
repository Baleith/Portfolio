import React from 'react';
import { bool } from 'prop-types';
import styles from './contact.module.css';
import linkedin from '../../images/linkedin.svg';

export const Contact = ({ isOpen }) => (
  <div className={`${styles.container} ${isOpen ? styles.startTransform : styles.initialTransform}`}>
    <div className={styles.wrapper}>
      <div className={styles.t1}>
        <h1 className={styles.h1}>
          <span className={styles.span} />
          {'Kontakta mig'}
        </h1>
      </div>
      <div className={styles.t3}>
        <p className={styles.p1}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black</p>
        <p className={styles.p2}>Maila mig på KONTAKTA MIG POPUP</p>
        <p className={styles.p3}>jonathan.j.nilsson@gmail.com</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.p2}>eller över</p>
        <div className={styles.imgContainer}>
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  isOpen: bool.isRequired,
};
