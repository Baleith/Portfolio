import React from 'react';
import styles from './projects.module.css';
import { Preview } from './preview';
import PropTypes from 'prop-types';

export const Projects = props => {
    return (
        <div className={ styles.container }>
            <h1>Projects</h1>
            <div className={ styles.projectContainer}>
                {props.preview 
                    ? 
                    <Preview 
                        url={props.preview.url}
                        title={props.preview.title}
                        img={props.preview.img}
                        desc={props.preview.desc}
                    /> 
                    : null
                }
                {props.projects}
            </div>
        </div>
    );
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    preview: PropTypes.object,
};