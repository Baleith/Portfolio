import React from 'react'
import { Right } from '../components/nav/right'
import PropTypes from 'prop-types'

export class RightContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.handlesTransition = this.handlesTransition.bind(this);
        this.handlesClick = this.handlesClick.bind(this);
    }

    handlesTransition() {
        /*const isActive = this.state.isActive;
         this.setState({ isActive: !isActive })*/
    }
    handlesClick() {
        this.props.onClick();
        this.setState({
            isActive: !this.state.isActive,
        })
    }


    render() {
        return <Right onClick={this.handlesClick} isActive={this.state.isActive}/>
    }
}

RightContainer.propTypes = {
    onClick: PropTypes.func.isRequired,
};