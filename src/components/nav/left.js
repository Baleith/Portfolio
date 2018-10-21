import React from 'react'
import styles from "./left.module.css"

export const Left = () => {
    return (
        <aside id="aside-left" className={styles.left}>
            <div>
                <label className={ styles.label }>About</label>
            </div>
        </aside>
    );
};
