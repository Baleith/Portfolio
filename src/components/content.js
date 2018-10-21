import React from 'react'
import styles from "./content.module.css"
import PropTypes from 'prop-types'

export const Content = ({ children }) => {
    return (
        <div id="content">
            <div id="content-left">
                {children}
            </div>

            <div id="content-right">
                content right
            </div>
        </div>
    );
};

Content.propTypes = {
    children: PropTypes.node.isRequired,
}
