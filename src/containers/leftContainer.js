import React, { Component } from 'react';
import { Left } from '../components/nav/left';
import PropTypes from 'prop-types';

export class LeftContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.handleTransition = this.handleTransition.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleTransition() {
        /*const isActive = this.state.isActive;
         this.setState({ isActive: !isActive })*/
    }
    handleClick() {
        this.props.onClick();
        this.setState({
            isActive: !this.state.isActive,
        });
    }


    render() {
        return <Left onClick={this.handleClick} isActive={this.state.isActive}/>;
    }
}

LeftContainer.propTypes = {
    onClick: PropTypes.func.isRequired,
};