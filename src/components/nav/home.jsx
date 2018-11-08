import { bool, func } from 'prop-types';
import React from 'react';
import styles from './home.module.scss';
import navText from './navText.module.css';

export const Home = ({ aboutActive, contactActive, onClick }) => {
  const isOpen = aboutActive || contactActive;
  return (
    <div
      id="top"
      className={styles.top}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      <span className={`${!isOpen ? styles.active : null} ${navText.wrapper}`}>
        {'Välk'}
        <span className={`${!isOpen ? navText.coloredText : null} ${styles.span}`}>o</span>
        <span className={`${!isOpen ? navText.coloredText2 : null} ${styles.span}`}>m</span>men
      </span>
    </div>
  );
};
Home.propTypes = {
  contactActive: bool.isRequired,
  aboutActive: bool.isRequired,
  onClick: func.isRequired,
};
