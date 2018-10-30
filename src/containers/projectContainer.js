import React from 'react';
import { Projects } from '../components/projects/projects';
import { Project } from '../components/projects/project';
import Sites from '../components/Projects/sites';

export class ProjectContainer extends React.Component {
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
        this.setState({
            preview: {
                desc: project.desc,
                url: project.url,
                img: project.img,
                title: project.title
            },
        });
    }

    render() {
        return <Projects projects={this.projects} preview={this.state.preview}/>;
    }
}

