import React from 'react'
import styles from "./right.module.css"

export const Right = () => {
    return (
        <aside id="aside-right" className={styles.right}>
            <div>
                <label className={ styles.label }>Contact</label>
            </div>
        </aside>
    );
};