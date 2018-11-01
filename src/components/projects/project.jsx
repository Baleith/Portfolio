import React from 'react';
import { string, arrayOf } from 'prop-types';
import styles from './project.module.css';
import TagList from './tagList';

const Project = ({
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
        <span className={styles.span}>Github</span>
      </div>
      <div className={styles.tagContainer}>
        <TagList tags={tags} />
      </div>
    </div>
    <div className={`${styles.divider} ${styles.dividerFirst}`} />
    <div className={`${styles.divider} ${styles.dividerMiddle}`} />
    <div className={`${styles.divider} ${styles.dividerLast}`} />
  </div>
);

Project.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  url: string.isRequired,
  desc: string.isRequired,
  tags: arrayOf(string).isRequired,
};

export default Project;
