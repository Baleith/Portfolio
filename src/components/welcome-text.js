import React from 'react'
import styles from './welcome-text.module.css'

export const WelcomeText = () => {
        return (
            <div className={styles.welcomeContainer}>
                <div className={styles.wrapper1}>
                    <span className={styles.span1}>
                        Välk
                    </span>
                </div>
                <div className={styles.wrapper2}>
                    <span className={styles.span2}>
                        om
                    </span>
                </div>
                <div className={styles.wrapper3}>
                    <span className={styles.span3}>
                        men.
                    </span>
                </div>
            </div>
        )

};