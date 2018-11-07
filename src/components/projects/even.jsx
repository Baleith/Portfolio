import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import styles from './project.module.scss';
import { TagList } from './tagList';
import { Anchor } from '../common/anchor';
import { Divider } from '../common/divider';

export const Even = ({ data }) => {
  const {
    git, url, img, title, desc, tags,
  } = data;

  return (
    <div className={styles.odd}>
      <div className={styles.previewContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img} alt="ds" />
          <div className={styles.linksContainer}>
            <Anchor url={git} name="<Källa>" />
            <Anchor url={url} name="Besök" />
          </div>
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

        <div className={styles.tagContainer}>
          <TagList tags={tags} />
        </div>

      </div>
      <div>
        <Divider type="even" />
      </div>
    </div>
  );
};

Even.propTypes = {
  data: shape({
    img: string.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    git: string.isRequired,
    desc: string.isRequired,
    tags: arrayOf(string).isRequired,
  }).isRequired,
};
