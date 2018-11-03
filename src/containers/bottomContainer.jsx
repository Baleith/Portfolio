import React from 'react';
import { func } from 'prop-types';
import { Bottom } from '../components/nav/bottom';

export class BottomContainer extends React.Component {
  state = {
    isActive: false,
  };

  static propTypes = {
    onClick: func.isRequired,
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
    this.setState(state => ({
      isActive: !state.isActive,
    }));
  }

  render() {
    const { isActive } = this.state;
    return <Bottom onClick={this.handleClick} isActive={isActive} />;
  }
}
