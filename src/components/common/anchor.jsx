import React from 'react';
import { string } from 'prop-types';
import styles from './anchor.module.scss';

export const Anchor = ({ url, name }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className={styles.bttn}>{name}</a>
);

Anchor.propTypes = {
  url: string.isRequired,
  name: string.isRequired,
};
