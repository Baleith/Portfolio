import React from 'react';
import { string, arrayOf } from 'prop-types';
import styles from './project.module.css';
import { TagList } from './tagList';
import { Anchor } from '../common/anchor';
import { Divider } from '../common/divider';

export const Project = ({
  title, desc, img, url, tags,
}) => (
  <div>
    <div className={styles.previewContainer}>
      <div className={styles.body}>
        <h2 className={styles.h2}>
          {title}
          <span className={styles.lastLetter}>.</span>
        </h2>
        <p className={styles.p}>{desc}</p>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="ds" />
      </div>
      <div className={styles.linksContainer}>
        <Anchor url={url} />
      </div>
      <div className={styles.tagContainer}>
        <TagList tags={tags} />
      </div>
    </div>
    <Divider />
  </div>
);

Project.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  url: string.isRequired,
  desc: string.isRequired,
  tags: arrayOf(string).isRequired,
};
