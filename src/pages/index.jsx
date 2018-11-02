import React, { Component } from 'react';

import { RightContainer } from '../containers/rightContainer';
import { LeftContainer } from '../containers/leftContainer';
import { Top } from '../components/nav/top';
import { BottomContainer } from '../containers/bottomContainer';
import { Content } from '../components/content';
import { WelcomeText } from '../components/welcome-text';
import Layout from '../components/layout';


export default class IndexPage extends Component {
  state = {
    moveToLeft: false,
    moveToRight: false,
    showProjects: false,
  };

  handleClickAbout = () => {
    this.setState(state => ({
      moveToRight: !state.moveToRight,
      moveToLeft: false,
      showProjects: false,
    }));
  }

  handleClickContact = () => {
    this.setState(state => ({
      moveToLeft: !state.moveToLeft,
      moveToRight: false,
      showProjects: false,
    }));
  }

  handleClickProjects = () => {
    this.setState(state => ({
      moveToLeft: false,
      moveToRight: false,
      showProjects: !state.showProjects,
    }));
  }

  render() {
    const { moveToLeft, moveToRight, showProjects } = this.state;
    return (
      <Layout>
        <Top />
        <LeftContainer onClick={this.handleClickAbout} />
        <Content moveToLeft={moveToLeft} moveToRight={moveToRight} showProjects={showProjects} />
        { !moveToLeft && !moveToRight && !showProjects ? <WelcomeText /> : null }
        <RightContainer onClick={this.handleClickContact} />
        <BottomContainer onClick={this.handleClickProjects} />
      </Layout>
    );
  }
}
