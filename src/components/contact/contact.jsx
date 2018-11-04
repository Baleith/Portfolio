import React from 'react';
import styles from './contact.module.css';
import l from '../../images/l.svg';

export const Contact = () => (
  <div className={styles.container}>
    <div className={styles.t1}><h1 className={styles.h1}>
      <span className={styles.span} />
      {'Kontakta mig'}
    </h1>
    </div>
    <div className={styles.t3}>
    <p className={styles.p1}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black</p>
    <p className={styles.p2}>Maila mig på</p>
    <p className={styles.p3}>jonathan.j.nilsson@gmail.com</p>
    </div>
    <div>
      <p className={styles.p2}>eller över</p>
      <img src={l} />
    </div>
  </div>
);
