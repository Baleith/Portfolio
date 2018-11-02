import React from 'react';
import { arrayOf, string } from 'prop-types';
import styles from './tagList.module.css';

export const TagList = ({ tags }) => {
  const listItems = tags.map((tag, i) => (
    <li key={i.toString()}>
      <span className={styles.span}>
        {tag}
      </span>
    </li>
  ));

  return (
    <ul className={styles.ul}>
      {listItems}
    </ul>
  );
};

TagList.propTypes = {
  tags: arrayOf(string).isRequired,
};
