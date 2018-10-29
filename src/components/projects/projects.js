import React from 'react';
import styles from './projects.module.css'
import { Project } from './project';
import { Preview } from './preview';
import styrbostad from '../../images/styrbostsad.jpg';
import PropTypes from 'prop-types'

export const Projects = props => {
    return (
        <div className={ styles.container }>
            <h1>Projects</h1>
            <div className={ styles.projectContainer}>
                <Preview
                    url="www.bostader.se"
                    title="Styrbostad - en samlingsida för hyresrätter."
                    img={styrbostad}
                    desc="Utvecklad i Laravel med delar av frontend i Vue.js.... OSVOSV  OSVOSV OSVOSV OSVOSV"
                />
                <Project
                    url="www.bostader.se"
                    title="Styrbostad - en samlingsida för hyresrätter."
                    img={styrbostad}
                    desc="Utvecklad i Laravel med delar av frontend i Vue.js.... OSVOSV  OSVOSV OSVOSV OSVOSV"
                    onClick={props.onClick}
                />
                <Project
                    url="www.bostader.se"
                    title="Styrbostad - en samlingsida för hyresrätter."
                    img={styrbostad}
                    desc="Utvecklad i Laravel med delar av frontend i Vue.js.... OSVOSV  OSVOSV OSVOSV OSVOSV"
                    onClick={props.onClick}
                />
                <Project
                    url="www.bostader.se"
                    title="Styrbostad - en samlingsida för hyresrätter."
                    img={styrbostad}
                    desc="Utvecklad i Laravel med delar av frontend i Vue.js.... OSVOSV  OSVOSV OSVOSV OSVOSV"
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
};

Projects.propTypes = {
    onClick: PropTypes.func.isRequired,
};