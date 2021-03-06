import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import styles from './project.module.scss';
import { TagList } from './tagList';
import { Anchor } from '../common/anchor';
import { Divider } from '../common/divider';

export const Odd = ({ data }) => {
  const {
    git, url, img, title, desc, tags,
  } = data;

  return (
    <div className={`${styles.odd} ${styles.projectContainer}`}>
      <div className={styles.previewContainer}>
        <div className={styles.title}>
          <h2 className={styles.h2}>
            {title}
          </h2>
        </div>

        <div className={styles.imgContainer}>
          <img className={styles.img} src={img} alt="project" />
          <div className={styles.linksContainer}>
            <Anchor url={git} name="</Källa>" />
            {url ? <Anchor url={url} name="Besök" /> : null}
          </div>
        </div>
        <div className={styles.body}>
          <p className={styles.p}>{desc}</p>
        </div>

        <div className={styles.tagContainer}>
          <TagList tags={tags} />
        </div>

      </div>
      <div className={styles.dividerContainer}>
        <Divider type="odd" />
      </div>
    </div>
  );
};

Odd.propTypes = {
  data: shape({
    img: string.isRequired,
    title: string.isRequired,
    url: string,
    git: string.isRequired,
    desc: string.isRequired,
    tags: arrayOf(string).isRequired,
  }).isRequired,
};
