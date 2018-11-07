import React from 'react';
import styles from './welcome-text.module.css';

export const WelcomeText = () => (
  <div id="welcomeText" className={styles.welcomeContainer}>
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>
        <span className={styles.span1} />
        <span className={styles.span2} />
        <span className={styles.span3} />
        <span className={styles.span4} />
        <span className={styles.span5} />
        {'HEJ.'}
      </h1>
    </div>
    {/* <div className={styles.wrapper2}>
      <span className={styles.span2}>E</span>
    </div>
    <div className={styles.wrapper3}>
      <span className={styles.span3}>J</span> */}
    {/* </div> */}
  </div>
);
