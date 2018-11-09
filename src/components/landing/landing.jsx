import React from 'react';
import { bool } from 'prop-types';
import styles from './landing.module.css';
import { Contact } from '../contact/contact';
import { About } from '../about/about';
import { WelcomeText } from './welcome-text';

export const Landing = ({ contactActive, aboutActive }) => (
  <div id="landing" className={styles.container}>
    <About isOpen={aboutActive} />
    <WelcomeText aboutActive={aboutActive} contactActive={contactActive} />
    <Contact isOpen={contactActive} />
  </div>
);

Landing.propTypes = {
  aboutActive: bool.isRequired,
  contactActive: bool.isRequired,
};
