import React, { Component } from 'react';
import { Projects } from '../components/projects/projects';
import { Project } from '../components/projects/project';
import Sites from '../components/Projects/sites';

export class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.projects = Sites.map((site, key) =>
            <Project
                key={key}
                url={site.url}
                title={site.title}
                img={site.img}
                desc={site.desc}
                onClick={this.handleClick.bind(null, site)}
            />
        );
    }

    handleClick(project) {
        console.log(project)
        this.setState({
            preview: project
        });
    }

    render() {
        return <Projects projects={this.projects} preview={this.state.preview}/>;
    }
}

