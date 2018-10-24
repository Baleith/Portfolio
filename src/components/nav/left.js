import React from 'react'
import styles from "./left.module.css"

export const Left = (props) => {
    return (
        <aside id="aside-left" className={styles.left}>
            <div>
                <label
                    onClick={ props.onClick }
                    className={ styles.label }
                >
                    About
                </label>
            </div>
        </aside>
    );
};
