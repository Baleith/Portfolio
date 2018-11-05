import React from 'react';
import { bool } from 'prop-types';
import styles from './content.module.css';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Projects } from './projects/projects';

export const Content = ({ moveToRight, moveToLeft, showProjects }) => (
  <div id="content" className={styles.content}>
    <About isOpen={moveToRight} />
    <div className={`
        ${styles.landing}
        ${moveToRight ? styles.moveToRight : null}
        ${moveToLeft ? styles.moveToLeft : null}
        ${showProjects ? styles.removeRight : styles.resetTransform}
      `}
    />
    {showProjects ? <Projects /> : null}
    <Contact isOpen={moveToLeft} />
  </div>
);

Content.propTypes = {
  moveToRight: bool.isRequired,
  moveToLeft: bool.isRequired,
  showProjects: bool.isRequired,
};
