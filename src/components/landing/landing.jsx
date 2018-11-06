import React from 'react';
import { bool } from 'prop-types';
import styles from './landing.module.css';
import { Contact } from '../contact/contact';
import { About } from '../about/about';
import { WelcomeText } from './welcome-text';

export const Content = ({ moveToRight, moveToLeft, showProjects }) => (
  <div id="landing" className={styles.container}>
    <About isOpen={moveToRight} />
    <div className={`
        ${styles.landing}
        ${moveToRight ? styles.moveToRight : null}
        ${moveToLeft ? styles.moveToLeft : null}
        ${showProjects ? styles.removeRight : styles.resetTransform}
      `}
    >
      { !moveToLeft && !moveToRight && !showProjects ? <WelcomeText /> : null }
    </div>
    <Contact isOpen={moveToLeft} />
  </div>
);

Content.propTypes = {
  moveToRight: bool.isRequired,
  moveToLeft: bool.isRequired,
  showProjects: bool.isRequired,
};
