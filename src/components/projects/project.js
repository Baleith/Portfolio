import React from 'react';
import styles from './project.module.css';
import PropTypes from 'prop-types';

export const Project = props => {
    return(
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <a href={props.url}>Besök sidan</a>
            <img className={styles.img} src={props.img} alt="ds"/>
            <p onClick={ props.onClick }>{props.desc}</p>
        </div>
    );
};


Project.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};