import React from 'react'
import styles from "./right.module.css"
import PropTypes from 'prop-types'

export const Right = (props) => {
    return (
        <aside id="aside-right" className={ styles.right }>
            <div>
                <label
                    className={ `${ styles.label } ${ props.isActive ? styles.active : null}` }
                    /*onMouseEnter={ this.handlesTransition }
                    onMouseLeave={ this.handlesTransition }*/
                    onClick={ props.onClick }
                >
                    Contact
                </label>
            </div>
        </aside>
    );
};

Right.propTypes = {
    isActive: PropTypes.bool.isRequired,
};