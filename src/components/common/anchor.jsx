import React from 'react';
import { string } from 'prop-types';
import styles from './anchor.module.css';

export const Anchor = ({ url }) => (
  <a href={url} alt="Github">
    <span className={styles.span}>Github</span>
  </a>
);

Anchor.propTypes = {
  url: string.isRequired,
};
