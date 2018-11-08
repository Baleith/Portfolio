import React from 'react';
import { bool } from 'prop-types';
import styles from './landing.module.css';
import { Contact } from '../contact/contact';
import { About } from '../about/about';
import { WelcomeText } from './welcome-text';

export const Landing = ({ homeActive, contactActive, aboutActive }) => (
  <div id="landing" className={styles.container}>
    <About isOpen={aboutActive} />
    <div className={`
        ${styles.landing}
        ${aboutActive ? styles.moveToRight : null}
        ${contactActive ? styles.moveToLeft : null}
        ${homeActive ? styles.removeRight : styles.resetTransform}
      `}
    >
      { !contactActive && !aboutActive ? <WelcomeText /> : null }
    </div>
    <Contact isOpen={contactActive} />
  </div>
);

Landing.propTypes = {
  aboutActive: bool.isRequired,
  contactActive: bool.isRequired,
  homeActive: bool.isRequired,
};
