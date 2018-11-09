import React from 'react';
import { bool } from 'prop-types';
import styles from './about.module.css';


export const About = ({ isOpen }) => (
  <div className={`${styles.container} ${isOpen ? styles.isOpening : styles.isClosing}`}>
    <div className={styles.wrapper}>
      <div className={styles.t1}>
        <h1 className={styles.h1}>
          <span className={styles.span} />
          {'Om mig'}
        </h1>
      </div>
      <div className={styles.t3}>
        <p className={styles.p2}>Hej!</p>
        <p className={styles.p1}> Jag heter Jonathan Nilsson, Självlärd webbutvecklare. </p>
        <p className={styles.p3}>Aspirerande fullstack utvecklare.</p>
      </div>
    </div>
  </div>
);

About.propTypes = {
  isOpen: bool.isRequired,
};
