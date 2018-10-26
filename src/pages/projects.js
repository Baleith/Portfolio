import React from 'react';
import styles from './projects.module.css'
import { Project } from '../components/project';
import styrbostad from '../images/styrbostsad.jpg';

export class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ styles.container }>
                <h1>Projects</h1>
                <div className={ styles.projectContainer}>
                    <Project
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
                    />
                    <Project
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
                    />
                    <Project
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
                    />
                </div>
            </div>
        )
    }
}