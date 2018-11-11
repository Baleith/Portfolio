import React from 'react';
import { bool } from 'prop-types';
import styles from './about.module.scss';


export const About = ({ isOpen }) => (
  <div className={`${styles.container} ${isOpen ? styles.isOpening : styles.isClosing}`}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {'Hej,'}
      </h1>
    </div>
    <div className={styles.bodyContainer}>
      <div className={styles.openerText}>
        <p className={styles.italic}>Jag heter <span className={styles.bold}>Jonathan Nilsson</span></p>
        <p className={styles.italic}>Jag letar efter en <span className={styles.bold}>kul</span> och <span className={styles.bold}>lärorik</span> arbetsplats.</p>
      </div>
      <p className={styles.body}>
        Jag är en självlärd utvecklare som tycker det är kul att koda både backend och frontend. 
      </p>
      <p className={styles.body}>
        Mitt mål är att jag ska kunna röra mig självsäkert över hela stacken.
      </p>
    </div>
  </div>
);

About.propTypes = {
  isOpen: bool.isRequired,
};
