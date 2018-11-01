import React, { Component } from 'react';
import { Projects } from '../components/projects/projects';
import Project from '../components/projects/project';
import Sites from '../components/projects/sites';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.projects = Sites.map(({
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
  }

  render() {
    return <Projects projects={this.projects} />;
  }
}

export default ProjectContainer;
