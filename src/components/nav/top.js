import React from 'react'
import styles from './top.module.css'

export const Top = () => {
    return (
        <div id="top" className={styles.top}>
            <div className={styles.topLeft}>
                <label className={ styles.label }>
                    Jonathan Nilsson
                </label>
            </div>
            <div className={styles.topRight}>
                <div>
                    <label className={ styles.label }>
                        en
                    </label>
                    <label className={ styles.label }>
                        sv
                    </label>
                </div>
            </div>
        </div>
    );
};