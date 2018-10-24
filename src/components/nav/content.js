import React from 'react'
import styles from "./content.module.css"

export const Content = (props) => {
    return (
        <div id="content" className={ `${ styles.content }` }>
            <div className={ `${ styles.left } ${ props.moveToRight ? styles.moveToRight : styles.resetTransform }` }>
                content left
            </div>
            <div className={ `${ styles.right } ${ props.moveToLeft ? styles.moveToLeft : styles.resetTransform }` }>
                content right
            </div>
        </div>
    );
};


