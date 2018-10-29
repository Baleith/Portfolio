import React from 'react';
import styles from './preview.module.css'
import PropTypes from 'prop-types'

export const Preview = props => {
    return(
        <div className={styles.preview}>
            <h3><a href={props.url}>{props.url}</a></h3>
            <img className={styles.img} src={props.img} alt="ds"/>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    );
};

