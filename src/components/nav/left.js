import React from 'react'
import styles from "./left.module.css"
import PropTypes from 'prop-types'

export const Left = (props) => {
    return (
        <aside id="aside-left" className={styles.left}>
            <div>
                <span
                    onClick={ props.onClick }
                    className={ `${ styles.span } ${ props.isActive ? styles.active : null}` }
                >
                    About
                </span>
            </div>
        </aside>
    );
};


Left.propTypes = {
    isActive: PropTypes.bool.isRequired,
};