import React from 'react';
import { bool } from 'prop-types';
import styles from './content.module.css';
import { Contact } from './contact/contact';
import { About } from './about/about';
import ProjectContainer from '../containers/projectContainer';

const Content = ({ moveToRight, moveToLeft, showProjects }) => (
  <div id="content" className={styles.content}>
    <div className={styles.left}>
      <div className={`
        ${styles.leftOuterLayer}
        ${moveToRight ? styles.moveToRight : styles.resetTransform}
        ${showProjects ? styles.removeLeft : styles.resetTransform}
        `}
      />
    </div>
    {moveToRight ? <About /> : null}

    {showProjects ? <ProjectContainer /> : null}

    <div className={styles.right}>
      <div className={`
        ${styles.rightOuterLayer}
        ${moveToLeft ? styles.moveToLeft : styles.resetTransform}
        ${showProjects ? styles.removeRight : styles.resetTransform}
      `}
      />
    </div>
    {moveToLeft ? <Contact /> : null}
  </div>
);

Content.propTypes = {
  moveToRight: bool.isRequired,
  moveToLeft: bool.isRequired,
  showProjects: bool.isRequired,
};

export default Content;
