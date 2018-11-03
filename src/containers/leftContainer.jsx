import React, { Component } from 'react';
import { func } from 'prop-types';
import { Left } from '../components/nav/left';

export class LeftContainer extends Component {
  state = {
    isActive: false,
  };

  static propTypes = {
    onClick: func.isRequired,
  };

  handleClick = () => {
    const { onClick } = this.props;
    onClick('sa');
    this.setState(state => ({ isActive: !state.isActive }));
  }

  render() {
    const { isActive } = this.state;
    return <Left onClick={this.handleClick} isActive={isActive} />;
  }
}
