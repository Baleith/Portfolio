import React from 'react'
import styles from "./bottom.module.css"

export const Bottom = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <label className={ styles.label }>Content</label>
            </div>
        </footer>
    );
};