import React from 'react'
import styles from "./bottom.module.css"

export const Bottom = props => {
    return (
        <footer className={styles.footer}>
                <div className={ `${ props.isActive ? styles.open : null}` }>
                <span
                    className={ `${ styles.span } ${ props.isActive ? styles.active : null}` }
                    onClick={ props.onClick }
                >
                    Projects
                </span>
                </div>
        </footer>
    );
};