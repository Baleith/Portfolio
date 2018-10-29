import React from 'react'
import styles from "./content.module.css"
import PropTypes from 'prop-types'
import { Contact } from './contact/contact';
import { About } from './about/about';
import { ProjectContainer } from '../containers/projectContainer';

export const Content = props => {
    return (
        <div id="content" className={ `${ styles.content }` }>
            <div className={ styles.left }>
                <div className= {`
                    ${ styles.leftOuterLayer }
                    ${ props.moveToRight ? styles.moveToRight : styles.resetTransform }
                    ${ props.showProjects ? styles.removeLeft : styles.resetTransform }
                `}>
                </div>
                { props.moveToRight ? <About/> : null }
            </div>

            { props.showProjects ? <ProjectContainer /> : null }

            <div className={ styles.right }>
                <div className={`
                    ${ styles.rightOuterLayer }
                    ${ props.moveToLeft ? styles.moveToLeft : styles.resetTransform }
                    ${ props.showProjects ? styles.removeRight : styles.resetTransform }
                `}>
                </div>
                { props.moveToLeft ? <Contact/> : null }
            </div>
        </div>
    );
};


Content.propTypes = {
    moveToRight: PropTypes.bool.isRequired,
    moveToLeft: PropTypes.bool.isRequired,
    showProjects: PropTypes.bool.isRequired,
};