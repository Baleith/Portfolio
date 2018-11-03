import React, { Component } from 'react';
import { func } from 'prop-types';
import { Right } from '../components/nav/right';

export class RightContainer extends Component {
  state = {
    isActive: false,
  };

  static propTypes = {
    onClick: func.isRequired,
  };

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
    this.setState(state => ({
      isActive: !state.isActive,
    }));
  }

  render() {
    const { isActive } = this.state;
    return <Right onClick={this.handleClick} isActive={isActive} />;
  }
}
