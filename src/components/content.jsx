import React from 'react';
import { bool } from 'prop-types';
import styles from './content.module.css';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Projects } from './projects/projects';

export const Content = ({ moveToRight, moveToLeft, showProjects }) => (
  <div id="content" className={styles.content}>
    <div className={`
        ${styles.landing}
        ${moveToLeft ? styles.moveToLeft : styles.resetTransform}
        ${showProjects ? styles.removeRight : styles.resetTransform}
      `}
    />

    {moveToRight ? <About /> : null}

    {showProjects ? <Projects /> : null}
    {moveToLeft ? <Contact /> : null}
  </div>
);

Content.propTypes = {
  moveToRight: bool.isRequired,
  moveToLeft: bool.isRequired,
  showProjects: bool.isRequired,
};
