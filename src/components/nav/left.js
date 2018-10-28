import React from 'react'
import styles from "./left.module.css"
import PropTypes from 'prop-types'

export const Left = (props) => {
    return (
        <aside id="aside-left" className={styles.left}>
            <div className={`${ styles.container } ${ props.isActive ? styles.open : null}`}>
                <span
                    onClick={ props.onClick }
                    className={`${ styles.span } ${ props.isActive ? styles.setHorizontalText : null}`}
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