import React from 'react'
import styles from "./left.module.css"
import PropTypes from 'prop-types'

export const Left = (props) => {
    return (
        <aside id="aside-left" className={styles.left}>
            <div>
                <label
                    onClick={ props.onClick }
                    className={ `${ styles.label } ${ props.isActive ? styles.active : null}` }
                >
                    About
                </label>
            </div>
        </aside>
    );
};


Left.propTypes = {
    isActive: PropTypes.bool.isRequired,
};