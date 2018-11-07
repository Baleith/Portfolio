import React from 'react';
import { string } from 'prop-types';
import styles from './anchor.module.css';

export const Anchor = ({ url, name }) => (
  <span className={styles.span}>
    <a href={url} target="_blank" rel="noopener noreferrer" alt="Github" className={styles.a}>{name}</a>
  </span>
);

Anchor.propTypes = {
  url: string.isRequired,
  name: string.isRequired,
};
