import React from 'react';
import { Projects } from '../components/projects/projects';

export class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clickat')
    }

    render() {
        return <Projects onClick={this.handleClick}/>
    }
}