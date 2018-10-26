import React from 'react'
import PropTypes from 'prop-types';
import { Bottom } from '../components/nav/bottom';

export class BottomContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    render() {
        return <Bottom onClick={this.handleClick} isActive={this.state.isActive}/>
    }
}

BottomContainer.propTypes = {
    onClick: PropTypes.func.isRequired,
};