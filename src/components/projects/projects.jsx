import React from 'react';
import { Project } from './project';
import Sites from './sites';
import styles from './projects.module.css';

export const Projects = () => {
  const projects = Sites.map(({
    id, url, title, img, desc, tags,
  }) => (
    <Project
      key={id}
      url={url}
      title={title}
      img={img}
      desc={desc}
      tags={tags}
    />
  ));

  return (
    <div id="projects" className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
      {projects}
    </div>
  );
};
