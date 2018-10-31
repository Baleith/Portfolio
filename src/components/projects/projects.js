import React from 'react';
import styles from './projects.module.css';
import PropTypes from 'prop-types';

export const Projects = props => {
    return (
        <div className={ styles.container }>
            <h1 className={styles.h1}>Projects</h1>
            {props.projects}
        </div>
    );
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    preview: PropTypes.object,
};


/* {props.preview
    ?
    <Preview
        url={props.preview.url}
        title={props.preview.title}
        img={props.preview.img}
        desc={props.preview.desc}
    />
    : null
}
<div className={ styles.projectsContainer}>
{props.projects}
</div> */