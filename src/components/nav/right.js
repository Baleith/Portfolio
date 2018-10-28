import React from 'react'
import styles from "./right.module.css"
import PropTypes from 'prop-types'

export const Right = (props) => {
    return (
        <aside id="aside-right" className={ styles.right }>
            <div className={ `${ styles.container } ${ props.isActive ? styles.open : null}`  }>
                <span
                    className={ `${ styles.span } ${ props.isActive ? styles.setHorizontalText : null}` }
                    /*onMouseEnter={ this.handlesTransition }
                    onMouseLeave={ this.handlesTransition }*/
                    onClick={ props.onClick }
                >
                    Contact
                </span>
            </div>
        </aside>
    );
};

Right.propTypes = {
    isActive: PropTypes.bool.isRequired,
};