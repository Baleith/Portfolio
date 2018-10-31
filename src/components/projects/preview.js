/* import React from 'react';
import styles from './preview.module.css';
import PropTypes from 'prop-types';

export const Preview = props => {
    return(
        <div className={styles.previewContainer}>
            <div className={styles.body}>
            
                <h2 className={styles.h2}>{props.title}</h2>
                <p className={styles.p}>{props.desc}</p>
            </div>

            <div className={styles.imgContainer}>
                <img className={styles.img} src={props.img} alt="ds"/>
            </div>
            <div className={styles.linksContainer}>
                <ul className={styles.ul}>
                    <a href={props.url}><li><span>Gå till sidan</span></li></a>
                    <a href={props.url}><li><span>Gå till Github</span></li></a>
                </ul>
            </div>
            <div className={styles.tagContainer}>
                <ul className={styles.ul}>
                    <li><span>Git</span></li>
                    <li><span>Laravel</span></li>
                    <li><span>PHP</span></li>
                    <li><span>JavaScript</span></li>
                    <li><span>Vue.js</span></li>
                </ul>
            </div> 
        </div>
    );
};

 */