import React from 'react';
import { string, arrayOf, number } from 'prop-types';
import styles from './project.module.scss';
import { TagList } from './tagList';
import { Anchor } from '../common/anchor';
import { Divider } from '../common/divider';

export const Project = ({
  id, title, desc, img, url, tags,
}) => {
  if (id % 2) {
    return (
      <div className={styles.odd}>
        <div className={styles.previewContainer}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={img} alt="ds" />
          </div>
          <div className={styles.title}>
            <h2 className={styles.h2}>
              {title}
              <span className={styles.lastLetter}>.</span>
            </h2>
          </div>

          <div className={styles.body}>
            <p className={styles.p}>{desc}</p>
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
  }
  return (
    <div className={styles.even}>
      <div className={styles.previewContainer}>
        <div className={styles.title}>
          <h2 className={styles.h2}>
            {title}
            <span className={styles.lastLetter}>.</span>
          </h2>
        </div>

        <div className={styles.imgContainer}>
          <img className={styles.img} src={img} alt="ds" />
        </div>
        <div className={styles.body}>
          <p className={styles.p}>{desc}</p>
        </div>

        <div className={styles.tagContainer}>
          <TagList tags={tags} />
        </div>

        <div className={styles.linksContainer}>
          <Anchor url={url} />
        </div>
      </div>
      <Divider />
    </div>
  );
};
Project.propTypes = {
  id: number.isRequired,
  img: string.isRequired,
  title: string.isRequired,
  url: string.isRequired,
  desc: string.isRequired,
  tags: arrayOf(string).isRequired,
};
